import React, { useEffect, useRef } from 'react';
import styles from './Turnstile.module.css';

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

let turnstileWarningShown = false;

export const Turnstile: React.FC<TurnstileProps> = ({ onVerify, onExpire, onError }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    // Allow mock (e.g., in Playwright tests) even without a real site key
    if (!siteKey && !window.turnstile) {
      if (!turnstileWarningShown) {
        console.warn('VITE_TURNSTILE_SITE_KEY is not defined. CAPTCHA cannot render.');
        turnstileWarningShown = true;
      }
      return;
    }

    const renderWidget = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              onVerify(token);
            },
            'expired-callback': () => {
              if (onExpire) onExpire();
            },
            'error-callback': () => {
              if (onError) onError();
            },
            theme: 'dark',
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error('Error rendering Turnstile:', err);
        }
      }
    };

    if (!window.turnstile) {
      const scriptId = 'cloudflare-turnstile-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }

      const checkInterval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkInterval);
          renderWidget();
        }
      }, 100);

      return () => {
        clearInterval(checkInterval);
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {
            // Ignore if widget was already cleaned up
          }
          widgetIdRef.current = null;
        }
      };
    } else {
      renderWidget();
      return () => {
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {
            // Ignore
          }
          widgetIdRef.current = null;
        }
      };
    }
  }, [onVerify, onExpire, onError]);

  return (
    <div
      ref={containerRef}
      role="figure"
      aria-label="CAPTCHA verification — complete this step to submit the form"
      className={styles.wrapper}
    />
  );
};

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
    };
  }
}

export default Turnstile;
