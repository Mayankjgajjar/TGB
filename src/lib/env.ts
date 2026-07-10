const REQUIRED_VITE_VARS: (keyof ImportMetaEnv)[] = [
  'VITE_CONTACT_EMAIL',
  'VITE_CONTACT_PHONE',
  'VITE_SITE_URL',
  'VITE_SITE_NAME',
];

const OPTIONAL_VITE_VARS: (keyof ImportMetaEnv)[] = [
  'VITE_WHATSAPP_NUMBER',
  'VITE_STUDIO_LATITUDE',
  'VITE_STUDIO_LONGITUDE',
  'VITE_MAPS_EMBED_URL',
  'VITE_MAPS_LINK',
  'VITE_GA4_MEASUREMENT_ID',
  'VITE_SENTRY_DSN',
];

export function validateEnv(): void {
  if (typeof import.meta === 'undefined') return;

  const missing: string[] = [];

  for (const key of REQUIRED_VITE_VARS) {
    const value = import.meta.env[key] as string | undefined;
    if (
      !value ||
      value === 'undefined' ||
      value === 'G-XXXXXXXXXX'
    ) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    if (import.meta.env.DEV) {
      console.warn(
        `[env] Missing or placeholder values for: ${missing.join(', ')}. ` +
          'Some features may not work correctly. Copy .env.example to .env.local and fill in real values.',
      );
    } else {
      console.error(`[env] Missing required environment variables: ${missing.join(', ')}.`);
    }
  }

  if (import.meta.env.DEV) {
    for (const key of OPTIONAL_VITE_VARS) {
      const value = import.meta.env[key] as string | undefined;
      if (!value || value === 'undefined') {
        console.info(`[env] Optional ${key} not set — using fallback or skipping feature.`);
      } else if (value === 'G-XXXXXXXXXX' || value.startsWith('https://example')) {
        console.warn(`[env] Optional ${key} is still set to the example placeholder value.`);
      }
    }
  }
}

export function getEnvVar(key: keyof ImportMetaEnv, fallback: string): string {
  return (import.meta.env[key] as string | undefined) || fallback;
}
