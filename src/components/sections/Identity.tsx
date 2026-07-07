import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
import SectionEyebrow from '../ui/SectionEyebrow';

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
export const Identity: React.FC<{
  showAbout?: boolean;
  showTrust?: boolean;
  showLeadership?: boolean;
  showServices?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}> = ({
  showAbout = true,
  showTrust = true,
  showLeadership = true,
  showServices = true,
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}) => {
  const identity = homeContent.identity as TGBStandardSection;
  const { intro, label, title: idTitle, subtitle: idSubtitle, capabilities, standards } = identity;

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Parallax Scroll calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className={styles.identityWrapper}>
      {/* ══════════════════════════════════════════
          ZONE 0 — ABOUT / WHO WE ARE
      ══════════════════════════════════════════ */}
      {showAbout && (
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
          <div className={styles.inner}>
            <motion.div 
              className={styles.introSection}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {/* TOP HEADER */}
              <motion.div className={styles.introTopHeader} variants={fadeUp}>
                {breadcrumbs && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px', fontFamily: 'var(--font-technical)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-steel)' }}>
                    {breadcrumbs.map((crumb, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span style={{ opacity: 0.4 }}>›</span>}
                        {crumb.to ? (
                          <Link to={crumb.to} style={{ color: 'inherit', textDecoration: 'none' }}>{crumb.label}</Link>
                        ) : (
                          <span style={{ color: 'var(--color-off-white)' }}>{crumb.label}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
                <SectionEyebrow>{eyebrow || intro.eyebrowStory}</SectionEyebrow>
                <h2 className={styles.introTitle}>
                  {(title || intro.headingStory).split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
                <p className={styles.introSubheading}>{subtitle || intro.subheadingStory}</p>
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
                    <SectionEyebrow>{intro.eyebrowWho}</SectionEyebrow>
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
                  </div>

                  {/* 2x2 Stats Grid inside Right Column */}
                  <div className={styles.rightColStatsGrid}>
                    {intro.metrics.map((metric, i) => (
                      <div key={i} className={styles.rightColStatCard}>
                        <span className={styles.rightColStatValue}>{metric.value}</span>
                        <span className={styles.rightColStatLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      {/* ══════════════════════════════════════════
          WHY BUSINESSES TRUST TGB
      ══════════════════════════════════════════ */}
      {showTrust && (
        <section className={styles.trustSection}>
          <div className={styles.inner}>
            <div className={styles.trustBadgesSection}>
              <div className={styles.trustSectionHeader}>
                <h2 className={styles.trustTitle}>{identity.trustTitle}</h2>
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
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          ZONE 4 — LEADERSHIP TEAM
      ══════════════════════════════════════════ */}
      {showLeadership && (
        <section className={styles.leadershipSection}>
          <div className={styles.inner}>
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
                <motion.div
                  key={i}
                  className={styles.leaderCard}
                  variants={fadeUp}
                  whileHover={{ scale: 1.005 }}
                >
                  <div className={styles.leaderImageContainer}>
                    {leader.image && (
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className={styles.leaderImage} 
                        loading="lazy"
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
      )}

      {/* SERVICES OVERVIEW */}
      {showServices && <ServicesOverview />}
    </div>
  );
};

export default Identity;

