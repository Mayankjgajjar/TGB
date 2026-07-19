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

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(1, 'Last name is required.'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+\d][\d\s\-().]{7,19}$/.test(val), 'Enter a valid phone number.'),
  email: z.string().email('Enter a valid email address.'),
  company: z.string().optional(),
  location: z.string().optional(),
  signage: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(2000, 'Message must be under 2000 characters.'),
  consentGiven: z.literal(true, {
    message: 'Consent is required to submit your enquiry.',
  }),
  consentTimestamp: z.string().min(1, 'Consent timestamp is required.'),
  attachmentFileName: z.string().optional(),
  attachmentContent: z.string().optional(),
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
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((e) => {
      const field = e.path[0] as string;
      errors[field] = e.message;
    });
    return res.status(400).json({ success: false, errors });
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    company,
    location,
    signage,
    message,
    consentGiven,
    consentTimestamp,
    attachmentFileName,
    attachmentContent,
  } = parsed.data;

  // 3. File validation (optional upload, up to 50MB)
  const attachments: { filename: string; content: string }[] = [];
  if (attachmentContent && attachmentFileName) {
    try {
      const allowedExtensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.webp',
        '.pdf',
        '.zip',
        '.dwg',
        '.dxf',
        '.ai',
        '.eps',
        '.psd',
        '.cdr',
        '.doc',
        '.docx',
        '.txt',
      ];
      const { base64Data } = validateFilePayload(
        attachmentContent,
        attachmentFileName,
        50,
        allowedExtensions,
      );
      attachments.push({
        filename: attachmentFileName,
        content: base64Data,
      });
    } catch (err: any) {
      console.warn('[contact] File validation failed:', err.message);
      return res.status(400).json({
        success: false,
        error: err.message || 'Invalid file payload.',
      });
    }
  }

  // 4. Input sanitization (escape user input values to prevent HTML injection)
  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safePhone = phone ? escapeHtml(phone) : '';
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : '';
  const safeLocation = location ? escapeHtml(location) : '';
  const safeSignage = signage ? escapeHtml(signage) : '';
  const safeMessage = escapeHtml(message);

  // 5. Resend API key check
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'Resend API Key (RESEND_API_KEY) is missing from environment variables.',
    });
  }

  // 6. Send emails
  try {
    const resend = new Resend(apiKey);

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@tgbsign.com';
    const fromName = process.env.RESEND_FROM_NAME || 'TGB Sign';
    const toEmail = process.env.RESEND_TO_EMAIL || 'tgbsign@proton.me';

    await Promise.all([
      // Notification to business
      resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: toEmail,
        subject: 'New Website Inquiry',
        attachments,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany || 'Not provided'}</p>
          <p><strong>Location:</strong> ${safeLocation || 'Not provided'}</p>
          <p><strong>Type of Signage:</strong> ${safeSignage || 'Not specified'}</p>
          <p><strong>Consent Given:</strong> ${consentGiven ? 'Yes' : 'No'}</p>
          <p><strong>Consent Timestamp:</strong> ${consentTimestamp}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
      // Auto-reply to customer
      resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: email,
        subject: 'Inquiry Received - TGB Enterprise',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; line-height: 1.6; color: #333333; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #0c0c0c; margin-top: 0; border-bottom: 1px solid #eaeaea; padding-bottom: 12px; font-weight: 600;">Inquiry Received</h2>
            <p>Hi ${safeFirstName},</p>
            <p>Your project inquiry has been received. One of our design engineers will contact you shortly to schedule your consultation.</p>
            <br />
            <p>Best Regards,</p>
            <p><strong>TGB Enterprise Team</strong></p>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 24px 0;" />
            <p style="font-size: 11px; color: #888888; font-style: italic; margin-bottom: 0;">This is an automated response. Please do not reply directly to this email.</p>
          </div>
        `,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('[contact] Resend error:', error);
    return res.status(500).json({
      success: false,
      error:
        'An internal server error occurred while sending your message. Please try again later.',
    });
  }
}
