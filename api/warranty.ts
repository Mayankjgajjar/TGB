import { Resend } from 'resend';

declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  try {
    const {
      customerName,
      email,
      phone,
      invoiceNumber,
      purchaseDate,
      signageType,
      issueDetails,
    } = req.body;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tgbsign@proton.me',
      subject: 'New Warranty Claim Submission',
      html: `
        <h2>New Warranty Claim Submission</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Purchase Date:</strong> ${purchaseDate}</p>
        <p><strong>Signage Type:</strong> ${signageType}</p>
        <p><strong>Issue Details:</strong></p>
        <p>${issueDetails}</p>
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
