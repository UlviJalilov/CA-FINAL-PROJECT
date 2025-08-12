import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER); 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "-"}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
