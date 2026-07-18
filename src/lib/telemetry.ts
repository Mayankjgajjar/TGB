/**
 * Telemetry abstraction layer.
 *
 * Currently backed by Sentry. Swap the provider here without touching
 * the rest of the application.
 *
 * Usage:
 *   import { initTelemetry, captureError } from '../lib/telemetry';
 *
 *   initTelemetry();
 *   captureError(error, { context: 'ContactForm' });
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CaptureContext = Record<string, any>;

interface TelemetryProvider {
  init: (dsn: string, env: string) => void;
  captureError: (error: unknown, context?: CaptureContext) => void;
  captureMessage: (message: string, level?: 'info' | 'warning' | 'error') => void;
  setUser: (userId: string | null, traits?: CaptureContext) => void;
}

// ── Sentry Provider ──────────────────────────────────────────────────────────

function createSentryProvider(): TelemetryProvider {
  // Dynamic import so the Sentry chunk is only loaded when DSN is set
  function loadSentry() {
    return import('@sentry/react');
  }

  return {
    init(dsn: string, env: string) {
      if (!dsn || dsn.startsWith('https://example')) return;

      loadSentry().then((Sentry) => {
        Sentry.init({
          dsn,
          environment: env,
          integrations: [Sentry.browserTracingIntegration()],
          tracesSampleRate: env === 'production' ? 0.1 : 0.0,
          dataCollection: {
            // To disable sending user data and HTTP bodies, uncomment the lines below.
            // userInfo: false,
            // httpBodies: []
          },
          beforeSend(event) {
            if (env !== 'production' && env !== 'staging' && env !== 'development') {
              console.debug('[sentry] Event suppressed in non-production:', event);
              return null;
            }
            return event;
          },
        });
      });
    },

    captureError(error: unknown, context?: CaptureContext) {
      loadSentry().then((Sentry) => {
        Sentry.captureException(error, context ? { extra: context } : undefined);
      });
    },

    captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
      loadSentry().then((Sentry) => {
        Sentry.captureMessage(message, level);
      });
    },

    setUser(userId: string | null, traits?: CaptureContext) {
      loadSentry().then((Sentry) => {
        Sentry.setUser(userId ? { id: userId, ...traits } : null);
      });
    },
  };
}

// ── Null Provider (used when Sentry is not configured) ────────────────────────

function createNullProvider(): TelemetryProvider {
  return {
    init() {
      // no-op
    },
    captureError(error: unknown, _context?: CaptureContext) {
      if (typeof console !== 'undefined') {
        console.debug('[telemetry] (null provider) Error suppressed:', error);
      }
    },
    captureMessage(message: string, level?: 'info' | 'warning' | 'error') {
      if (typeof console !== 'undefined') {
        console.debug(`[telemetry] (null provider) ${level}: ${message}`);
      }
    },
    setUser() {
      // no-op
    },
  };
}

// ── Singleton ─────────────────────────────────────────────────────────────────

const dsn = typeof import.meta !== 'undefined' ? import.meta.env.VITE_SENTRY_DSN : undefined;

const provider: TelemetryProvider =
  dsn && !dsn.startsWith('https://example') ? createSentryProvider() : createNullProvider();

// ── Public API ────────────────────────────────────────────────────────────────

export function initTelemetry(): void {
  const env = typeof import.meta !== 'undefined' ? import.meta.env.MODE : 'production';
  provider.init(dsn || '', env);
}

export function captureError(error: unknown, context?: CaptureContext): void {
  provider.captureError(error, context);
}

export function captureMessage(message: string, level?: 'info' | 'warning' | 'error'): void {
  provider.captureMessage(message, level);
}

export function setUser(userId: string | null, traits?: CaptureContext): void {
  provider.setUser(userId, traits);
}
