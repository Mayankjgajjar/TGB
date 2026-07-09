import { describe, it, expect, vi, beforeEach } from 'vitest';

beforeEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe('telemetry - null provider (default)', () => {
  it('initTelemetry does not throw when no DSN', async () => {
    vi.stubEnv('VITE_SENTRY_DSN', '');
    const { initTelemetry } = await import('../telemetry');
    expect(() => initTelemetry()).not.toThrow();
  });

  it('captureError logs to console.debug without Sentry', async () => {
    vi.stubEnv('VITE_SENTRY_DSN', '');
    const debug = vi.spyOn(console, 'debug').mockImplementation(() => {});
    const { captureError } = await import('../telemetry');
    captureError(new Error('test error'));
    expect(debug).toHaveBeenCalledWith(
      '[telemetry] (null provider) Error suppressed:',
      expect.any(Error),
    );
    debug.mockRestore();
  });

  it('captureMessage logs to console.debug without Sentry', async () => {
    vi.stubEnv('VITE_SENTRY_DSN', '');
    const debug = vi.spyOn(console, 'debug').mockImplementation(() => {});
    const { captureMessage } = await import('../telemetry');
    captureMessage('hello', 'info');
    expect(debug).toHaveBeenCalledWith(expect.stringContaining('hello'));
    debug.mockRestore();
  });

  it('setUser does not throw without Sentry', async () => {
    vi.stubEnv('VITE_SENTRY_DSN', '');
    const { setUser } = await import('../telemetry');
    expect(() => setUser('user-1')).not.toThrow();
  });
});

describe('telemetry - example DSN falls back to null provider', () => {
  it('treats https://example DSN as missing', async () => {
    vi.stubEnv('VITE_SENTRY_DSN', 'https://example@sentry.io/123');
    const debug = vi.spyOn(console, 'debug').mockImplementation(() => {});
    const { captureError } = await import('../telemetry');
    captureError(new Error('should be suppressed'));
    expect(debug).toHaveBeenCalledWith(
      '[telemetry] (null provider) Error suppressed:',
      expect.any(Error),
    );
    debug.mockRestore();
  });

  it('initTelemetry skips Sentry init with example DSN', async () => {
    vi.stubEnv('VITE_SENTRY_DSN', 'https://example@sentry.io/123');
    const { initTelemetry } = await import('../telemetry');
    expect(() => initTelemetry()).not.toThrow();
  });
});
