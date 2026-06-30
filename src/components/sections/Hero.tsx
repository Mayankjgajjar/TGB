import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { homeContent } from '../../content/home';
import { useQuoteModal } from '../../context/QuoteContext';
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
  const { openModal } = useQuoteModal();
  const { label, title, subtitle, ctaLabel } = homeContent.hero;

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -90; // sticky header height offset
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    },
    []
  );

  return (
    <section id="home" className={styles.heroSection} aria-label="Hero">
      {/* Cinematic Shadow Overlay */}
      <div className={styles.matteOverlay} />

      {/* Hero Content */}
      <div className={styles.contentContainer}>
        <Container>
          <motion.div
            className={styles.presentationPanel}
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
            <div className={styles.accentFrame}>
              <motion.span variants={fadeUp} className={styles.metaTag}>
                {label}
              </motion.span>

              <motion.h1 variants={fadeUp} className={styles.headline}>
                {title.split('\n').map((line, idx, arr) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </motion.h1>
            </div>

            <motion.p variants={fadeUp} className={styles.description}>
              {subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className={styles.ctasRow}>
              <Button
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                variant="primary"
                size="large"
                showTechnicalDot
              >
                {ctaLabel}
              </Button>
              <Button
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                variant="secondary"
                size="large"
                icon={<ArrowUpRight size={14} />}
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.ticksRow}>
              <span className={styles.tickItem}>DESIGN</span>
              <span className={styles.tickDivider}>/</span>
              <span className={styles.tickItem}>MANUFACTURING</span>
              <span className={styles.tickDivider}>/</span>
              <span className={styles.tickItem}>INSTALLATION</span>
              <span className={styles.tickDivider}>/</span>
              <span className={styles.tickItem}>AFTER-SALES SERVICE</span>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
