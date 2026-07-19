import { Resend } from 'resend';
import { z } from 'zod';
import { isRateLimited } from './rateLimit.js';
import { escapeHtml, validateFilePayload } from './utils.js';

declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

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
  const clientIp = (typeof ipHeader === 'string' ? ipHeader.split(',')[0] : ipHeader).trim();

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

  // 3. File validation (optional, max 4MB, images only)
  const attachments: { filename: string; content: string }[] = [];
  if (imageContent && imageFileName) {
    try {
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
      const { base64Data } = validateFilePayload(imageContent, imageFileName, 4, allowedExtensions);
      attachments.push({
        filename: imageFileName,
        content: base64Data,
      });
    } catch (err: any) {
      console.warn('[warranty] File validation failed:', err.message);
      return res.status(400).json({
        success: false,
        error: err.message || 'Invalid file payload.',
      });
    }
  }

  // 4. Input sanitization (escape user input values to prevent HTML injection)
  const safeCustomerName = escapeHtml(customerName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeInvoiceNumber = escapeHtml(invoiceNumber);
  const safeWarrantyNumber = escapeHtml(warrantyNumber);
  const safePurchaseDate = escapeHtml(purchaseDate);
  const safeSignageType = escapeHtml(signageType);
  const safeIssueDetails = escapeHtml(issueDetails);

  // 5. Resend API key check
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'Resend API Key (RESEND_API_KEY) is missing from environment variables.',
    });
  }

  // 6. Send email
  try {
    const resend = new Resend(apiKey);

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
        <p><strong>Customer Name:</strong> ${safeCustomerName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Invoice Number:</strong> ${safeInvoiceNumber}</p>
        <p><strong>Warranty Number:</strong> ${safeWarrantyNumber}</p>
        <p><strong>Purchase Date:</strong> ${safePurchaseDate}</p>
        <p><strong>Signage Type:</strong> ${safeSignageType}</p>
        <p><strong>Consent Given:</strong> ${consentGiven ? 'Yes' : 'No'}</p>
        <p><strong>Consent Timestamp:</strong> ${consentTimestamp}</p>
        <p><strong>Issue Details:</strong></p>
        <p>${safeIssueDetails}</p>
        ${imageFileName ? `<p><strong>Attached Photo:</strong> ${escapeHtml(imageFileName)} (see attachment)</p>` : ''}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('[warranty] Resend error:', error);
    return res.status(500).json({
      success: false,
      error:
        'An internal server error occurred while submitting your claim. Please try again later.',
    });
  }
}
