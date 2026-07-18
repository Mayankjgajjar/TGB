import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import ContactCTA from '../components/sections/ContactCTA';
import OptimizedImage from '../components/ui/OptimizedImage';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { projectsContent } from '../content/projects';
import styles from './ProjectDetail.module.css';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsContent.items.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className={styles.page}>
        <Container>
          <Link to="/gallery" className={styles.backLink}>
            <ArrowLeft size={14} /> Back to Gallery
          </Link>
          <div className={styles.notFound}>
            <h1 className={styles.title}>Project Not Found</h1>
            <p className={styles.notFoundText}>
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
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Gallery', to: '/gallery' },
            { label: project.name },
          ]}
        />

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
          <OptimizedImage
            src={project.imagePath}
            alt={`${project.category} installation for ${project.name} - TGB Enterprise Ahmedabad`}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* 2-Column Split Details Grid */}
        <div className={styles.grid}>
          {/* Left Column: Rich descriptive copy */}
          <div className={styles.descriptionCol}>
            <h2 className={styles.descriptionTitle}>Project Summary</h2>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.description}>
              This installation exemplifies TGB Enterprise's dedication to architectural signage
              standards, ensuring premium brand expression and heavy-duty structural permanence.
            </p>

            {/* Dynamic Rich Content Expansion Block for SEO Word Count */}
            <div className={styles.seoBlock}>
              <h3 className={styles.seoHeading}>Engineering &amp; Quality Execution</h3>
              <p className={styles.seoText}>
                The fabrication of the {project.name} installation showcases TGB Enterprise's
                structural engineering guidelines. By selecting premium raw materials and utilizing
                precision automated tooling, our Nikol-based fabrication shop achieved seamless
                joints and high-tolerance alignment. The structural sub-frames are hot-dip
                galvanized to resist corrosion in high-humidity local climates, while the
                illuminated modules are fully weather-sealed to guarantee longevity.
              </p>
              <p className={styles.seoText}>
                During the deployment phase, our technical team executed site alignment surveys and
                wind-load calculations to ensure the signage stands robustly. This project case
                study demonstrates our capacity to translate architect-level blueprints into durable
                physical landmarks, providing Ahmedabad and Gujarat businesses with unmatched brand
                permanence.
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
        <div className={styles.bottomSection}>
          <p className={styles.bottomText}>
            Need similar custom signage engineered for your commercial space?
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/contact" className={styles.ctaPrimary}>
              Request Quote →
            </Link>
            <Link to="/services" className={styles.ctaSecondary}>
              View Services
            </Link>
            <Link to="/gallery" className={styles.ctaSecondary}>
              More Projects
            </Link>
          </div>
        </div>
      </Container>
      <ContactCTA />
    </motion.div>
  );
};

export default ProjectDetail;
