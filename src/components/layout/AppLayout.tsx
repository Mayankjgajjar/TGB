import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '../../context/ThemeContext';
import { QuoteProvider, useQuoteModal } from '../../context/QuoteContext';
import QuoteModal from '../ui/QuoteModal';
import { ErrorBoundary } from '../ErrorBoundary';
import { trackWhatsAppFABClick } from '../../lib/analytics';
import { useSeoMetadata } from '../../hooks/useSeoMetadata';
import { useJsonLd } from '../../hooks/useJsonLd';
import { useScrollManagement } from '../../hooks/useScrollManagement';
import styles from './AppLayout.module.css';

const FloatingWidgets: React.FC = () => {
  return (
    <div className={styles.floatingWidgetsContainer}>
      {/* Floating Direct Call Hotline */}
      <a
        href="tel:+919727136137"
        className={styles.callWidgetBtn}
        aria-label="Call factory hotline directly"
        title="Call TGB Factory Hotline"
      >
        <Phone size={22} color="#ffffff" strokeWidth={2.2} />
      </a>

      {/* Floating WhatsApp Action Button */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=919727136137&text=Hi%20TGB%20Enterprise!%20I'd%20like%20to%20know%20more%20about%20your%20signage%20services%20and%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        onClick={trackWhatsAppFABClick}
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <div className={styles.whatsappPulse} />
        <div className={styles.whatsappIconWrapper}>
          <svg
            className={styles.whatsappIcon}
            viewBox="0 0 308 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* WhatsApp Phone Handset */}
            <path
              fill="#ffffff"
              d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.033 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.255 0-.729-.219-1.285-.457-6.012-2.584-18.063-8.868-29.071-18.665-8.919-7.939-14.94-17.755-16.689-20.731-.441-.75-.198-1.23.177-1.605.39-.39.76-.76 1.144-1.144 1.168-1.168 2.23-2.545 3.315-3.805.672-.781 1.189-1.688 1.605-2.671.835-1.974.39-3.957-.407-5.549-.76-1.511-6.864-16.538-9.404-22.656-2.476-5.962-4.996-5.105-6.864-5.197-1.776-.088-3.805-.108-5.834-.108-2.029 0-5.322.76-8.106 3.805-2.784 3.045-10.638 10.408-10.638 25.385 0 14.978 10.892 29.435 12.416 31.464 1.524 2.029 21.436 32.736 51.93 45.922 7.251 3.136 12.911 5.011 17.33 6.417 7.291 2.316 13.929 1.988 19.178 1.205 5.856-.873 18.006-7.362 20.546-14.475 2.541-7.113 2.541-13.208 1.78-14.475-1.077-1.802-3.005-2.551-5.235-3.513z"
            />
            {/* WhatsApp Speech Bubble Outline with Tail */}
            <path
              fill="#ffffff"
              d="M154 0C69.084 0 0 69.084 0 154c0 34.275 11.287 66.01 30.413 91.687L11.514 308l64.673-20.731C101.442 299.761 126.963 308 154 308c84.916 0 154-69.084 154-154S238.916 0 154 0zm0 281.38c-24.316 0-46.996-7.85-65.556-21.218l-4.708-3.385-40.354 12.932 11.082-39.691-3.693-4.908C36.216 204.664 26.62 180.203 26.62 154c0-70.237 57.143-127.38 127.38-127.38 70.237 0 127.38 57.143 127.38 127.38 0 70.237-57.143 127.38-127.38 127.38z"
            />
          </svg>
        </div>
      </motion.a>
    </div>
  );
};

export const AppLayout: React.FC = () => {
  useSeoMetadata();
  useJsonLd();
  useScrollManagement();

  return (
    <ThemeProvider>
      <QuoteProvider>
        <a href="#main-content" className={styles.skipLink}>
          Skip to main content
        </a>

        <div className={styles.layoutContainer}>
          <Navbar />
          <main id="main-content" className={styles.mainContent}>
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </main>
          <Footer />
          <QuoteModal />
          <FloatingWidgets />
        </div>
      </QuoteProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
