import { Resend } from 'resend';
import { z } from 'zod';

declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

import { isRateLimited } from './rateLimit.js';

// ── Zod Schema ────────────────────────────────────────────────────────────────

const warrantySchema = z.object({
  customerName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().min(7, 'Enter a valid phone number.'),
  invoiceNumber: z.string().min(1, 'Invoice number is required.'),
  warrantyNumber: z.string().min(1, 'Warranty number is required.'),
  purchaseDate: z.string().min(1, 'Purchase date is required.'),
  signageType: z.string().min(1, 'Signage type is required.'),
  issueDetails: z
    .string()
    .min(10, 'Issue description must be at least 10 characters.')
    .max(2000, 'Issue description must be under 2000 characters.'),
  imageFileName: z.string().optional(),
  imageContent: z.string().optional(),
  consentGiven: z.literal(true, {
    message: 'Consent is required to submit your claim.',
  }),
  consentTimestamp: z.string().min(1, 'Consent timestamp is required.'),
});

// ── Handler ───────────────────────────────────────────────────────────────────

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 1. Rate limiting
  const ipHeader =
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket.remoteAddress ||
    '127.0.0.1';
  const clientIp = (
    typeof ipHeader === 'string' ? ipHeader.split(',')[0] : ipHeader
  ).trim();

  if (await isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  // 2. Zod validation
  const parsed = warrantySchema.safeParse(req.body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((e) => {
      const field = e.path[0] as string;
      errors[field] = e.message;
    });
    return res.status(400).json({ success: false, errors });
  }

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
    consentGiven,
    consentTimestamp,
  } = parsed.data;

  // 3. Resend API key check
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'Resend API Key (RESEND_API_KEY) is missing from environment variables.',
    });
  }

  // 4. Send email
  try {
    const resend = new Resend(apiKey);

    const attachments: { filename: string; content: Buffer }[] = [];
    if (imageContent && imageFileName) {
      const base64Data = imageContent.replace(/^data:image\/\w+;base64,/, '');
      attachments.push({
        filename: imageFileName,
        content: Buffer.from(base64Data, 'base64'),
      });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@tgbsign.com';
    const fromName = process.env.RESEND_FROM_NAME || 'TGB Sign';
    const toEmail = process.env.RESEND_TO_EMAIL || 'tgbsign@proton.me';

    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
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
        <p><strong>Consent Given:</strong> ${consentGiven ? 'Yes' : 'No'}</p>
        <p><strong>Consent Timestamp:</strong> ${consentTimestamp}</p>
        <p><strong>Issue Details:</strong></p>
        <p>${issueDetails}</p>
        ${imageFileName ? `<p><strong>Attached Photo:</strong> ${imageFileName} (see attachment)</p>` : ''}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('[warranty] Resend error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || error.toString(),
    });
  }
}
