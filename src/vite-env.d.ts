/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_STUDIO_LATITUDE: string;
  readonly VITE_STUDIO_LONGITUDE: string;
  readonly VITE_MAPS_EMBED_URL: string;
  readonly VITE_MAPS_LINK: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_GA4_MEASUREMENT_ID: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
