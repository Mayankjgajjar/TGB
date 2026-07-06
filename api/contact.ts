import { Resend } from 'resend';

declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

// Initialize Resend client with Vercel environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

import { isRateLimited } from './rateLimit';

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

  try {
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

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tgbsign@proton.me', // change if needed
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
    });

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