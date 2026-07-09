import React, { useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import styles from './Turnstile.module.css';

export interface TurnstileHandle {
  reset: () => void;
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

let turnstileWarningShown = false;
const SCRIPT_LOAD_TIMEOUT_MS = 10000;

export const Turnstile = React.forwardRef<TurnstileHandle, TurnstileProps>(
  ({ onVerify, onExpire, onError }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const onVerifyRef = useRef(onVerify);
    const onExpireRef = useRef(onExpire);
    const onErrorRef = useRef(onError);
    const [hasError, setHasError] = useState(false);

    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;

    const renderWidget = useCallback(() => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
            callback: (token: string) => {
              setHasError(false);
              onVerifyRef.current(token);
            },
            'expired-callback': () => {
              if (onExpireRef.current) onExpireRef.current();
            },
            'error-callback': () => {
              setHasError(true);
              if (onErrorRef.current) onErrorRef.current();
            },
            theme: 'dark',
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error('Error rendering Turnstile:', err);
          setHasError(true);
          if (onErrorRef.current) onErrorRef.current();
        }
      }
    }, []);

    const handleRetry = useCallback(() => {
      setHasError(false);
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch {
          widgetIdRef.current = null;
          renderWidget();
        }
      } else {
        renderWidget();
      }
    }, [renderWidget]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setHasError(false);
        if (window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch {
            widgetIdRef.current = null;
            renderWidget();
          }
        }
      },
    }));

    useEffect(() => {
      const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
      const isPlaceholder =
        !siteKey ||
        siteKey.includes('xxxxxxxxxxxxxxxxxxxxxxxx') ||
        siteKey === '0x4AAAAAAA_xxxxxxxxxxxxxxxxxxxxxxxx';

      if (isPlaceholder && !window.turnstile) {
        if (!turnstileWarningShown) {
          console.warn('VITE_TURNSTILE_SITE_KEY is not defined or is placeholder. CAPTCHA cannot render.');
          turnstileWarningShown = true;
        }
        setHasError(true);
        return;
      }

      let timeoutId: ReturnType<typeof setTimeout> | null = null;
      let checkInterval: ReturnType<typeof setInterval> | null = null;

      const cleanup = () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (checkInterval) clearInterval(checkInterval);
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch {
            // Ignore if widget was already cleaned up
          }
          widgetIdRef.current = null;
        }
      };

      if (!window.turnstile) {
        const scriptId = 'cloudflare-turnstile-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.src =
            'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
          script.async = true;
          script.defer = true;
          script.onerror = () => {
            setHasError(true);
            if (onErrorRef.current) onErrorRef.current();
          };
          document.body.appendChild(script);
        }

        checkInterval = setInterval(() => {
          if (window.turnstile) {
            if (checkInterval) clearInterval(checkInterval);
            if (timeoutId) clearTimeout(timeoutId);
            renderWidget();
          }
        }, 100);

        timeoutId = setTimeout(() => {
          if (checkInterval) clearInterval(checkInterval);
          if (!window.turnstile) {
            console.error('Turnstile script failed to load within timeout.');
            setHasError(true);
            if (onErrorRef.current) onErrorRef.current();
          }
        }, SCRIPT_LOAD_TIMEOUT_MS);
      } else {
        renderWidget();
      }

      return cleanup;
    }, [renderWidget]);

    if (hasError) {
      const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
      const isPlaceholder =
        !siteKey ||
        siteKey.includes('xxxxxxxxxxxxxxxxxxxxxxxx') ||
        siteKey === '0x4AAAAAAA_xxxxxxxxxxxxxxxxxxxxxxxx';

      return (
        <div className={styles.errorState} role="alert">
          <span className={styles.errorText}>
            {isPlaceholder
              ? 'CAPTCHA site key is missing or not configured. Please set VITE_TURNSTILE_SITE_KEY in your hosting dashboard settings.'
              : 'CAPTCHA verification failed.'}
          </span>
          {!isPlaceholder && (
            <button
              type="button"
              onClick={handleRetry}
              className={styles.retryButton}
            >
              Retry verification
            </button>
          )}
        </div>
      );
    }

    return (
      <div
        ref={containerRef}
        role="figure"
        aria-label="CAPTCHA verification — complete this step to submit the form"
        className={styles.wrapper}
      />
    );
  },
);

Turnstile.displayName = 'Turnstile';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

export default Turnstile;
