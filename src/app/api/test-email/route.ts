import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // Log environment variables (without sensitive data)
    console.log('SMTP Configuration:')
    console.log('Host:', process.env.SMTP_HOST)
    console.log('Port:', process.env.SMTP_PORT)
    console.log('User:', process.env.SMTP_USER ? 'Set' : 'Not Set')
    console.log('Password:', process.env.SMTP_PASSWORD ? 'Set' : 'Not Set')
    console.log('Admin Email:', process.env.ADMIN_EMAIL)

    // Test SMTP connection
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Verify SMTP connection
    await transporter.verify()

    return NextResponse.json(
      { message: "SMTP configuration is valid" },
      { status: 200 }
    )
  } catch (error) {
    console.error("SMTP Configuration Error:", error)
    return NextResponse.json(
      { 
        message: "SMTP configuration error",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
} 