import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QuoteProvider } from '../../../context/QuoteContext';
import { Navbar } from '../Navbar';

vi.mock('../../../hooks/useScrollDirection', () => ({
  useScrollDirection: vi.fn().mockReturnValue(null),
}));

vi.mock('lenis', () => {
  const Lenis = vi.fn();
  Lenis.prototype = { on: vi.fn(), scrollTo: vi.fn(), destroy: vi.fn(), raf: vi.fn() };
  return { default: Lenis };
});

describe('Navbar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderNavbar = () =>
    render(
      <MemoryRouter>
        <QuoteProvider>
          <Navbar />
        </QuoteProvider>
      </MemoryRouter>,
    );

  it('renders the brand logo', () => {
    renderNavbar();
    expect(screen.getByAltText(/tgb enterprise/i)).toBeInTheDocument();
  });

  it('renders navigation links (desktop + mobile = 2 instances each)', () => {
    renderNavbar();
    expect(screen.getAllByText('Home')).toHaveLength(2);
    expect(screen.getAllByText('About')).toHaveLength(2);
    expect(screen.getAllByText('Services')).toHaveLength(2);
    expect(screen.getAllByText('Gallery')).toHaveLength(2);
    expect(screen.getAllByText('Contact')).toHaveLength(2);
  });

  it('renders Get a Quote button', () => {
    renderNavbar();
    expect(screen.getByText('Get a Quote')).toBeInTheDocument();
  });

  it('has accessible hamburger button with aria attributes', () => {
    renderNavbar();
    const menuBtn = screen.getByLabelText('Open menu');
    expect(menuBtn).toBeInTheDocument();
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
    expect(menuBtn).toHaveAttribute('aria-controls', 'mobile-nav');
  });

  it('renders desktop and mobile navigation landmarks', () => {
    renderNavbar();
    expect(screen.getByLabelText('Primary navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument();
  });
});
