import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(body: Partial<ContactPayload>): string | null {
  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email.trim())) {
    return "A valid email address is required.";
  }
  if (!body.subject || typeof body.subject !== "string" || body.subject.trim().length < 5) {
    return "Subject must be at least 5 characters.";
  }
  if (!body.message || typeof body.message !== "string" || body.message.trim().length < 20) {
    return "Message must be at least 20 characters.";
  }
  return null;
}

const transporter = nodemailer.createTransport({
  host: "mail.athena-control.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    let body: Partial<ContactPayload>;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const validationError = validatePayload(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      name: body.name!.trim(),
      email: body.email!.trim().toLowerCase(),
      company: body.company?.trim() || undefined,
      subject: body.subject!.trim(),
      message: body.message!.trim(),
    };

    await transporter.sendMail({
      from: `"Athena Control Website" <${process.env.SMTP_USER}>`,
      to: "sales@athena-control.com",
      replyTo: `"${payload.name}" <${payload.email}>`,
      subject: `[Website Inquiry] ${payload.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #1B6240; padding: 24px 32px;">
            <p style="margin: 0; color: white; font-size: 20px; font-weight: bold; letter-spacing: 2px;">ATHENA CONTROL</p>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 13px;">New website inquiry</p>
          </div>
          <div style="padding: 32px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b6b6b; width: 110px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${payload.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b6b6b; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${payload.email}" style="color: #1B6240;">${payload.email}</a></td>
              </tr>
              ${payload.company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b6b6b; vertical-align: top;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${payload.company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b6b6b; vertical-align: top;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${payload.subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b6b6b; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; line-height: 1.6; white-space: pre-wrap;">${payload.message}</td>
              </tr>
            </table>
            <p style="margin: 24px 0 0; font-size: 12px; color: #aaa;">
              Sent from athena-control.com contact form · ${new Date().toLocaleString("en-GB", { timeZone: "Europe/Istanbul" })} (İzmir time)
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. Our team will get back to you within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
