import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ContactCTA from '../components/sections/ContactCTA';
import FAQ from '../components/sections/FAQ';
import { projectsContent, ProjectDetails } from '../content/projects';
import styles from './Gallery.module.css';

export const Gallery: React.FC = () => {
  const projects: ProjectDetails[] = projectsContent.items;

  // Faceted Filtering State
  const [selectedProductType, setSelectedProductType] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((p) => {
    if (selectedProductType !== 'All' && p.productType !== selectedProductType) return false;
    if (selectedIndustry !== 'All' && p.industry !== selectedIndustry) return false;
    return true;
  });

  const productTypesList = ['All', ...Array.from(new Set(projects.map((p) => p.productType)))];
  const industriesList = ['All', ...Array.from(new Set(projects.map((p) => p.industry)))];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.page}
    >
      {/* 1. Page Header & Filter Controls */}
      <section className={styles.heroSection}>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Project Portfolio' }]} />

          <div className={styles.heroContent}>
            <SectionEyebrow>PROJECT PORTFOLIO &amp; WORKS</SectionEyebrow>
            <h1 className={styles.heroTitle}>Architectural Landmarks &amp; Custom Installations</h1>
            <p className={styles.heroDesc}>
              Explore our portfolio of engineered signage installations, ACP facade cladding, 3D
              metal letters, and neon displays manufactured and installed across India.
            </p>
          </div>

          {/* Faceted Filter Pills */}
          <div className={styles.filterBarWrapper}>
            {/* Product Type Filter */}
            <div className={styles.filterRow}>
              <span className={styles.filterLabel}>
                <Filter size={12} /> Signage Type:
              </span>
              {productTypesList.map((pt) => (
                <button
                  key={pt}
                  onClick={() => setSelectedProductType(pt)}
                  className={`${styles.filterPill} ${selectedProductType === pt ? styles.filterPillActive : ''}`}
                >
                  {pt}
                </button>
              ))}
            </div>

            {/* Industry Filter */}
            <div className={styles.filterRow}>
              <span className={styles.filterLabel}>
                <Filter size={12} /> Industry:
              </span>
              {industriesList.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`${styles.filterPill} ${selectedIndustry === ind ? styles.filterPillActive : ''}`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Projects Showcase Grid */}
      <section className={styles.projectsSection}>
        <Container>
          <span className={styles.countLabel}>
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {selectedProductType !== 'All' && ` for "${selectedProductType}"`}
            {selectedIndustry !== 'All' && ` in "${selectedIndustry}"`}
          </span>

          <div className={styles.grid}>
            {filteredProjects.map((proj) => (
              <Link key={proj.id} to={`/projects/${proj.id}`} className={styles.projectCard}>
                <div className={styles.imageWrapper}>
                  <span className={styles.categoryBadge}>{proj.category}</span>
                  <img
                    src={proj.imagePath}
                    alt={`${proj.name} - ${proj.location}`}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{proj.name}</h3>
                  <div className={styles.locationMeta}>
                    {proj.location} • {proj.year}
                  </div>
                  <p className={styles.cardDesc}>{proj.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.scopeTag}>
                      {proj.materials?.[0] || proj.productType}
                    </span>
                    <span className={styles.viewLink}>
                      Case Study <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Project FAQs */}
      <FAQ
        title="Project Execution & Delivery FAQs"
        subtitle="Answers to common client questions regarding site surveying, fabrication lead times, installation logistics, and structural safety."
      />

      {/* 4. Consultation CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Gallery;
