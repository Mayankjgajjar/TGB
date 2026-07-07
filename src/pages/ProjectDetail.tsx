import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import { projectsContent } from '../content/projects';
import styles from './ProjectDetail.module.css';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsContent.items.find(
    (item) => item.id === projectId
  );

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | TGB Enterprise – Sign Board Manufacturer in Ahmedabad`;
      const metaDesc = document.querySelector('meta[name="description"]');
      const descContent = `View details for the completed project ${project.name} in ${project.location} by TGB Enterprise, premium sign board manufacturer in Ahmedabad. Check out specs and materials.`;
      if (metaDesc) {
        metaDesc.setAttribute('content', descContent);
      }
    }
  }, [project]);

  if (!project) {
    return (
      <div className={styles.page}>
        <Container>
          <Link to="/projects" className={styles.backLink}>
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <div style={{ textAlign: 'center', padding: '96px 0', color: 'var(--color-off-white-muted)' }}>
            <h1 className={styles.title}>Project Not Found</h1>
            <p style={{ marginTop: '16px', fontFamily: 'var(--font-primary)' }}>
              The signage project you are looking for does not exist or has been moved.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  const dimensionString = `${project.dimensions.width} × ${project.dimensions.height}${project.dimensions.depth ? ` × ${project.dimensions.depth}` : ''}`;
  const materialsString = project.materials.join(', ');

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.page}
    >
      <Container>
        {/* Navigation Link back to projects archive */}
        <Link to="/projects" className={styles.backLink}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        {/* Project Header block */}
        <header className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.name}</h1>
          <div className={styles.metaRow}>
            <span>{project.location}</span>
            <span className={styles.metaDivider}>•</span>
            <span>Client: {project.client}</span>
            <span className={styles.metaDivider}>•</span>
            <span>{project.year}</span>
          </div>
        </header>

        {/* Large Image Showcase */}
        <div className={styles.imageWrapper}>
          <img 
            src={project.imagePath} 
            alt={`${project.category} installation for ${project.name} - TGB Enterprise Ahmedabad`}
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* 2-Column Split Details Grid */}
        <div className={styles.grid}>
          {/* Left Column: Rich descriptive copy */}
          <div className={styles.descriptionCol}>
            <h2 className={styles.descriptionTitle}>Project Summary</h2>
            <p className={styles.description}>
              {project.description}
            </p>
            <p className={styles.description}>
              This installation exemplifies TGB Enterprise's dedication to architectural signage standards, ensuring premium brand expression and heavy-duty structural permanence.
            </p>
          </div>

          {/* Right Column: Physical Specs and Engineering Highlights */}
          <div className={styles.specsCol}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Dimensions</span>
              <span className={styles.specValue}>{dimensionString}</span>
            </div>

            <div className={styles.specItem}>
              <span className={styles.specLabel}>Materials Used</span>
              <span className={styles.specValue}>{materialsString}</span>
            </div>

            <div className={styles.specItem}>
              <span className={styles.specLabel}>Engineering Standard</span>
              <span className={`${styles.specValue} ${styles.specHighlight}`}>
                {project.engineeringHighlight}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectDetail;
