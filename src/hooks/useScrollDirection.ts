import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Tracks scroll direction with a minimum delta threshold to avoid flicker
 * from trackpad micro-movements. Uses requestAnimationFrame for throttling.
 *
 * @param threshold - Minimum scroll delta (px) before a direction change fires. Default 8.
 * @returns 'up' | 'down' | null
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const update = useCallback(() => {
    const scrollY = window.scrollY;

    // Prevent scroll hiding on programmatic smooth scrolling (such as clicking nav links)
    if ((window as any).isProgrammaticScroll) {
      setDirection(null);
      lastScrollY.current = scrollY;
      ticking.current = false;
      return;
    }

    // Always treat "at top" as up (visible)
    if (scrollY <= 10) {
      setDirection(null);
      lastScrollY.current = scrollY;
      ticking.current = false;
      return;
    }

    const delta = scrollY - lastScrollY.current;

    if (Math.abs(delta) >= threshold) {
      setDirection(delta > 0 ? 'down' : 'up');
      lastScrollY.current = scrollY;
    }

    ticking.current = false;
  }, [threshold]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [update]);

  return direction;
}
