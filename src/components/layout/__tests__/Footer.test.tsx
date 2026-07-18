import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QuoteProvider } from '../../../context/QuoteContext';
import { Footer } from '../Footer';

describe('Footer', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_CONTACT_EMAIL', 'tgbsign@proton.me');
    vi.stubEnv('VITE_CONTACT_PHONE', '+919824817381');
  });

  const renderFooter = () =>
    render(
      <MemoryRouter>
        <QuoteProvider>
          <Footer />
        </QuoteProvider>
      </MemoryRouter>,
    );

  it('renders the brand logo', () => {
    renderFooter();
    expect(screen.getByAltText(/tgb enterprise/i)).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    renderFooter();
    expect(screen.getByText('Built to be Seen.')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    renderFooter();
    const instagram = screen.getByText('Instagram');
    expect(instagram.closest('a')).toHaveAttribute('href', 'https://www.instagram.com/tgbsign');

    const facebook = screen.getByText('Facebook');
    expect(facebook.closest('a')).toHaveAttribute('href', 'https://www.facebook.com/tgbenterprise');
  });

  it('renders REQUEST A CONSULTATION button', () => {
    renderFooter();
    expect(screen.getByText(/request a consultation/i)).toBeInTheDocument();
  });

  it('renders copyright notice with current year', () => {
    renderFooter();
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
  });

  it('renders contact email from env', () => {
    renderFooter();
    expect(screen.getByText('tgbsign@proton.me')).toBeInTheDocument();
  });

  it('renders mailto link', () => {
    renderFooter();
    const link = screen.getByText('tgbsign@proton.me').closest('a');
    expect(link).toHaveAttribute('href', 'mailto:tgbsign@proton.me');
  });

  it('renders quick links section', () => {
    renderFooter();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  it('renders services section', () => {
    renderFooter();
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });
});
