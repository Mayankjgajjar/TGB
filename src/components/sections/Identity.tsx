import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Lightbulb,
  Sun,
  Factory,
  ShieldCheck,
  Zap,
  Layers,
  Flame,
  Type,
  Bold,
  Home,
  Triangle,
  CloudSun,
  BadgeCheck,
  LucideIcon,
} from 'lucide-react';
import { homeContent } from '../../content/home';
import ServicesOverview from './ServicesOverview';
import OptimizedImage from '../ui/OptimizedImage';
import styles from './Identity.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';
import Breadcrumbs from '../ui/Breadcrumbs';

// Icon registry — covers service cards + trust cards
const ICON_MAP: Record<string, LucideIcon> = {
  // Service icons
  Zap,
  Layers,
  Flame,
  Type,
  Bold,
  Sun,
  Home,
  Triangle,
  // Trust card icons
  Lightbulb,
  Factory,
  ShieldCheck,
  CloudSun,
  BadgeCheck,
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
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

const capabilityVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Component ────────────────────────────────────────────────
// ── Modular Exported Sub-Components ──────────────────────────

export const CompanyIntro: React.FC<{
  breadcrumbs?: { label: string; to?: string }[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  headingLevel?: 1 | 2;
}> = ({ breadcrumbs, eyebrow, title, subtitle, headingLevel = 1 }) => {
  const identity = homeContent.identity as TGBStandardSection;
  const { intro } = identity;

  return (
    <motion.div className={styles.introTopHeader} variants={fadeUp}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <SectionEyebrow>{eyebrow || intro.eyebrowStory}</SectionEyebrow>
      {React.createElement(
        headingLevel === 1 ? 'h1' : 'h2',
        { className: styles.introTitle },
        (title || intro.headingStory).split('\n').map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        )),
      )}
      <p className={styles.introSubheading}>{subtitle || intro.subheadingStory}</p>
    </motion.div>
  );
};

export const WhoWeAreSplit: React.FC<{
  intro: any;
  showMetrics?: boolean;
}> = ({ intro, showMetrics = true }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Parallax Scroll calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div className={styles.introSplit} ref={sectionRef}>
      {/* Left Column: Image with parallax effect */}
      <motion.div
        className={styles.introImageCol}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div
          className={styles.introImage}
          style={{
            y: yBg,
            backgroundImage: `url(${intro.image})`,
          }}
        >
          <div className={styles.introImageOverlay} />
        </motion.div>
      </motion.div>

      {/* Right Column: Story Text */}
      <motion.div
        className={styles.introContentCol}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className={styles.introTextWrapper}>
          <SectionEyebrow>{intro.eyebrowWho}</SectionEyebrow>
          <h2 className={styles.whoTitle}>
            {intro.headingWho.split('\n').map((line: string, i: number, arr: any) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className={styles.introPara}>{intro.paragraph1}</p>
          <p className={styles.introPara}>{intro.paragraph2}</p>
          <p className={styles.introPara}>{intro.paragraph3}</p>
        </div>

        {/* 2x2 Stats Grid inside Right Column */}
        {showMetrics && (
          <div className={styles.rightColStatsGrid}>
            {intro.metrics.map((metric: any, i: number) => (
              <div key={i} className={styles.rightColStatCard}>
                <span className={styles.rightColStatValue}>{metric.value}</span>
                <span className={styles.rightColStatLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const WhyTrustGrid: React.FC<{
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  standards?: any[];
  asDiv?: boolean;
}> = ({ eyebrow, title, subtitle, standards, asDiv = false }) => {
  const identity = homeContent.identity as TGBStandardSection;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const activeEyebrow = eyebrow || identity.trustLabel;
  const activeTitle = title || identity.trustTitle;
  const activeSubtitle = subtitle || identity.trustSubtitle;
  const activeStandards = standards || identity.standards;

  const content = (
    <div className={styles.trustBadgesSection}>
      <motion.div
        className={styles.headerBlock}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {activeEyebrow && <SectionEyebrow>{activeEyebrow}</SectionEyebrow>}
        <h2 className={styles.mainTitle}>{activeTitle}</h2>
        <p className={styles.subtitle}>{activeSubtitle}</p>
      </motion.div>
      <motion.div
        className={styles.featureGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {activeStandards.map((standard: any) => {
          const Icon = ICON_MAP[standard.icon] || Zap;
          return (
            <motion.div
              key={standard.number ?? standard.title}
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

              <div className={styles.featureTechLabel}>{standard.techLabel}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );

  if (asDiv) {
    return (
      <div ref={sectionRef as any} id="trust" className={styles.sectionAnchor}>
        {content}
      </div>
    );
  }

  return (
    <section className={styles.trustSection} ref={sectionRef}>
      <div className={styles.inner}>{content}</div>
    </section>
  );
};

export const LeadershipGrid: React.FC<{
  title?: string;
  subtitle?: string;
  leaders?: any[];
  asDiv?: boolean;
}> = ({ title, subtitle, leaders, asDiv = false }) => {
  const identity = homeContent.identity as TGBStandardSection;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const activeTitle = title || identity.leadershipTitle;
  const activeSubtitle = subtitle || identity.leadershipSubtitle;
  const activeLeaders = leaders || identity.leaders;

  const content = (
    <>
      <motion.div
        className={styles.headerBlock}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <h2 className={styles.mainTitle}>{activeTitle}</h2>
        <p className={styles.subtitle}>{activeSubtitle}</p>
      </motion.div>

      <motion.div
        className={styles.leadershipGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {activeLeaders.map((leader: any, i: number) => (
          <motion.div
            key={i}
            className={styles.leaderCard}
            variants={fadeUp}
            whileHover={{ scale: 1.005 }}
          >
            <div className={styles.leaderImageContainer}>
              {leader.image && (
                <OptimizedImage
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
    </>
  );

  if (asDiv) {
    return (
      <div ref={sectionRef as any} id="leadership" className={styles.sectionAnchor}>
        {content}
      </div>
    );
  }

  return (
    <section className={styles.leadershipSection} ref={sectionRef}>
      <div className={styles.inner}>{content}</div>
    </section>
  );
};

// ── Default Export Component ─────────────────────────────────
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
  const { intro } = identity;

  return (
    <div className={styles.identityWrapper}>
      {showAbout && (
        <section id="about" className={styles.aboutSection}>
          <div className={styles.inner}>
            <div className={styles.introSection}>
              <CompanyIntro
                breadcrumbs={breadcrumbs}
                eyebrow={eyebrow}
                title={title}
                subtitle={subtitle}
                headingLevel={2}
              />
              <WhoWeAreSplit intro={intro} />
            </div>
          </div>
        </section>
      )}
      {showTrust && <WhyTrustGrid />}
      {showLeadership && <LeadershipGrid />}
      {showServices && <ServicesOverview />}
    </div>
  );
};

export default Identity;
