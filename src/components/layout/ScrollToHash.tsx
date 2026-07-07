import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

interface ScrollToHashProps {
  lenis: Lenis | null;
}

export const ScrollToHash: React.FC<ScrollToHashProps> = ({ lenis }) => {
  const location = useLocation();

  useEffect(() => {
    // If not on Home page, reset scroll immediately to top (standard scroll restoration)
    if (location.pathname !== '/') {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    // Hash navigation handler for Home page sections
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(id);
        attempts++;
        
        if (element) {
          clearInterval(interval);
          if (lenis) {
            lenis.scrollTo(element, {
              offset: -130, // matches sticky nav height plus offset breathing space
              duration: 1.2,
            });
          } else {
            const yOffset = -130;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } else if (attempts >= 15) {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    } else {
      // If pathname is '/' but no hash, scroll to top
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash, lenis]);

  return null;
};

export default ScrollToHash;
