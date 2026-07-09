import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import OptimizedImage from '../components/ui/OptimizedImage';
import ContactCTA from '../components/sections/ContactCTA';
import useScrollReveal from '../hooks/useScrollReveal';
import { galleryContent } from '../content/gallery';
import servicesOverviewStyles from '../components/sections/ServicesOverview.module.css';
import styles from './Gallery.module.css';
import { ShieldCheck, Ruler, Wrench, Search, Clock, LayoutGrid } from 'lucide-react';

import FAQ from '../components/sections/FAQ';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
      delay: idx * 0.08,
    },
  }),
};

const workmanshipIcons = [ShieldCheck, Ruler, Wrench, Search, Clock];

export const Gallery: React.FC = () => {
  const { hero, featuredWork, galleryItems, signageTypes, industries, qualityPoints, faq } =
    galleryContent;
  const { ref: signageRef, isRevealed: signageRevealed } = useScrollReveal();
  const { ref: industryRef, isRevealed: industryRevealed } = useScrollReveal();
  const { ref: qualityRef, isRevealed: qualityRevealed } = useScrollReveal();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="page"
    >
      {/* ── Gallery Introduction ── */}
      <div className={styles.page}>
        <Container>
          <div className={servicesOverviewStyles.headerBlock}>
            <SectionEyebrow>{hero.eyebrow}</SectionEyebrow>
            <h2 className={servicesOverviewStyles.mainTitle}>{hero.title}</h2>
            <p className={servicesOverviewStyles.subtitle}>{hero.subtitle}</p>
          </div>

          {/* ── Featured Work ── */}
          {featuredWork.length > 0 && (
            <div className={styles.featuredGrid}>
              {featuredWork.map((work) => (
                <Link key={work.id} to={work.link} className={styles.featuredCard}>
                  <OptimizedImage
                    src={work.src}
                    alt={work.title}
                    className={styles.featuredCardImage}
                    loading="lazy"
                  />
                  <div className={styles.featuredCardOverlay} />
                  <div className={styles.featuredCardInfo}>
                    <span className={styles.featuredCardCategory}>{work.category}</span>
                    <h3 className={styles.featuredCardTitle}>{work.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* ── Image Gallery (Main Section) ── */}
      <div className={styles.gallerySection}>
        <Container>
          <div className={servicesOverviewStyles.headerBlock}>
            <SectionEyebrow>IMAGE GALLERY</SectionEyebrow>
            <h2 className={servicesOverviewStyles.mainTitle}>
              Completed Installations & Fabrication Work
            </h2>
            <p className={servicesOverviewStyles.subtitle}>
              Browse our full catalog of signage projects, product close-ups, and installation
              photography.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {galleryItems.map((item, idx) => {
              const isWide = idx % 5 === 3;
              const isTall = idx % 7 === 4;
              const itemClass = [
                styles.galleryItem,
                isWide ? styles.galleryItemWide : '',
                isTall ? styles.galleryItemTall : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <motion.div key={item.id} variants={fadeUp} custom={idx} className={itemClass}>
                  <Link to={item.link}>
                    <OptimizedImage
                      src={item.src}
                      alt={item.alt}
                      className={styles.galleryImage}
                      loading={idx < 6 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className={styles.galleryOverlay} />
                    <span className={styles.galleryTag}>{item.category}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── Browse by Signage Type ── */}
      <div ref={signageRef}>
        <Section spacing="large">
          <Container>
            <motion.div
              className={servicesOverviewStyles.headerBlock}
              initial="hidden"
              animate={signageRevealed ? 'visible' : 'hidden'}
              variants={headerVariants}
            >
              <SectionEyebrow>BROWSE BY TYPE</SectionEyebrow>
              <h2 className={servicesOverviewStyles.mainTitle}>              Explore Our Signage Solutions</h2>
              <p className={servicesOverviewStyles.subtitle}>
                Each category represents a dedicated manufacturing line with specific materials,
                technology, and finishing standards.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={signageRevealed ? 'visible' : 'hidden'}
              variants={headerVariants}
            >
              <Grid cols={3} gap="normal">
                {signageTypes.map((type, idx) => (
                  <motion.div key={type.slug} variants={fadeUp} custom={idx}>
                    <Card
                      icon={LayoutGrid}
                      title={type.name}
                      description={type.shortDescription}
                      to={`/services/${type.slug}`}
                      footerPill="View Service"
                    />
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Section>
      </div>

      {/* ── Browse by Industry ── */}
      <div ref={industryRef}>
        <Section spacing="large">
          <Container>
            <motion.div
              className={servicesOverviewStyles.headerBlock}
              initial="hidden"
              animate={industryRevealed ? 'visible' : 'hidden'}
              variants={headerVariants}
            >
              <SectionEyebrow>BROWSE BY INDUSTRY</SectionEyebrow>
              <h2 className={servicesOverviewStyles.mainTitle}>
                Signage Solutions for Every Sector
              </h2>
              <p className={servicesOverviewStyles.subtitle}>
                We customize visual cladding, viewing dimensions, and lighting configurations to
                match specific commercial environments.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={industryRevealed ? 'visible' : 'hidden'}
              variants={headerVariants}
            >
              <Grid cols={4} gap="normal">
                {industries.map((ind, idx) => (
                  <motion.div key={idx} variants={fadeUp} custom={idx}>
                    <Card title={ind.title} description={ind.description} footerPill={ind.tag} />
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Section>
      </div>

      {/* ── Workmanship & Quality ── */}
      <div ref={qualityRef}>
        <Section spacing="large">
          <Container>
            <motion.div
              className={servicesOverviewStyles.headerBlock}
              initial="hidden"
              animate={qualityRevealed ? 'visible' : 'hidden'}
              variants={headerVariants}
            >
              <SectionEyebrow>WORKMANSHIP</SectionEyebrow>
              <h2 className={servicesOverviewStyles.mainTitle}>              Built to Exact Standards</h2>
              <p className={servicesOverviewStyles.subtitle}>
                Every sign that leaves our workshop undergoes strict quality checks. The images tell
                the story — here is what makes them possible.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={qualityRevealed ? 'visible' : 'hidden'}
              variants={headerVariants}
            >
              <Grid cols={3} gap="normal">
                {qualityPoints.map((point, idx) => {
                  const Icon = workmanshipIcons[idx] || ShieldCheck;
                  return (
                    <motion.div key={idx} variants={fadeUp} custom={idx}>
                      <Card icon={Icon} title={point.title} description={point.description} />
                    </motion.div>
                  );
                })}
              </Grid>
            </motion.div>
          </Container>
        </Section>
      </div>

      {/* ── FAQ ── */}
      <FAQ title={faq.title} subtitle={faq.subtitle} items={faq.items} />

      {/* ── Contact CTA ── */}
      <ContactCTA />
    </motion.div>
  );
};

export default Gallery;
