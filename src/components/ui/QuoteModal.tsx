import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ArrowRight, MessageSquare, Phone, Compass } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './QuoteModal.module.css';

export const QuoteModal: React.FC = () => {
  const { isModalOpen, closeModal } = useQuoteModal();

  // Prevent background scroll when open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
          
          <motion.div 
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button Node */}
            <button className={styles.closeBtn} onClick={closeModal} aria-label="Close Portal">
              <X size={16} />
            </button>

            {/* Technical Header Tag */}
            <span className={styles.portalTag}>SECURE PORTAL // SPECIFICATION REQUEST</span>

            {/* Premium Serif Display Title */}
            <h2 className={styles.title}>Acquire Quote Specification</h2>

            {/* Muted Narrative Copy */}
            <p className={styles.description}>
              Select your preferred path of engagement. Customize project scope within our interactive builder workspace, or link directly with a design engineer.
            </p>

            {/* Symmetrical Outline Button Stack */}
            <div className={styles.actionStack}>
              
              {/* Action 1: Launch Builder (Outline with Red Hover border) */}
              <a 
                href="/#contact-cta" 
                onClick={closeModal}
                className={`${styles.outlineOption} ${styles.builderOption}`}
              >
                <div className={styles.optionLabel}>
                  <span className={styles.optionIcon}><Compass size={16} /></span>
                  <span>Launch Builder Workspace</span>
                </div>
                <ArrowRight size={16} className={styles.arrow} />
              </a>

              {/* Action 2: WhatsApp Desk (Outline with Green Hover border) */}
              <a 
                href="https://wa.me/919909909909?text=Hello%20TGB%20Enterprise%2C%20I%20would%20like%20to%20request%20an%20architectural%20signage%20quote." 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.outlineOption} ${styles.whatsappOption}`}
              >
                <div className={styles.optionLabel}>
                  <span className={`${styles.optionIcon} ${styles.whatsappColor}`}><MessageSquare size={16} /></span>
                  <span>Message Via WhatsApp Desk</span>
                </div>
                <div className={styles.statusDot} />
              </a>

              {/* Action 3: Hotline Call (Outline with White Hover border) */}
              <a 
                href="tel:+917940099099" 
                className={`${styles.outlineOption} ${styles.hotlineOption}`}
              >
                <div className={styles.optionLabel}>
                  <span className={styles.optionIcon}><Phone size={16} /></span>
                  <span>Dial Hotline Support</span>
                </div>
              </a>

            </div>

            {/* Redesigned Bottom Time Indicator */}
            <div className={styles.footerInfo}>
              <span className={styles.clockIcon}><Clock size={12} /></span>
              <span>RESPONSE TARGET: &lt; 3 HOURS</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
