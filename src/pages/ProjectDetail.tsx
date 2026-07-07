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

            {/* Dynamic Rich Content Expansion Block for SEO Word Count */}
            <div style={{ marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 500, color: 'var(--color-white)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Engineering &amp; Quality Execution
              </h3>
              <p className={styles.description} style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>
                The fabrication of the {project.name} installation showcases TGB Enterprise's structural engineering guidelines. By selecting premium raw materials and utilizing precision automated tooling, our Nikol-based fabrication shop achieved seamless joints and high-tolerance alignment. The structural sub-frames are hot-dip galvanized to resist corrosion in high-humidity local climates, while the illuminated modules are fully weather-sealed to guarantee longevity.
              </p>
              <p className={styles.description} style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)' }}>
                During the deployment phase, our technical team executed site alignment surveys and wind-load calculations to ensure the signage stands robustly. This project case study demonstrates our capacity to translate architect-level blueprints into durable physical landmarks, providing Ahmedabad and Gujarat businesses with unmatched brand permanence.
              </p>
            </div>
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

        {/* Bottom Navigation CTA */}
        <div style={{ marginTop: '56px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-primary)', fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>
            Need similar custom signage engineered for your commercial space?
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/#contact" style={{ display: 'inline-flex', background: 'var(--color-copper)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', fontWeight: 600 }}>
              Request Quote →
            </Link>
            <Link to="/#services" style={{ display: 'inline-flex', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', fontWeight: 600 }}>
              View Services
            </Link>
            <Link to="/projects" style={{ display: 'inline-flex', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', fontWeight: 600 }}>
              More Projects
            </Link>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectDetail;
