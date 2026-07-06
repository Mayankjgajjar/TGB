import { Resend } from 'resend';

declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

import { isRateLimited } from './rateLimit.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  // Extract client IP address from Vercel edge headers
  const ipHeader = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || '127.0.0.1';
  const clientIp = (typeof ipHeader === 'string' ? ipHeader.split(',')[0] : ipHeader).trim();

  if (await isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'Resend API Key (RESEND_API_KEY) is missing or undefined in Vercel environment variables.',
    });
  }

  try {
    const resend = new Resend(apiKey);
    const {
      firstName,
      lastName,
      phone,
      email,
      company,
      location,
      signage,
      message,
    } = req.body;

    await Promise.all([
      // 1. Send inquiry details notification to ourselves
      resend.emails.send({
        from: 'TGB Sign <info@tgbsign.com>',
        to: 'tgbsign@proton.me',
        subject: 'New Website Inquiry',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Type of Signage:</strong> ${signage}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
      // 2. Send automated confirmation auto-reply to the customer
      resend.emails.send({
        from: 'TGB Sign <info@tgbsign.com>',
        to: email,
        subject: 'Inquiry Received - TGB Enterprise',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; line-height: 1.6; color: #333333; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #0c0c0c; margin-top: 0; border-bottom: 1px solid #eaeaea; padding-bottom: 12px; font-weight: 600;">Inquiry Received</h2>
            <p>Hi ${firstName},</p>
            <p>Your project inquiry has been received. One of our design engineers will contact you shortly to schedule your consultation.</p>
            <br />
            <p>Best Regards,</p>
            <p><strong>TGB Enterprise Team</strong></p>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 24px 0;" />
            <p style="font-size: 11px; color: #888888; font-style: italic; margin-bottom: 0;">This is an automated response. Please do not reply directly to this email.</p>
          </div>
        `,
      })
    ]);

    return res.status(200).json({
      success: true,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message || error.toString(),
    });
  }
}