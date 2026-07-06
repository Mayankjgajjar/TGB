import { Resend } from 'resend';

declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

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
      customerName,
      email,
      phone,
      invoiceNumber,
      warrantyNumber,
      purchaseDate,
      signageType,
      issueDetails,
      imageFileName,
      imageContent,
    } = req.body;

    const attachments = [];
    if (imageContent && imageFileName) {
      // Extract the raw base64 data by stripping out the data URL prefix
      const base64Data = imageContent.replace(/^data:image\/\w+;base64,/, '');
      attachments.push({
        filename: imageFileName,
        content: Buffer.from(base64Data, 'base64'),
      });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tgbsign@proton.me',
      subject: 'New Warranty Claim Submission',
      attachments,
      html: `
        <h2>New Warranty Claim Submission</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Warranty Number:</strong> ${warrantyNumber}</p>
        <p><strong>Purchase Date:</strong> ${purchaseDate}</p>
        <p><strong>Signage Type:</strong> ${signageType}</p>
        <p><strong>Issue Details:</strong></p>
        <p>${issueDetails}</p>
        ${imageFileName ? `<p><strong>Attached Photo:</strong> ${imageFileName} (Attached to email)</p>` : ''}
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
