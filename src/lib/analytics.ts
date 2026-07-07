/**
 * src/lib/analytics.ts
 *
 * Thin wrapper around window.gtag for GA4 conversion event tracking.
 * Safe to call even if GA4 script hasn't loaded (gtag will be undefined).
 *
 * ⚠️ Remember to replace G-XXXXXXXXXX in index.html with the real
 * GA4 Measurement ID before merging to main.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params ?? {});
  }
}

// ── Conversion Events ─────────────────────────────────────────────────────────

/** Fired when the Quote modal opens */
export function trackQuoteModalOpen(): void {
  trackEvent('quote_modal_open');
}

/** Fired when a Quote form is successfully submitted */
export function trackQuoteSubmit(serviceType?: string): void {
  trackEvent('quote_submit', { service_type: serviceType ?? 'unknown' });
}

/** Fired when the Contact form is successfully submitted */
export function trackContactFormSubmit(): void {
  trackEvent('contact_form_submit');
}

/** Fired when the Warranty claim form is successfully submitted */
export function trackWarrantyFormSubmit(): void {
  trackEvent('warranty_form_submit');
}

/** Fired when the WhatsApp FAB is clicked */
export function trackWhatsAppFABClick(): void {
  trackEvent('whatsapp_fab_click');
}
