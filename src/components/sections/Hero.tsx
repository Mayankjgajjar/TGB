import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Hero.module.css';

const STATS = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '5+', label: 'Cities Served' },
  { value: '10 Yrs', label: 'Manufacturing' },
  { value: 'Pan India', label: 'Service Area' },
];

export const Hero: React.FC = () => {
  const { openModal } = useQuoteModal();

  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('products-showcase');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection} aria-label="Hero Banner">
      {/* Background Architectural Visual */}
      <div className={styles.bgContainer}>
        <img
          src="/assets/images/hero-building.webp"
          alt="Architectural commercial building with custom illuminated signage by TGB Enterprise"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <Container>
        <div className={styles.contentWrapper}>
          {/* Headline — larger, more confident */}
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Sign Board Makers
            <br />
            in Ahmedabad.
          </motion.h1>

          {/* Specific subtitle — not generic boilerplate */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            We design, fabricate, and install LED glow signs, ACP facade cladding, 3D acrylic and
            stainless steel letters, and custom neon displays. Every project is built in-house at
            our Nikol factory.
          </motion.p>

          {/* Actions */}
          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button onClick={() => openModal()} className={styles.primaryBtn}>
              Get a Free Quote <ArrowRight size={15} />
            </button>

            <a
              href="#products-showcase"
              onClick={handleScrollToProducts}
              className={styles.secondaryLink}
            >
              View Our Products
            </a>
          </motion.div>

          {/* Horizontal stat row — replaces proof badges */}
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {STATS.map((stat, i) => (
              <React.Fragment key={i}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
                {i < STATS.length - 1 && <span className={styles.statDivider} aria-hidden="true" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
