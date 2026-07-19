import { Buffer } from 'buffer';

/**
 * Escapes special characters to prevent HTML injection (XSS).
 */
export function escapeHtml(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Magic number byte signatures for common file formats
const MAGIC_NUMBERS: Record<string, number[]> = {
  '.pdf': [0x25, 0x50, 0x44, 0x46], // %PDF
  '.png': [0x89, 0x50, 0x4E, 0x47], // PNG
  '.jpg': [0xFF, 0xD8, 0xFF], // JPEG
  '.jpeg': [0xFF, 0xD8, 0xFF], // JPEG
  '.gif': [0x47, 0x49, 0x46, 0x38], // GIF
  '.webp': [0x52, 0x49, 0x46, 0x46], // WebP (RIFF header)
  '.zip': [0x50, 0x4B, 0x03, 0x04], // ZIP
  '.docx': [0x50, 0x4B, 0x03, 0x04], // DOCX is a ZIP container
  '.dwg': [0x41, 0x43, 0x31, 0x30], // DWG (AC10)
  '.psd': [0x38, 0x42, 0x50, 0x53], // PSD (8BPS)
  '.eps': [0x25, 0x21, 0x50, 0x53], // EPS (%!PS)
};

/**
 * Validates a base64-encoded file's MIME type signature and payload size limit.
 * Returns the decoded file buffer if valid; otherwise throws an error.
 */
export function validateFilePayload(
  base64Content: string,
  fileName: string,
  maxSizeMB: number,
  allowedExtensions: string[]
): Buffer {
  // 1. Verify data URI structure
  const match = base64Content.match(/^data:([^;]+);base64,(.*)$/);
  if (!match) {
    throw new Error('Invalid file format structure.');
  }

  const base64Data = match[2];
  const buffer = Buffer.from(base64Data, 'base64');

  // 2. Size validation
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (buffer.length > maxSizeBytes) {
    throw new Error(`File is too large. Please select a file under ${maxSizeMB}MB.`);
  }

  // 3. Extension validation
  const ext = '.' + fileName.split('.').pop()?.toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    throw new Error(`File extension '${ext}' is not permitted.`);
  }

  // 4. Magic number signature validation for binary formats
  const magic = MAGIC_NUMBERS[ext];
  if (magic && buffer.length >= magic.length) {
    for (let i = 0; i < magic.length; i++) {
      if (buffer[i] !== magic[i]) {
        throw new Error(`MIME signature validation failed for file format: ${ext}.`);
      }
    }
  }

  return buffer;
}
