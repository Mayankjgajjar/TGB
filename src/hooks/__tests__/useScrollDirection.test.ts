import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollDirection } from '../useScrollDirection';

const fireScroll = (y: number) => {
  Object.defineProperty(window, 'scrollY', { value: y, writable: true, configurable: true });
  window.dispatchEvent(new Event('scroll', { cancelable: true }));
};

describe('useScrollDirection', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns null when at top of page', () => {
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current).toBeNull();
  });

  it('returns null when within 10px of top', () => {
    fireScroll(5);
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current).toBeNull();
  });

  it('returns down after scrolling past threshold', () => {
    const { result } = renderHook(() => useScrollDirection(8));

    act(() => {
      fireScroll(100);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe('down');
  });

  it('returns up after scrolling up past threshold', () => {
    const { result } = renderHook(() => useScrollDirection(8));

    act(() => {
      fireScroll(100);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    act(() => {
      fireScroll(50);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe('up');
  });

  it('does not change direction for small scrolls below threshold', () => {
    const { result } = renderHook(() => useScrollDirection(8));

    act(() => {
      fireScroll(5);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBeNull();
  });

  it('cleans up scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrollDirection(8));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
