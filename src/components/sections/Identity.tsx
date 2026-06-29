import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Lightbulb, Sun, Factory, ShieldCheck,
  Zap, Layers, Flame, Type, Bold, Home, Triangle,
  CloudSun, BadgeCheck,
  LucideIcon
} from 'lucide-react';
import { homeContent, type TGBStandardSection } from '../../content/home';
import ServicesOverview from './ServicesOverview';
import styles from './Identity.module.css';

// Icon registry — covers service cards + trust cards
const ICON_MAP: Record<string, LucideIcon> = {
  // Service icons
  Zap, Layers, Flame, Type, Bold, Sun, Home, Triangle,
  // Trust card icons
  Lightbulb, Factory, ShieldCheck, CloudSun, BadgeCheck,
};

// ── Animation Variants ──────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const capabilityVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ────────────────────────────────────────────────
export const Identity: React.FC = () => {
  const identity = homeContent.identity as TGBStandardSection;
  const { intro, label, title, subtitle, capabilitiesLabel, capabilities, standards } = identity;

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

        {/* ══════════════════════════════════════════
            ZONE 0 — WHO WE ARE (INTRODUCTION)
        ══════════════════════════════════════════ */}
        <motion.div 
          className={styles.introSection}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Centered Header matching other sections */}
          <motion.div className={styles.headerBlock} variants={fadeUp}>
            <div className={styles.titleBlock}>
              <h2 className={styles.mainTitle}>{intro.label}</h2>
              <p className={styles.subtitle}>
                {intro.title.split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </motion.div>

          {/* Split Layout: Image (Left) + Content (Right) */}
          <div className={styles.introSplit}>
            <motion.div className={styles.introImageCol} variants={fadeUp}>
              <div 
                className={styles.introImage} 
                style={{ backgroundImage: `url(${intro.image})` }} 
              />
            </motion.div>
            
            <motion.div className={styles.introContentCol} variants={fadeUp}>
              <div className={styles.introTextWrapper}>
                <p className={styles.introSplitSubtitle}>{intro.subtitle}</p>
                <p className={styles.introSplitSubtitle}>{intro.splitSubtitle}</p>
                <p className={styles.introSplitSubtitle}>{intro.splitSubtitle2}</p>
              </div>

              <div className={styles.metricsGrid}>
                {intro.metrics.map((metric, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.metricCard}
                    variants={fadeUp}
                  >
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            ZONE 1 — SECTION HEADER
        ══════════════════════════════════════════ */}
        <motion.div
          className={styles.headerBlock}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >          <motion.div className={styles.titleBlock} variants={fadeUp}>
            <h2 className={styles.mainTitle}>
              {title.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            ZONE 2 — SERVICE CARDS (4×2 Grid)
        ══════════════════════════════════════════ */}
        <div className={styles.capabilitiesSection}>

          <motion.div
            className={styles.capabilitiesGrid}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {capabilities.map((cap) => {
              const Icon = ICON_MAP[cap.icon] ?? Zap;
              return (
                <motion.div
                  key={cap.number}
                  className={styles.serviceCard}
                  variants={cardVariant}
                >
                  <span className={styles.serviceNum}>{cap.number}</span>
                  
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <span className={styles.serviceName}>{cap.name}</span>
                  </div>

                  <p className={styles.serviceDesc}>{cap.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════
            ZONE 3 — HORIZONTAL EDITORIAL STORY
        ══════════════════════════════════════════ */}
        <div>
          {/* Intro block */}
          <motion.div
            className={styles.headerBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className={styles.titleBlock}>
              <h2 className={styles.mainTitle}>
                {identity.trustTitle.split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className={styles.subtitle}>{identity.trustSubtitle}</p>
            </div>
          </motion.div>

          {/* 2x2 Feature Grid */}
          <motion.div
            className={styles.featureGrid}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {standards.map((standard) => {
              const Icon = ICON_MAP[standard.icon] || Zap;
              return (
                <motion.div
                  key={standard.number}
                  className={styles.featureCard}
                  variants={fadeUp}
                >
                  <div className={styles.featureIconWrapper}>
                    <Icon className={styles.featureIcon} strokeWidth={1.25} />
                  </div>
                  
                  <div className={styles.featureCategory}>{standard.category}</div>
                  <h3 className={styles.featureTitle}>{standard.title}</h3>
                  <p className={styles.featureDescription}>{standard.description}</p>
                  
                  <div className={styles.featureTechLabel}>
                    {standard.techLabel}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

      <ServicesOverview />

      {/* ══════════════════════════════════════════
          ZONE 4 — LEADERSHIP TEAM
      ══════════════════════════════════════════ */}
      <div>
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className={styles.titleBlock}>
            <h2 className={styles.mainTitle}>{identity.leadershipTitle}</h2>
            <p className={styles.subtitle}>{identity.leadershipSubtitle}</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.leadershipGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {identity.leaders.map((leader, i) => (
            <motion.div key={i} className={styles.leaderCard} variants={fadeUp}>
              <div className={styles.leaderImageContainer}>
                {leader.image && (
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className={styles.leaderImage} 
                  />
                )}
                <div className={styles.leaderImageOverlay} />
              </div>
              <div className={styles.leaderInfo}>
                <h3 className={styles.leaderName}>{leader.name}</h3>
                <span className={styles.leaderRole}>{leader.role}</span>
                <p className={styles.leaderDesc}>{leader.description}</p>
              </div>
              <div className={styles.leaderAccentLine} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Identity;

