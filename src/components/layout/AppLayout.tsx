import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import { QuoteProvider } from '../../context/QuoteContext';
import QuoteModal from '../ui/QuoteModal';
import styles from './AppLayout.module.css';

export const AppLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <QuoteProvider>
      <div className={styles.layoutContainer}>
        <Navbar />
        <main className={styles.mainContent}>
          <Outlet />
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </QuoteProvider>
  );
};

export default AppLayout;
