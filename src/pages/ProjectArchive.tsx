import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';
import { projectsContent } from '../content/projects';
import styles from './ProjectArchive.module.css';

// ── Inline styling definitions keeping styling identical to other pages ──
const sectionWrap: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

const sectionBlock: React.CSSProperties = {
  padding: '80px 0',
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-technical, monospace)',
  fontSize: '0.625rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-accent, #c8a96e)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-display, Montserrat, sans-serif)',
  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
  fontWeight: 700,
  color: '#ffffff',
  margin: '0 0 16px',
  letterSpacing: '-0.02em',
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body, Roboto, sans-serif)',
  fontSize: '1rem',
  lineHeight: 1.75,
  color: 'rgba(255,255,255,0.6)',
  margin: '0 0 16px',
};

const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2px',
  marginTop: '40px',
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.06)',
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const cardTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display, Montserrat, sans-serif)',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#ffffff',
  margin: 0,
};

const cardDescStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body, Roboto, sans-serif)',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: 'rgba(255,255,255,0.45)',
  margin: 0,
};

export const ProjectArchive: React.FC = () => {
  const { header, items } = projectsContent;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: idx * 0.08,
      },
    }),
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <PageHero
        eyebrow={header.label}
        title={header.title}
        subtitle={header.subtitle}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Projects' },
        ]}
      />

      {/* ── Portfolio Introduction ── */}
      <section style={{ ...sectionBlock, paddingBottom: '0' }} aria-label="Portfolio Introduction">
        <div style={sectionWrap}>
          <div style={{ maxWidth: '800px' }}>
            <span style={eyebrowStyle}>Select Works Overview</span>
            <h2 style={h2Style}>Landmark Signage Projects Across Gujarat and India.</h2>
            <p style={bodyStyle}>
              Browse through our case studies of custom-engineered sign board fabrications and facade installations. We work closely with architects, developers, and brands to construct signs that align precisely with structural wind-load requirements, building blueprints, and brand identity guidelines.
            </p>
            <p style={bodyStyle}>
              From monumental ACP claddings to warm LED halo-lit retail showrooms in Nikol, Ahmedabad, each project is a testament to our engineering standards and material integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Portfolio Grid ── */}
      <div className={styles.page} style={{ paddingTop: '40px', minHeight: 'auto' }}>
        <Container>
          {/* Project count badge */}
          <div className={styles.metaBar} style={{ justifyContent: 'flex-start', marginBottom: '32px' }}>
            <span className={styles.countBadge}>{items.length} Case Studies</span>
            <span className={styles.metaDivider} aria-hidden="true">—</span>
            <span className={styles.metaNote}>Ahmedabad & national projects</span>
          </div>

          {/* Projects grid */}
          <motion.div
            className={styles.grid}
            initial="hidden"
            animate="visible"
          >
            {items.map((project, idx) => (
              <motion.div
                key={project.id}
                className={styles.cardWrapper}
                variants={fadeUp}
                custom={idx}
              >
                <Card
                  image={project.imagePath}
                  category={project.location}
                  title={project.name}
                  description={project.category}
                  footerLinkText="View Project Case Study"
                  to={`/projects/${project.id}`}
                  imageAlt={`${project.category} – ${project.name}, TGB Enterprise`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state (shown when no projects exist) */}
          {items.length === 0 && (
            <div className={styles.emptyState}>
              <p>No projects to display yet. Check back soon.</p>
            </div>
          )}
        </Container>
      </div>

      {/* ── Our Approach & Why Choose TGB ── */}
      <section style={sectionBlock} aria-label="Our Approach to Signage Execution">
        <div style={sectionWrap}>
          <div>
            <span style={eyebrowStyle}>Project Execution</span>
            <h2 style={h2Style}>How We Deliver Premium Brand Facades.</h2>
            <p style={{ ...bodyStyle, maxWidth: '600px' }}>
              We apply strict quality standards at every milestone of our workflow to guarantee durability, safety, and brand alignment.
            </p>
          </div>

          <div style={cardGridStyle}>
            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>01 / ENGINEERING</span>
              <h3 style={cardTitleStyle}>Structural Calculations</h3>
              <p style={cardDescStyle}>
                We perform wind-load resistance and weight calculations before producing any large-scale exterior signs or pylon frameworks.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>02 / DETAIL PRECISION</span>
              <h3 style={cardTitleStyle}>Exact Technical Proofing</h3>
              <p style={cardDescStyle}>
                Before material cutting, we build digital visualizations and physical dimension mockups to avoid any facade spatial conflicts.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.45)' }}>03 / TIMEFRAMES</span>
              <h3 style={cardTitleStyle}>Scheduled Installation</h3>
              <p style={cardDescStyle}>
                Our certified technicians manage delivery, mounting, and grid wiring, ensuring safety code compliance on-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Page-end CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default ProjectArchive;
