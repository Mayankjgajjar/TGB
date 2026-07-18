import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { homeContent } from '../../content/home';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Hero.module.css';

// Hoisted outside component — recreating on every render is wasteful
const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_EXPO },
  },
};

export const Hero: React.FC = () => {
  const { title, ctaLabel } = homeContent.hero;
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={styles.heroSection} aria-label="Hero">
      {/* Hero Content Container */}
      <div className={styles.contentContainer}>
        <Container>
          <motion.div
            className={styles.presentationPanel}
            initial="hidden"
            animate={isRevealed ? 'visible' : 'hidden'}
            variants={textContainer}
          >
            <motion.h1 variants={fadeUp} className={styles.headline}>
              {title.split('\n').map((line, idx, arr) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>

            <motion.span variants={fadeUp} className={styles.tagline}>
              Ahmedabad's Trusted Signage Manufacturer.
            </motion.span>

            <motion.div variants={fadeUp} className={styles.ctasRow}>
              <Button to="/services" variant="primary" size="large" showTechnicalDot>
                {ctaLabel}
              </Button>
              <Button
                to="/gallery"
                variant="secondary"
                size="large"
                icon={<ArrowUpRight size={14} />}
              >
                View Gallery
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
