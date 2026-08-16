import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Clock, ArrowRight, MessageSquare, Phone, Compass } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteContext';
import { trackQuoteModalOpen, trackQuoteSubmit } from '../../lib/analytics';
import styles from './QuoteModal.module.css';

export const QuoteModal: React.FC = () => {
  const { isModalOpen, modalData, closeModal } = useQuoteModal();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Prevent background scroll when open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus the close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 50);
      trackQuoteModalOpen();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal]);

  // Tab-focus trap inside modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const modalElement = document.querySelector(`.${styles.modalContent}`);
      if (!modalElement) return;

      const focusableElements = modalElement.querySelectorAll('button, a, [tabindex="0"]');
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const productTitle = modalData?.product ? ` for ${modalData.product}` : '';
  const whatsappMessage = modalData?.product
    ? `Hi TGB Enterprise! I'm interested in receiving a quote and specifications for *${modalData.product}*.`
    : "Hi TGB Enterprise! I'd like to know more about your signage services and get a quote.";

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <motion.div
            className={styles.modalContent}
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button Node */}
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Close consultation portal"
            >
              <X size={16} />
            </button>

            {/* Technical Header Tag */}
            <span className={styles.portalTag}>
              {modalData?.product
                ? `PRODUCT INQUIRY // ${modalData.product.toUpperCase()}`
                : 'SECURE PORTAL // SPECIFICATION REQUEST'}
            </span>

            {/* Title */}
            <h2 id="quote-modal-title" className={styles.title}>
              Acquire Quote Specification{productTitle}
            </h2>

            {/* Muted Narrative Copy */}
            <p className={styles.description}>
              {modalData?.product
                ? `Connect with our technical design engineers to discuss custom dimensions, material finishes, and fast factory turnaround for ${modalData.product}.`
                : 'Select your preferred path of engagement. Customize project scope within our interactive builder workspace, or link directly with a design engineer.'}
            </p>

            {/* Symmetrical Outline Button Stack */}
            <div className={styles.actionStack}>
              {/* Action 1: Start Consultation */}
              <Link
                to="/contact"
                onClick={() => {
                  closeModal();
                  trackQuoteSubmit('builder');
                }}
                className={`${styles.outlineOption} ${styles.builderOption}`}
              >
                <div className={styles.optionLabel}>
                  <span className={styles.optionIcon}>
                    <Compass size={16} />
                  </span>
                  <span>Start Consultation Form</span>
                </div>
                <ArrowRight size={16} className={styles.arrow} />
              </Link>

              {/* Action 2: WhatsApp Desk */}
              <a
                href={`https://api.whatsapp.com/send?phone=919727136137&text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackQuoteSubmit('whatsapp')}
                className={`${styles.outlineOption} ${styles.whatsappOption}`}
              >
                <div className={styles.optionLabel}>
                  <span className={`${styles.optionIcon} ${styles.whatsappColor}`}>
                    <MessageSquare size={16} />
                  </span>
                  <span>Message Via WhatsApp Desk</span>
                </div>
                <div className={styles.statusDot} />
              </a>

              {/* Action 3: Hotline Call */}
              <a
                href="tel:+919727136137"
                onClick={() => trackQuoteSubmit('hotline')}
                className={`${styles.outlineOption} ${styles.hotlineOption}`}
              >
                <div className={styles.optionLabel}>
                  <span className={styles.optionIcon}>
                    <Phone size={16} />
                  </span>
                  <span>Dial Direct Factory Hotline (+91 97271 36137)</span>
                </div>
              </a>
            </div>

            {/* Bottom Time Indicator */}
            <div className={styles.footerInfo}>
              <span className={styles.clockIcon}>
                <Clock size={12} />
              </span>
              <span>RESPONSE TARGET: &lt; 3 HOURS • DIRECT FACTORY ESTIMATE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
