import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
        }

        // Validate env vars are loaded
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
            return NextResponse.json(
                { error: 'Server email configuration is missing. Please contact the admin.' },
                { status: 500 }
            );
        }

        // Configure nodemailer SMTP transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify SMTP connection before sending
        try {
            await transporter.verify();
        } catch (verifyErr) {
            console.error('SMTP verification failed:', verifyErr.message);
            return NextResponse.json(
                { error: 'Email server connection failed. Check credentials.' },
                { status: 500 }
            );
        }

        // 1. Send notification email to the owner (Puneet)
        const ownerMailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `📬 New Portfolio Message from ${name}`,
            text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 32px; line-height: 1.7; max-width: 600px; margin: auto; background: #fafafa; border-radius: 12px;">
                    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 24px 32px; border-radius: 12px 12px 0 0; color: #fff;">
                        <h2 style="margin: 0; font-size: 20px;">📬 New Portfolio Contact</h2>
                        <p style="margin: 8px 0 0; opacity: 0.8; font-size: 13px;">Someone reached out via your portfolio website</p>
                    </div>
                    <div style="background: #fff; padding: 28px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e8e8; border-top: none;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 13px; width: 80px;">Name</td>
                                <td style="padding: 8px 0; font-weight: 600; color: #333;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td>
                                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px;">
                            <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message</p>
                            <div style="background: #f4f6f9; padding: 16px 20px; border-left: 4px solid #2563eb; border-radius: 6px; white-space: pre-wrap; color: #333; font-size: 14px;">${message}</div>
                        </div>
                        <div style="margin-top: 24px; text-align: center;">
                            <a href="mailto:${email}?subject=Re: Portfolio Contact" style="display: inline-block; padding: 10px 28px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
                        </div>
                    </div>
                </div>
            `,
        };

        // 2. Send confirmation email to the visitor who submitted the form
        const visitorMailOptions = {
            from: `"Puneet Panwar" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${name}! ✨`,
            text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nHere's what you sent:\n"${message}"\n\nBest regards,\nPuneet Panwar\nAI/ML & Frontend Developer\nhttps://github.com/Puneet-3`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 32px; line-height: 1.7; max-width: 600px; margin: auto; background: #fafafa; border-radius: 12px;">
                    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 24px 32px; border-radius: 12px 12px 0 0; color: #fff;">
                        <h2 style="margin: 0; font-size: 20px;">✨ Thank You for Connecting!</h2>
                        <p style="margin: 8px 0 0; opacity: 0.8; font-size: 13px;">Your message has been received</p>
                    </div>
                    <div style="background: #fff; padding: 28px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e8e8; border-top: none;">
                        <p style="color: #333; font-size: 15px;">Hi <strong>${name}</strong>,</p>
                        <p style="color: #555; font-size: 14px;">Thank you for reaching out! I've received your message and will get back to you as soon as possible — usually within 24-48 hours.</p>
                        
                        <div style="margin: 20px 0;">
                            <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Your message:</p>
                            <div style="background: #f4f6f9; padding: 16px 20px; border-left: 4px solid #2563eb; border-radius: 6px; white-space: pre-wrap; color: #333; font-size: 14px;">${message}</div>
                        </div>

                        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
                        
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div>
                                <p style="margin: 0; font-weight: 700; color: #333; font-size: 14px;">Puneet Panwar</p>
                                <p style="margin: 2px 0 0; color: #888; font-size: 12px;">AI/ML & Frontend Developer</p>
                                <div style="margin-top: 8px;">
                                    <a href="https://github.com/Puneet-3" style="color: #2563eb; text-decoration: none; font-size: 12px; margin-right: 12px;">GitHub</a>
                                    <a href="https://linkedin.com/in/puneet-panwar" style="color: #2563eb; text-decoration: none; font-size: 12px;">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await transporter.sendMail(ownerMailOptions);
        await transporter.sendMail(visitorMailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        console.error('Full error:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }
}
