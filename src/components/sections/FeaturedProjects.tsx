import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { projectsContent } from '../../content/projects';
import { homeContent } from '../../content/home';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './FeaturedProjects.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';
import { ArrowRight } from 'lucide-react';


export const FeaturedProjects: React.FC = () => {
  const { header } = homeContent.featuredProjects;
  // Read projects from the canonical single source of truth
  const items = projectsContent.items;
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : idx * 0.08,
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={ref} className={styles.section}>
      {/* SECTION HEADER */}
      <motion.div 
        className={styles.headerBlock}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <SectionEyebrow>{header.eyebrow}</SectionEyebrow>
        <h2 className={styles.title}>{header.heading}</h2>
        <p className={styles.subheading}>{header.subheading}</p>
      </motion.div>

      {/* 4-column PROJECT GRID */}
      <div className={styles.gridContainer}>
        <motion.div 
          className={styles.grid}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          {items.map((project, idx) => (
            <motion.div 
              key={project.id} 
              className={styles.projectCardWrapper}
              variants={fadeUp}
              custom={idx}
            >
              <Card
                image={project.imagePath}
                category={project.location}
                title={project.name}
                footerLinkText="View Project"
                to={`/projects/${project.id}`}
                imageAlt={`${project.category} installation for ${project.name} - TGB Enterprise Ahmedabad`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Projects CTA */}
      <div style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '16px' }}>
        <Link
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-technical, monospace)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            padding: '12px 0',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#c8a96e')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
        >
          View All Projects
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
