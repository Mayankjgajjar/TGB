import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';
import { projectsContent } from '../content/projects';
import styles from './ProjectArchive.module.css';

const Process = lazy(() => import('../components/sections/Process'));

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />;

export const ProjectArchive: React.FC = () => {
  const { header, items } = projectsContent;

  useEffect(() => {
    document.title = 'All Projects | TGB Enterprise – Sign Board Manufacturer in Ahmedabad';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Browse the full portfolio of completed signage projects by TGB Enterprise. LED boards, ACP facades, neon signs, and 3D letters across Ahmedabad and Gujarat.'
      );
    }
  }, []);

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

      <div className={styles.page} style={{ paddingBottom: 0 }}>
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

      {/* Our Approach (lazy-loaded Process component) */}
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>

      {/* Final CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default ProjectArchive;
