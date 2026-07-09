import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockGtag = vi.fn();

beforeEach(() => {
  mockGtag.mockClear();
  window.gtag = mockGtag;
});

describe('analytics', () => {
  it('trackQuoteModalOpen fires gtag event', async () => {
    const { trackQuoteModalOpen } = await import('../analytics');
    trackQuoteModalOpen();
    expect(mockGtag).toHaveBeenCalledWith('event', 'quote_modal_open', {});
  });

  it('trackQuoteSubmit fires gtag event with service type', async () => {
    const { trackQuoteSubmit } = await import('../analytics');
    trackQuoteSubmit('neon-signs');
    expect(mockGtag).toHaveBeenCalledWith('event', 'quote_submit', {
      service_type: 'neon-signs',
    });
  });

  it('trackQuoteSubmit defaults to unknown when no service type', async () => {
    const { trackQuoteSubmit } = await import('../analytics');
    trackQuoteSubmit();
    expect(mockGtag).toHaveBeenCalledWith('event', 'quote_submit', {
      service_type: 'unknown',
    });
  });

  it('trackContactFormSubmit fires gtag event', async () => {
    const { trackContactFormSubmit } = await import('../analytics');
    trackContactFormSubmit();
    expect(mockGtag).toHaveBeenCalledWith('event', 'contact_form_submit', {});
  });

  it('trackWarrantyFormSubmit fires gtag event', async () => {
    const { trackWarrantyFormSubmit } = await import('../analytics');
    trackWarrantyFormSubmit();
    expect(mockGtag).toHaveBeenCalledWith('event', 'warranty_form_submit', {});
  });

  it('trackWhatsAppFABClick fires gtag event', async () => {
    const { trackWhatsAppFABClick } = await import('../analytics');
    trackWhatsAppFABClick();
    expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_fab_click', {});
  });

  it('does not throw when gtag is undefined on window', async () => {
    delete (window as any).gtag;
    const { trackContactFormSubmit } = await import('../analytics');
    expect(() => trackContactFormSubmit()).not.toThrow();
  });
});
