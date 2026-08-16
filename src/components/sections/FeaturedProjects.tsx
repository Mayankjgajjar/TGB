import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsContent } from '../../content/projects';
import { homeContent } from '../../content/home';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './FeaturedProjects.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';
import { ArrowRight, MapPin } from 'lucide-react';
import Container from '../ui/Container';

export const FeaturedProjects: React.FC = () => {
  const { header } = homeContent.featuredProjects;
  const items = projectsContent.items;
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  const heroProject = items[0]; // INFRA CORP — most data-rich project
  const compactProjects = items.slice(1); // Remaining 3 projects

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : delay,
      },
    }),
  };

  return (
    <section ref={ref} className={styles.section}>
      <Container>
        {/* Section Header — left-aligned, not centered */}
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <SectionEyebrow>{header.eyebrow}</SectionEyebrow>
          <h2 className={styles.sectionTitle}>Selected Client Installations</h2>
        </motion.div>

        {/* ── Featured Hero Project ── */}
        <motion.div
          className={styles.heroProject}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0.1}
        >
          {/* Image — 60% */}
          <div className={styles.heroImage}>
            <img
              src={heroProject.imagePath.replace('.png', '.webp')}
              alt={`${heroProject.category} installation — ${heroProject.name}`}
              className={styles.heroImg}
              loading="lazy"
            />
            <span className={styles.heroCategory}>{heroProject.category}</span>
          </div>

          {/* Details — 40% */}
          <div className={styles.heroDetails}>
            <div className={styles.heroProjMeta}>
              <span className={styles.heroYear}>{heroProject.year}</span>
              <span className={styles.heroIndustry}>{heroProject.industry}</span>
            </div>
            <h3 className={styles.heroTitle}>{heroProject.name}</h3>
            <p className={styles.heroLocation}>
              <MapPin size={13} className={styles.locationIcon} />
              {heroProject.location}
            </p>
            <p className={styles.heroDesc}>{heroProject.description}</p>

            {/* Dimension & Materials specs */}
            <div className={styles.specTable}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Dimensions</span>
                <span className={styles.specValue}>
                  {heroProject.dimensions.width} × {heroProject.dimensions.height}
                </span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Materials</span>
                <span className={styles.specValue}>{heroProject.materials.join(' · ')}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Engineering</span>
                <span className={styles.specValue}>{heroProject.engineeringHighlight}</span>
              </div>
            </div>

            <Link to={`/projects/${heroProject.id}`} className={styles.heroLink}>
              View Full Case Study <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* ── Compact 3 Projects Row ── */}
        <motion.div
          className={styles.compactGrid}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
        >
          {compactProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={styles.compactCard}
              variants={fadeUp}
              custom={0.2 + idx * 0.1}
            >
              <div className={styles.compactImageWrap}>
                <img
                  src={project.imagePath.replace('.png', '.webp')}
                  alt={`${project.category} — ${project.name}`}
                  className={styles.compactImg}
                  loading="lazy"
                />
                <span className={styles.compactCategory}>{project.category}</span>
              </div>
              <div className={styles.compactBody}>
                <h4 className={styles.compactTitle}>{project.name}</h4>
                <p className={styles.compactLocation}>
                  <MapPin size={11} className={styles.locationIcon} />
                  {project.location} · {project.year}
                </p>
                <div className={styles.compactMaterials}>
                  {project.materials.slice(0, 2).map((mat, i) => (
                    <span key={i} className={styles.matChip}>
                      {mat}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className={styles.compactLink}>
                  View Project <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <div className={styles.ctaFooter}>
          <Link to="/gallery" className={styles.ctaLink}>
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
