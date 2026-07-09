import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from '../Heading';

describe('Heading', () => {
  it('renders h2 by default', () => {
    render(<Heading>Default Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Default Heading');
  });

  it('renders correct heading level', () => {
    const { rerender } = render(<Heading level={1}>H1</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<Heading level={3}>H3</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

    rerender(<Heading level={4}>H4</Heading>);
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });

  it('renders display level as h1', () => {
    render(<Heading level="display">Display</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('allows overriding the HTML element with as prop', () => {
    render(
      <Heading level={2} as="h1">
        As h1
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('As h1');
  });

  it('applies color classes', () => {
    const { rerender } = render(<Heading color="white">White</Heading>);
    expect(screen.getByRole('heading').className).toContain('colorOffWhite');

    rerender(<Heading color="copper">Copper</Heading>);
    expect(screen.getByRole('heading').className).toContain('colorCopper');

    rerender(<Heading color="steel">Steel</Heading>);
    expect(screen.getByRole('heading').className).toContain('colorSteel');
  });

  it('renders children content', () => {
    render(<Heading>Hello World</Heading>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
