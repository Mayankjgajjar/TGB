import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  const { intro, label, title, subtitle, capabilities, standards } = identity;

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Parallax Scroll calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

        {/* ══════════════════════════════════════════
            ZONE 0 — ABOUT / WHO WE ARE
        ══════════════════════════════════════════ */}
        <motion.div 
          className={styles.introSection}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* TOP HEADER */}
          <motion.div className={styles.introTopHeader} variants={fadeUp}>
            <span className={styles.introEyebrow}>{intro.eyebrowStory}</span>
            <h2 className={styles.introTitle}>{intro.headingStory}</h2>
            <p className={styles.introSubheading}>{intro.subheadingStory}</p>
          </motion.div>

          {/* TWO-COLUMN SPLIT */}
          <div className={styles.introSplit}>
            {/* Left Column: Image with parallax effect */}
            <motion.div className={styles.introImageCol} variants={fadeUp}>
              <motion.div 
                className={styles.introImage} 
                style={{ 
                  y: yBg,
                  backgroundImage: `url(${intro.image})` 
                }}
              >
                <div className={styles.introImageOverlay} />
              </motion.div>
            </motion.div>

            {/* Right Column: Story Text */}
            <motion.div className={styles.introContentCol} variants={fadeUp}>
              <div className={styles.introTextWrapper}>
                <span className={styles.introEyebrow}>{intro.eyebrowWho}</span>
                <h3 className={styles.whoTitle}>
                  {intro.headingWho.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className={styles.introPara}>{intro.paragraph1}</p>
                <p className={styles.introPara}>{intro.paragraph2}</p>
                <p className={styles.introPara}>{intro.paragraph3}</p>
                <p className={styles.closingStatement}>
                  {intro.closingStatement.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>

          {/* STATISTICS GRID */}
          <div className={styles.statsSection}>
            <motion.div 
              className={styles.statsRowCard}
              variants={cardVariant}
            >
              {intro.metrics.map((metric, i) => (
                <div key={i} className={styles.statCol}>
                  <span className={styles.statValue}>{metric.value}</span>
                  <span className={styles.statLabel}>{metric.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* FEATURED CLIENTS */}
          <div className={styles.clientsSection}>
            <h4 className={styles.clientsTitle}>{intro.featuredClientsTitle}</h4>
            <div className={styles.sliderContainer}>
              <div className={styles.marqueeTrack}>
                {[
                  ...intro.featuredClients,
                  "And many more...",
                  ...intro.featuredClients,
                  "And many more...",
                  ...intro.featuredClients,
                  "And many more...",
                  ...intro.featuredClients,
                  "And many more..."
                ].map((client, i) => (
                  <span key={i} className={styles.clientItem}>
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* WHY BUSINESSES TRUST TGB */}
          <div className={styles.trustBadgesSection}>
            <div className={styles.trustSectionHeader}>
              <h4 className={styles.trustTitle}>{identity.trustTitle}</h4>
              <p className={styles.trustSubtitle}>{identity.trustSubtitle}</p>
            </div>
            <div className={styles.featureGrid}>
              {standards.map((standard) => {
                const Icon = ICON_MAP[standard.icon] || Zap;
                return (
                  <motion.div
                    key={standard.number}
                    className={styles.featureCard}
                    variants={fadeUp}
                    whileHover={{ y: -6, scale: 1.02 }}
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
            </div>
          </div>
        </motion.div>

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



      </div>

      <ServicesOverview />



    </section>
  );
};

export default Identity;

