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
  secure: true, // use SSL
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
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

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return NextResponse.json(
        { error: 'Email service is currently unavailable. Please try again later.' },
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
    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.response);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
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
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 