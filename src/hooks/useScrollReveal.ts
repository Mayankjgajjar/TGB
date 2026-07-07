import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -50px 0px') {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If the user requests reduced motion, trigger reveal immediately
    if (shouldReduceMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold, rootMargin, shouldReduceMotion]);

  return { ref, isRevealed, shouldReduceMotion };
}

export default useScrollReveal;
