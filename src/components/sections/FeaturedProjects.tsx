import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

import { homeContent } from '../../content/home';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './FeaturedProjects.module.css';


export const FeaturedProjects: React.FC = () => {
  const { header, items } = homeContent.featuredProjects;
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
        <span className={styles.eyebrow}>{header.eyebrow}</span>
        <h2 className={styles.title}>{header.heading}</h2>
        <p className={styles.subheading}>{header.subheading}</p>
      </motion.div>

      {/* 2x2 PROJECT GRID */}
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
                title={project.project}
                footerLinkText="View Project"
                to={`/projects/${project.id}`}
                imageAlt={`${project.category} installation for ${project.project} - TGB Enterprise Ahmedabad`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
