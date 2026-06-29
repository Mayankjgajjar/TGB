import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { homeContent } from '../../content/home';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Hero.module.css';

// 5 Premium Unsplash architectural photography images (High-contrast landmark structures)
const slideshowImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1479839672679-a7607dea685f?auto=format&fit=crop&w=1800&q=80',
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openModal } = useQuoteModal();
  const { label, title, subtitle, ctaLabel } = homeContent.hero;

  const advance = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  }, []);

  // Cycle slideshow slides every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [isPaused, advance]);

  // Motion variants for staggered text entrance on load
  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: EASE_EXPO }
    }
  };

  return (
    <section id="home" className={styles.heroSection} aria-label="Hero">
      {/* 1. Full-screen Background Ken Burns Slideshow */}
      {/* aria-live="off" — decorative, no announcements needed */}
      <div
        className={styles.slideshowContainer}
        aria-live="off"
        aria-atomic="false"
        role="img"
        aria-label={`Architectural photography slideshow, image ${currentSlide + 1} of ${slideshowImages.length}`}
      >
        {slideshowImages.map((image, index) => {
          const isActive = index === currentSlide;
          return (
            <motion.div
              key={index}
              className={styles.slideImage}
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={
                isActive
                  ? { 
                      opacity: 0.58,
                      scale: 1.07, 
                      transition: { 
                        opacity: { duration: 1.8, ease: 'easeInOut' },
                        scale: { duration: 5.2, ease: 'linear' } 
                      } 
                    }
                  : { 
                      opacity: 0, 
                      scale: 1.02, 
                      transition: { duration: 1.5, ease: 'easeInOut' } 
                    }
              }
            />
          );
        })}
      </div>

      {/* Pause/Play button — WCAG 2.2 SC 2.2.2 compliance */}
      <button
        className={styles.slideshowPauseBtn}
        onClick={() => setIsPaused((p) => !p)}
        aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
        aria-pressed={isPaused}
      >
        {isPaused ? <Play size={12} /> : <Pause size={12} />}
      </button>

      {/* 2. Cinematic Shadow Overlays */}
      <div className={styles.matteOverlay} />

      {/* 3. Hero Content Arena (Wide, Spacious Single-Column Editorial Grid) */}
      <div className={styles.contentContainer}>
        <Container>
          <motion.div 
            className={styles.presentationPanel}
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
            {/* Elegant structural red accent line framing the content */}
            <div className={styles.accentFrame}>
              <motion.span variants={fadeUp} className={styles.metaTag}>
                {label}
              </motion.span>
              
              <motion.h1 
                variants={fadeUp} 
                className={styles.headline}
              >
                {title.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </motion.h1>
            </div>
            
            <motion.p variants={fadeUp} className={styles.description}>
              {subtitle}
            </motion.p>
            
            <motion.div variants={fadeUp} className={styles.ctasRow}>
              <Button href="/#services-overview" variant="primary" size="large" showTechnicalDot>
                {ctaLabel}
              </Button>
              <Button to="/projects" variant="secondary" size="large" icon={<ArrowUpRight size={14} />}>
                View Projects
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.ticksRow}>
              <span className={styles.tickItem}>
                <span className={styles.tickIcon}>✓</span> Design
              </span>
              <span className={styles.tickItem}>
                <span className={styles.tickIcon}>✓</span> Manufacturing
              </span>
              <span className={styles.tickItem}>
                <span className={styles.tickIcon}>✓</span> Installation
              </span>
              <span className={styles.tickItem}>
                <span className={styles.tickIcon}>✓</span> After-Sales Service
              </span>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
