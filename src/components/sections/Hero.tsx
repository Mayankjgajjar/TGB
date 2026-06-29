import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { homeContent } from '../../content/home';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Hero.module.css';

// 5 Premium Unsplash architectural photography images (High-contrast landmark structures)
const slideshowImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80', // 1. Glass/steel commercial tower facade
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80', // 2. Premium stainless steel facade detailing
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80', // 3. Landmark tower at night with golden architectural lights
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1800&q=80', // 4. Luxury concrete & metal structure close-up
  'https://images.unsplash.com/photo-1479839672679-a7607dea685f?auto=format&fit=crop&w=1800&q=80'  // 5. Abstract geometric skyscraper lines
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { openModal } = useQuoteModal();
  const { label, title, subtitle, ctaLabel } = homeContent.hero;

  // Cycle slideshow slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <section id="home" className={styles.heroSection}>
      {/* 1. Full-screen Background Ken Burns Slideshow */}
      <div className={styles.slideshowContainer}>
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
                      opacity: 0.58, // Vibrant image visibility
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
            
            {/* Using size="large" to complement the enlarged text */}
            <motion.div variants={fadeUp} className={styles.ctasRow}>
              <Button href="/#services" variant="primary" size="large" showTechnicalDot>
                {ctaLabel}
              </Button>
              <Button to="/projects" variant="secondary" size="large" icon={<ArrowUpRight size={14} />}>
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
