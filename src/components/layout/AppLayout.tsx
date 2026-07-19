import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { QuoteProvider } from '../../context/QuoteContext';
import QuoteModal from '../ui/QuoteModal';
import { ErrorBoundary } from '../ErrorBoundary';
import { trackWhatsAppFABClick } from '../../lib/analytics';
import { useSeoMetadata } from '../../hooks/useSeoMetadata';
import { useJsonLd } from '../../hooks/useJsonLd';
import { useScrollManagement } from '../../hooks/useScrollManagement';
import styles from './AppLayout.module.css';

const whatsappVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AppLayout: React.FC = () => {
  // Delegate layout behaviors to custom hooks for high modularity & single responsibility
  useSeoMetadata();
  useJsonLd();
  useScrollManagement();

  return (
    <QuoteProvider>
      {/* Skip to main content — visually hidden until focused for accessibility compliance */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <div className={styles.layoutContainer}>
        {/* Global ambient background loop */}
        <div className={styles.globalVideoBg}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/images/hero-poster.png"
            className={styles.globalVideoElement}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/assets/videos/sign_wall.mp4" type="video/mp4" />
          </video>
          <div className={styles.globalVideoOverlay} />
        </div>

        <Navbar />
        <main id="main-content" className={styles.mainContent}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
        <Footer />
        <QuoteModal />

        {/* Floating WhatsApp Action Button */}
        <motion.a
          href="https://wa.me/919727136137?text=Hi%20TGB%20Enterprise!%20I'd%20like%20to%20know%20more%20about%20your%20signage%20services%20and%20get%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          aria-label="Contact us on WhatsApp"
          onClick={trackWhatsAppFABClick}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -4, scale: 1.05 }}
          variants={whatsappVariants}
        >
          {/* Pulsing Glow Ring inside the button (inherits hover translation/scale) */}
          <motion.div
            className={styles.whatsappPulse}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.45, 0],
              scale: [0.95, 1.2, 1.45],
            }}
            transition={{
              delay: 1.5,
              duration: 2.0,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          <div className={styles.whatsappIconWrapper}>
            <svg
              className={styles.whatsappIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.285 1.489 4.954 1.49 5.285.002 9.585-4.293 9.588-9.582.002-2.561-1.0-4.97-2.822-6.792-1.821-1.82-4.23-2.82-6.793-2.821-5.293 0-9.593 4.3-9.596 9.589-.001 1.763.5 3.42 1.45 4.873l-.999 3.647 3.728-.977zm11.387-5.464c-.097-.162-.358-.258-.752-.455-.393-.197-2.327-1.148-2.684-1.278-.358-.13-.618-.197-.878.197-.26.393-1.002 1.278-1.229 1.537-.227.26-.455.292-.848.096-.393-.197-1.66-.612-3.161-1.952-1.168-1.042-1.957-2.327-2.186-2.72-.228-.393-.024-.606.173-.802.177-.176.393-.455.59-.683.197-.227.262-.39.393-.65.13-.26.064-.487-.033-.683-.097-.197-.878-2.112-1.202-2.892-.316-.761-.639-.659-.878-.659-.227-.002-.487-.002-.747-.002-.26 0-.683.097-1.04.487-.358.393-1.368 1.334-1.368 3.254 0 1.92 1.397 3.774 1.593 4.032.195.26 2.75 4.2 6.66 5.892.93.402 1.657.643 2.223.823.935.297 1.787.255 2.46.154.75-.113 2.328-.952 2.653-1.872.325-.92.325-1.71.228-1.872z" />
            </svg>
          </div>
        </motion.a>
      </div>
    </QuoteProvider>
  );
};

export default AppLayout;
