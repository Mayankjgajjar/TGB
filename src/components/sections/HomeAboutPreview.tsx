import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { EASE_EXPO } from '../../animations/variants';
import styles from './HomeAboutPreview.module.css';

const stats = [
  {
    number: '10',
    suffix: '+',
    label: 'Years of Experience',
    desc: 'Serving Ahmedabad & India',
  },
  {
    number: '500',
    suffix: '+',
    label: 'Projects Delivered',
    desc: 'Across Gujarat & all India',
  },
  {
    number: '5',
    suffix: '-Year',
    label: 'LED Warranty',
    desc: 'On premium sign modules',
  },
  {
    number: '100',
    suffix: '%',
    label: 'In-House Fabrication',
    desc: 'Full control, zero compromise',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: EASE_EXPO } },
};

export const HomeAboutPreview: React.FC = () => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section} aria-label="About TGB Enterprise">
      <div className={styles.inner}>
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
        >
          {/* ── Left: Company Introduction ── */}
          <motion.div className={styles.textCol} variants={fadeUp}>
            <p className={styles.eyebrow}>About TGB Enterprise</p>
            <h2 className={styles.heading}>
              Ahmedabad's Most Trusted Sign Board Manufacturer.
            </h2>
            <p className={styles.body}>
              TGB Enterprise is a premium signage design, manufacturing, and installation company operating from Nikol, Ahmedabad. We engineer custom sign boards that transform how businesses are seen — from retail storefronts to corporate towers.
            </p>
            <p className={styles.body}>
              Every project is handled end-to-end from our fabrication workshop: design, precision manufacturing, professional installation, and long-term after-sales support. No outsourcing. No compromises.
            </p>
            <Link to="/about" className={styles.learnMore}>
              Our Story & Values <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* ── Right: Stats Grid ── */}
          <motion.div
            className={styles.statsCol}
            variants={shouldReduceMotion ? {} : container}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} className={styles.statCard} variants={fadeUp}>
                <div className={styles.statNumber}>
                  {stat.number}<span>{stat.suffix}</span>
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDesc}>{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;
