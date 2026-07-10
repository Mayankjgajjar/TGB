import { describe, it, expect, vi, beforeEach } from 'vitest';

const ALL_VARS = [
  'VITE_CONTACT_EMAIL',
  'VITE_CONTACT_PHONE',
  'VITE_SITE_URL',
  'VITE_SITE_NAME',
  'VITE_WHATSAPP_NUMBER',
  'VITE_STUDIO_LATITUDE',
  'VITE_STUDIO_LONGITUDE',
  'VITE_MAPS_EMBED_URL',
  'VITE_MAPS_LINK',
  'VITE_GA4_MEASUREMENT_ID',
  'VITE_SENTRY_DSN',
];

beforeEach(() => {
  vi.unstubAllEnvs();
  for (const v of ALL_VARS) {
    vi.stubEnv(v, '');
  }
});

describe('validateEnv', () => {
  it('warns about missing required vars (DEV is true in Vitest)', async () => {
    vi.stubEnv('VITE_CONTACT_EMAIL', '');
    vi.stubEnv('VITE_CONTACT_PHONE', '');
    vi.stubEnv('VITE_SITE_URL', '');
    vi.stubEnv('VITE_SITE_NAME', '');

    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { validateEnv } = await import('../env');
    validateEnv();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Missing or placeholder values'));
    warn.mockRestore();
  });

  it('does not warn when all required vars are set with a real key', async () => {
    vi.stubEnv('VITE_CONTACT_EMAIL', 'test@example.com');
    vi.stubEnv('VITE_CONTACT_PHONE', '+1234567890');
    vi.stubEnv('VITE_SITE_URL', 'https://example.com');
    vi.stubEnv('VITE_SITE_NAME', 'Test Site');
    vi.stubEnv('VITE_SENTRY_DSN', '');

    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { validateEnv } = await import('../env');
    validateEnv();
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it('warns about GA4 placeholder G-XXXXXXXXXX', async () => {
    vi.stubEnv('VITE_CONTACT_EMAIL', 'test@example.com');
    vi.stubEnv('VITE_CONTACT_PHONE', '+1234567890');
    vi.stubEnv('VITE_SITE_URL', 'https://example.com');
    vi.stubEnv('VITE_SITE_NAME', 'Test Site');
    vi.stubEnv('VITE_GA4_MEASUREMENT_ID', 'G-XXXXXXXXXX');

    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { validateEnv } = await import('../env');
    validateEnv();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Optional VITE_GA4_MEASUREMENT_ID'));
    warn.mockRestore();
  });

  it('does not warn about real-looking GA4 ID', async () => {
    vi.stubEnv('VITE_CONTACT_EMAIL', 'test@example.com');
    vi.stubEnv('VITE_CONTACT_PHONE', '+1234567890');
    vi.stubEnv('VITE_SITE_URL', 'https://example.com');
    vi.stubEnv('VITE_SITE_NAME', 'Test Site');
    vi.stubEnv('VITE_GA4_MEASUREMENT_ID', 'G-ABC123DEF');

    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { validateEnv } = await import('../env');
    validateEnv();
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});

describe('getEnvVar', () => {
  it('returns the env value when set', async () => {
    vi.stubEnv('VITE_SITE_NAME', 'My Site');
    const { getEnvVar } = await import('../env');
    expect(getEnvVar('VITE_SITE_NAME', 'Fallback')).toBe('My Site');
  });

  it('returns fallback when env var is empty', async () => {
    vi.stubEnv('VITE_SITE_NAME', '');
    const { getEnvVar } = await import('../env');
    expect(getEnvVar('VITE_SITE_NAME', 'Fallback')).toBe('Fallback');
  });

  it('returns fallback when env var is missing', async () => {
    const { getEnvVar } = await import('../env');
    expect(getEnvVar('VITE_SITE_NAME' as any, 'Fallback')).toBe('Fallback');
  });
});
