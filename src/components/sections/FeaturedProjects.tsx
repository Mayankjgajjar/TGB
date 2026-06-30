import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import { homeContent } from '../../content/home';
import { EASE_EXPO } from '../../animations/variants';
import styles from './FeaturedProjects.module.css';

// Module-level constants — not recreated on every render
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_EXPO },
  },
};


export const FeaturedProjects: React.FC = () => {
  const { header, items } = homeContent.featuredProjects;
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProjectId]);

  const activeProject = selectedProjectId ? items.find(item => item.id === selectedProjectId) : null;

  return (
    <section className={styles.section} id="projects">
      {/* SECTION HEADER */}
      <div className={styles.headerBlock}>
        <span className={styles.eyebrow}>{header.eyebrow}</span>
        <h2 className={styles.title}>{header.heading}</h2>
        <p className={styles.subheading}>{header.subheading}</p>
      </div>

      {/* 2x2 PROJECT GRID */}
      <div className={styles.gridContainer}>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((project) => (
            <motion.div 
              key={project.id} 
              className={styles.projectCardWrapper}
              variants={fadeUp}
            >
              <button 
                className={styles.projectCard}
                onClick={() => setSelectedProjectId(project.id)}
              >
                {/* Project Image Box at Top */}
                <div className={styles.imageWrapper}>
                  <img 
                    src={project.imagePath} 
                    alt={project.project} 
                    className={styles.cardImage} 
                    loading="lazy"
                  />
                </div>

                {/* Card Content Details Box below Image */}
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <span className={styles.location}>{project.location}</span>
                  </div>
                  
                  <h3 className={styles.projectName}>{project.project}</h3>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.cardCta}>
                      View Project <span className={styles.ctaArrow}>→</span>
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PROJECT GALLERY DETAILS MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div 
              className={styles.modalWindow}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className={styles.modalCloseBtn} onClick={() => setSelectedProjectId(null)}>
                <X size={18} />
              </button>

              {/* Left Side: Large Image */}
              <div className={styles.modalImagePanel}>
                <img 
                  src={activeProject.imagePath} 
                  alt={activeProject.project} 
                  className={styles.modalProjectImg} 
                />
              </div>

              {/* Right Side: Details */}
              <div className={styles.modalDetailsPanel}>
                <div>
                  <div className={styles.modalMetaRow}>
                    <span className={styles.modalCategory}>{activeProject.category}</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                    <span className={styles.modalLocation}>{activeProject.location}</span>
                  </div>
                  <h2 className={styles.modalTitle} style={{ marginTop: '8px' }}>{activeProject.project}</h2>
                </div>

                <p className={styles.modalDesc}>{activeProject.description}</p>

                <div className={styles.modalSpecsBox}>
                  <div className={styles.modalSpecItem}>
                    <span className={styles.modalSpecLabel}>CLIENT</span>
                    <span className={styles.modalSpecValue}>{activeProject.client}</span>
                  </div>

                  <div className={styles.modalSpecItem}>
                    <span className={styles.modalSpecLabel}>DIMENSIONS</span>
                    <span className={styles.modalSpecValue}>{activeProject.dimensions}</span>
                  </div>

                  <div className={styles.modalSpecItem}>
                    <span className={styles.modalSpecLabel}>MATERIALS</span>
                    <span className={styles.modalSpecValue}>{activeProject.materials}</span>
                  </div>

                  <div className={styles.modalSpecItem}>
                    <span className={styles.modalSpecLabel}>ENGINEERING SPECIFICATION</span>
                    <span className={`${styles.modalSpecValue} ${styles.modalSpecHighlight}`}>
                      {activeProject.engineering}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
