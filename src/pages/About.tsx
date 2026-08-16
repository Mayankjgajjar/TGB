import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Industries from '../components/sections/Industries';
import ContactCTA from '../components/sections/ContactCTA';
import { aboutContent } from '../content/about';
import styles from './About.module.css';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.page}
    >
      {/* 1. Hero Header */}
      <section className={styles.heroSection}>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
          <div className={styles.heroContent}>
            <SectionEyebrow>ABOUT TGB ENTERPRISE</SectionEyebrow>
            <h1 className={styles.heroTitle}>
              Sign Board Manufacturers in Ahmedabad
            </h1>
            <p className={styles.heroDesc}>
              In-house design, fabrication, and installation of LED signs, ACP facade cladding,
              3D acrylic and stainless steel letters, and custom neon displays —
              serving businesses across Gujarat and India.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Story & Who We Are Split */}
      <section className={styles.section}>
        <Container>
          <div className={styles.storyGrid}>
            <div className={styles.storyImageWrapper}>
              <img
                src={aboutContent.whoWeAre.image}
                alt="TGB Enterprise signage manufacturing facility Nikol Ahmedabad"
                className={styles.storyImage}
                loading="lazy"
              />
            </div>

            <div className={styles.storyContent}>
              <SectionEyebrow>{aboutContent.whoWeAre.header.eyebrow}</SectionEyebrow>
              <h2 className={styles.storyTitle}>{aboutContent.whoWeAre.header.title}</h2>
              <p className={styles.storyLead}>{aboutContent.whoWeAre.description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Statistics Strip — horizontal, typographic */}
      <section className={styles.statsStrip}>
        <Container>
          <div className={styles.statsRow}>
            {aboutContent.statistics.metrics.map((m, idx) => (
              <React.Fragment key={idx}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{m.value}</span>
                  <span className={styles.statLabel}>{m.label}</span>
                </div>
                {idx < aboutContent.statistics.metrics.length - 1 && (
                  <span className={styles.statDivider} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Mission & Vision — side-by-side text blocks, no icon cards */}
      <section className={styles.section}>
        <Container>
          <div className={styles.missionVisionHeader}>
            <SectionEyebrow>{aboutContent.missionVision.header.eyebrow}</SectionEyebrow>
            <h2 className={styles.sectionTitle}>{aboutContent.missionVision.header.title}</h2>
          </div>

          <div className={styles.missionVisionGrid}>
            <div className={styles.missionBlock}>
              <span className={styles.mvLabel}>MISSION</span>
              <h3 className={styles.mvTitle}>{aboutContent.missionVision.mission.title}</h3>
              <p className={styles.mvText}>{aboutContent.missionVision.mission.description}</p>
            </div>

            <div className={styles.visionBlock}>
              <span className={styles.mvLabel}>VISION</span>
              <h3 className={styles.mvTitle}>{aboutContent.missionVision.vision.title}</h3>
              <p className={styles.mvText}>{aboutContent.missionVision.vision.description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Core Values — numbered list, no cards */}
      <section className={styles.valuesSection}>
        <Container>
          <div className={styles.valuesHeader}>
            <SectionEyebrow>{aboutContent.coreValues.header.eyebrow}</SectionEyebrow>
            <h2 className={styles.sectionTitle}>{aboutContent.coreValues.header.title}</h2>
          </div>

          <div className={styles.valuesList}>
            {aboutContent.coreValues.items.map((val, idx) => (
              <div key={idx} className={styles.valueRow}>
                <span className={styles.valueNum}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className={styles.valueBody}>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Leadership Team — keep cards, they have real photos */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <SectionEyebrow>EXECUTIVE LEADERSHIP</SectionEyebrow>
            <h2 className={styles.sectionTitle}>{aboutContent.leadership.header.title}</h2>
            <p className={styles.sectionSubtitle}>{aboutContent.leadership.header.subtitle}</p>
          </div>

          <div className={styles.leaderGrid}>
            {aboutContent.leadership.leaders.map((leader, idx) => (
              <div key={idx} className={styles.leaderCard}>
                <div className={styles.leaderImageWrap}>
                  <img
                    src={leader.image.replace('.jpeg', '.webp')}
                    alt={`${leader.name} — ${leader.role} at TGB Enterprise`}
                    className={styles.leaderImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.leaderBody}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <p className={styles.leaderBio}>{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Manufacturing Process */}
      <section className={styles.processSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <SectionEyebrow>{aboutContent.process.header.eyebrow}</SectionEyebrow>
            <h2 className={styles.sectionTitle}>{aboutContent.process.header.title}</h2>
          </div>

          <div className={styles.processGrid}>
            {aboutContent.process.stages.map((st, idx) => (
              <div key={idx} className={styles.processCard}>
                <span className={styles.processStep}>{st.step}</span>
                <h3 className={styles.processTitle}>{st.title}</h3>
                <p className={styles.processDesc}>{st.description}</p>
                {st.deliverables && st.deliverables.length > 0 && (
                  <ul className={styles.deliverablesList}>
                    {st.deliverables.map((d, di) => (
                      <li key={di} className={styles.deliverable}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Industries Served */}
      <Industries />

      {/* 9. Direct Consultation CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default About;
