import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollReveal } from '../useScrollReveal';

let observeCallback: IntersectionObserverCallback | null = null;

vi.mock('framer-motion', () => ({
  useReducedMotion: vi.fn().mockReturnValue(false),
}));

describe('useScrollReveal', () => {
  beforeEach(() => {
    observeCallback = null;

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observeCallback = callback;
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('returns isRevealed false initially', () => {
    const { result } = renderHook(() => useScrollReveal(0.15, '0px'));
    expect(result.current.isRevealed).toBe(false);
  });

  it('returns isRevealed true after element intersects', () => {
    const { result } = renderHook(() => useScrollReveal(0.15, '0px'));

    expect(observeCallback).not.toBeNull();
    if (observeCallback) {
      act(() => {
        observeCallback(
          [
            {
              isIntersecting: true,
              boundingClientRect: {} as DOMRect,
              intersectionRatio: 1,
              target: document.createElement('div'),
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      });
    }

    expect(result.current.isRevealed).toBe(true);
  });

  it('does not set isRevealed when not intersecting', () => {
    const { result } = renderHook(() => useScrollReveal(0.15, '0px'));

    if (observeCallback) {
      act(() => {
        observeCallback(
          [
            {
              isIntersecting: false,
              boundingClientRect: {} as DOMRect,
              intersectionRatio: 0,
              target: document.createElement('div'),
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      });
    }

    expect(result.current.isRevealed).toBe(false);
  });
});
