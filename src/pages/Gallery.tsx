import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import OptimizedImage from '../components/ui/OptimizedImage';
import ContactCTA from '../components/sections/ContactCTA';
import useScrollReveal from '../hooks/useScrollReveal';
import { galleryContent } from '../content/gallery';
import { projectsContent, ProjectDetails } from '../content/projects';
import { productsData } from '../content/products';
import servicesOverviewStyles from '../components/sections/ServicesOverview.module.css';
import styles from './Gallery.module.css';
import { Filter, ArrowRight } from 'lucide-react';
import FAQ from '../components/sections/FAQ';

export const Gallery: React.FC = () => {
  const { hero, faq } = galleryContent;
  const projects: ProjectDetails[] = projectsContent.items;

  // Faceted Filtering State
  const [filterType, setFilterType] = useState<string>('All');
  const [selectedProductType, setSelectedProductType] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

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
      className="page"
    >
      {/* ── Gallery Introduction ── */}
      <div className={styles.page} style={{ paddingTop: '140px' }}>
        <Container>
          <div className={servicesOverviewStyles.headerBlock}>
            <SectionEyebrow>PROJECT PORTFOLIO &amp; WORKS</SectionEyebrow>
            <h1 className={servicesOverviewStyles.mainTitle}>
              Identity Landmarks &amp; Installations
            </h1>
            <p className={servicesOverviewStyles.subtitle}>
              Browse our portfolio of engineered signage installations, facade cladding projects,
              and custom metalwork executed across India.
            </p>

            {/* Faceted Filter Bar */}
            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <div
                style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-technical)',
                    color: 'var(--color-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Filter size={12} /> Product Type:
                </span>
                {productTypesList.map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setSelectedProductType(pt)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      border: '1px solid var(--color-outline-variant)',
                      background:
                        selectedProductType === pt
                          ? 'var(--color-primary-container)'
                          : 'var(--color-surface-container-high)',
                      color:
                        selectedProductType === pt
                          ? 'var(--color-on-primary)'
                          : 'var(--color-on-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    {pt}
                  </button>
                ))}
              </div>

              <div
                style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-technical)',
                    color: 'var(--color-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Filter size={12} /> Industry:
                </span>
                {industriesList.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      border: '1px solid var(--color-outline-variant)',
                      background:
                        selectedIndustry === ind
                          ? 'var(--color-primary-container)'
                          : 'var(--color-surface-container-high)',
                      color:
                        selectedIndustry === ind
                          ? 'var(--color-on-primary)'
                          : 'var(--color-on-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Featured Projects Portfolio Cards ── */}
          <div style={{ marginTop: '40px' }}>
            <Grid cols={2} gap="normal">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={styles.featuredCard}
                  style={{
                    background: 'var(--color-surface-container-low)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-outline-variant)',
                    position: 'relative',
                  }}
                >
                  <Link to={`/projects/${proj.id}`}>
                    <OptimizedImage
                      src={proj.imagePath}
                      alt={proj.name}
                      className={styles.featuredCardImage}
                      loading="lazy"
                    />
                  </Link>
                  <div style={{ padding: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      <span className={styles.featuredCardCategory}>{proj.category}</span>
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'var(--color-secondary)',
                          fontFamily: 'var(--font-technical)',
                        }}
                      >
                        {proj.location} • {proj.year}
                      </span>
                    </div>

                    <Link
                      to={`/projects/${proj.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <h3
                        className={styles.featuredCardTitle}
                        style={{ fontSize: '1.4rem', fontWeight: 600, margin: '4px 0 12px' }}
                      >
                        {proj.name}
                      </h3>
                    </Link>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-secondary)',
                        lineHeight: 1.5,
                        marginBottom: '16px',
                      }}
                    >
                      {proj.description}
                    </p>

                    {/* Bi-Directional Cross-Linking: Related Products Used */}
                    <div
                      style={{
                        paddingTop: '12px',
                        borderTop: '1px dashed var(--color-outline-variant)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '6px',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '10px',
                            color: 'var(--color-secondary)',
                            textTransform: 'uppercase',
                            fontFamily: 'var(--font-technical)',
                          }}
                        >
                          Products Used:
                        </span>
                        {proj.relatedProductSlugs.map((slug) => {
                          const prod = productsData[slug];
                          return (
                            <Link
                              key={slug}
                              to={`/products/${slug}`}
                              style={{
                                fontSize: '11px',
                                padding: '2px 8px',
                                background: 'rgba(227, 27, 35, 0.1)',
                                color: 'var(--color-primary)',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: 500,
                              }}
                            >
                              {prod ? prod.name : slug}
                            </Link>
                          );
                        })}
                      </div>

                      <Link
                        to={`/projects/${proj.id}`}
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'var(--color-on-surface)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        View Case Study <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </div>

      {/* ── Browse by Product Category ── */}
      <Section spacing="large">
        <Container>
          <div className={servicesOverviewStyles.headerBlock}>
            <SectionEyebrow>BROWSE BY PRODUCT</SectionEyebrow>
            <h2 className={servicesOverviewStyles.mainTitle}>
              Explore Manufacturing Product Lines
            </h2>
            <p className={servicesOverviewStyles.subtitle}>
              Each product represents a dedicated fabrication line in our Vatva facility with
              certified material specifications.
            </p>
          </div>

          <Grid cols={3} gap="normal">
            {Object.values(productsData)
              .slice(0, 6)
              .map((prod) => (
                <Card
                  key={prod.slug}
                  category={prod.category}
                  title={prod.name}
                  description={prod.shortDescription}
                  footerPill="View Product Details ➔"
                  to={`/products/${prod.slug}`}
                />
              ))}
          </Grid>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ title={faq.title} subtitle={faq.subtitle} items={faq.items} />

      {/* Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Gallery;
