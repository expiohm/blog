import { NextResponse } from "next/server"
import { z } from "zod"
import { render } from "@react-email/render"
import ContactFormEmail from "@/emails/ContactFormEmail"
import nodemailer from "nodemailer"

// Validate environment variables
const requiredEnvVars = {
  ZOHO_EMAIL: process.env.ZOHO_EMAIL,
  ZOHO_APP_PASSWORD: process.env.ZOHO_APP_PASSWORD,
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
}

// Check if any required environment variable is missing
const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key)

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  )
}

// Create transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
})

// Validate request body
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    console.log('Form data:', { name: validatedData.name, email: validatedData.email, phone: validatedData.phone || '[Not provided]', message: '[REDACTED]' });

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
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      message: validatedData.message
    }));

    // Email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
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