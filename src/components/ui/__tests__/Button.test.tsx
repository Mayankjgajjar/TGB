import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Button } from '../Button';

describe('Button', () => {
  it('renders as a button element by default', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  it('renders as an anchor when href is provided', () => {
    render(<Button href="https://example.com">External</Button>);
    const link = screen.getByText('External');
    expect(link.closest('a')).toHaveAttribute('href', 'https://example.com');
  });

  it('renders as a router link when to is provided', () => {
    render(
      <MemoryRouter>
        <Button to="/about">About</Button>
      </MemoryRouter>,
    );
    const link = screen.getByText('About');
    expect(link.closest('a')).toHaveAttribute('href', '/about');
  });

  it('applies variant classes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('variantPrimary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(btn.className).toContain('variantSecondary');

    rerender(<Button variant="technical">Technical</Button>);
    expect(btn.className).toContain('variantTechnical');
  });

  it('applies size class for large variant', () => {
    render(<Button size="large">Large</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('sizeLarge');
  });

  it('renders icon when provided', () => {
    render(<Button icon={<span data-testid="test-icon">→</span>}>With Icon</Button>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies ref correctly to button elements', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref test</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes additional HTML attributes to button', () => {
    render(<Button aria-label="custom label">Aria</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'custom label');
  });

  it('renders children text', () => {
    render(<Button>Get a Quote</Button>);
    expect(screen.getByText('Get a Quote')).toBeInTheDocument();
  });
});
