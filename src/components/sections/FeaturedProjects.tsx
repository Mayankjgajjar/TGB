import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { projectsContent } from '../../content/projects';
import { homeContent } from '../../content/home';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './FeaturedProjects.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';


export const FeaturedProjects: React.FC = () => {
  const { header, cta, stats } = homeContent.featuredProjects;
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
    <section ref={ref} className={styles.section} id="projects">
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

      {/* VIEW ALL PROJECTS CTA */}
      <motion.div
        className={styles.ctaWrapper}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <div className={styles.ctaBlock}>
          <h3 className={styles.ctaTitle}>{cta.heading}</h3>
          <p className={styles.ctaDesc}>{cta.description}</p>
          <Link to="/projects" className={styles.ctaButton}>
            {cta.buttonLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </motion.div>

      {/* STATS BAR */}
      {stats && stats.length > 0 && (
        <div className={styles.statsBar}>
          <div className={styles.statsInner}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statCol}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
