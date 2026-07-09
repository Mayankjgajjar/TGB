import { describe, it, expect } from 'vitest';
import { render, screen, renderHook, act } from '@testing-library/react';
import React from 'react';
import { QuoteProvider, useQuoteModal } from '../QuoteContext';

describe('QuoteContext', () => {
  it('throws when useQuoteModal is used outside provider', () => {
    expect(() => {
      renderHook(() => useQuoteModal());
    }).toThrow('useQuoteModal must be used within a QuoteProvider');
  });

  it('provides modal state with isModalOpen false initially', () => {
    const { result } = renderHook(() => useQuoteModal(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QuoteProvider>{children}</QuoteProvider>
      ),
    });

    expect(result.current.isModalOpen).toBe(false);
  });

  it('openModal sets isModalOpen to true', () => {
    const { result } = renderHook(() => useQuoteModal(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QuoteProvider>{children}</QuoteProvider>
      ),
    });

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isModalOpen).toBe(true);
  });

  it('closeModal sets isModalOpen to false after opening', () => {
    const { result } = renderHook(() => useQuoteModal(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QuoteProvider>{children}</QuoteProvider>
      ),
    });

    act(() => {
      result.current.openModal();
    });
    expect(result.current.isModalOpen).toBe(true);

    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isModalOpen).toBe(false);
  });

  it('renders children without error', () => {
    render(
      <QuoteProvider>
        <div>test child</div>
      </QuoteProvider>,
    );

    expect(screen.getByText('test child')).toBeInTheDocument();
  });
});
