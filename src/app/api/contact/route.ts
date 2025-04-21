import { NextResponse } from "next/server"
import { z } from "zod"
import { render } from "@react-email/render"
import ContactFormEmail from "@/emails/ContactFormEmail"
import nodemailer from "nodemailer"

// Validate environment variables
const requiredEnvVars = [
  'ZOHO_EMAIL',
  'ZOHO_APP_PASSWORD',
  'RECIPIENT_EMAIL'
] as const

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`)
    throw new Error(`Missing required environment variable: ${envVar}`)
  }
}

// Create transporter with Zoho SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false // Only use this in development
  },
  pool: true, // Use connection pooling
  maxConnections: 5, // Maximum number of connections in the pool
  maxMessages: 100, // Maximum number of messages per connection
  rateDelta: 1000, // Time interval in ms for rate limiting
  rateLimit: 5 // Maximum number of messages per rateDelta
})

// Validate request body
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
})

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.safeParse(body);
    
    if (!validatedData.success) {
      const errors = validatedData.error.errors.map(err => err.message);
      return NextResponse.json(
        { error: 'Invalid form data', details: errors },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validatedData.data;
    
    console.log('Form data:', { name, email, phone: phone || '[Not provided]', message: '[REDACTED]' });

    // Verify SMTP connection with retry logic
    let retryCount = 0;
    const maxRetries = 3;
    let lastError = null;

    while (retryCount < maxRetries) {
      try {
        await transporter.verify();
        console.log('SMTP connection verified successfully');
        break;
      } catch (error) {
        lastError = error;
        console.error(`SMTP connection attempt ${retryCount + 1} failed:`, error);
        retryCount++;
        if (retryCount < maxRetries) {
          console.log(`Retrying in 2 seconds... (${retryCount}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }

    if (retryCount === maxRetries) {
      console.error('All SMTP connection attempts failed:', lastError);
      return NextResponse.json(
        { 
          error: 'Email service is currently unavailable',
          details: 'Failed to establish connection with the email server after multiple attempts. Please try again later.'
        },
        { status: 503 }
      );
    }

    // Render the email template
    const emailHtml = render(ContactFormEmail({
      name,
      email,
      phone,
      message
    }));

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    };

    console.log('Sending email...');
    // Send email with retry logic
    retryCount = 0;
    while (retryCount < maxRetries) {
      try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result.response);
        return NextResponse.json(
          { message: 'Email sent successfully' },
          { status: 200 }
        );
      } catch (error) {
        console.error(`Email sending attempt ${retryCount + 1} failed:`, error);
        retryCount++;
        if (retryCount < maxRetries) {
          console.log(`Retrying in 2 seconds... (${retryCount}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }

    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: 'All attempts to send the email failed. Please try again later.'
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error('Error in contact API:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your input.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred',
        details: 'Please try again later or contact support if the problem persists.'
      },
      { status: 500 }
    );
  }
} 