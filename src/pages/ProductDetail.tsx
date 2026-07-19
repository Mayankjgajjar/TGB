import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Download,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import ContactCTA from '../components/sections/ContactCTA';
import OptimizedImage from '../components/ui/OptimizedImage';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { productsData, ProductDetail as IProductDetail } from '../content/products';
import { projectsContent } from '../content/projects';
import { useQuoteModal } from '../context/QuoteContext';
import styles from './ServiceDetail.module.css';

export const ProductDetail: React.FC = () => {
  const { slug, serviceId } = useParams<{ slug?: string; serviceId?: string }>();
  const { openModal } = useQuoteModal();

  const productSlug = slug || serviceId || '';
  const product: IProductDetail | null = productsData[productSlug] || null;

  // Cross-linked Related Products
  const relatedProducts: IProductDetail[] = product
    ? product.relatedProductSlugs
        .map((s) => productsData[s])
        .filter((p): p is IProductDetail => Boolean(p))
    : [];

  // Cross-linked Related Projects
  const relatedProjects = product
    ? projectsContent.items.filter(
        (proj) =>
          proj.relatedProductSlugs.includes(product.slug) ||
          product.relatedProjectIds.includes(proj.id) ||
          proj.category.toLowerCase().includes(product.name.toLowerCase().split(' ')[0]),
      )
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug]);

  if (!product) {
    return (
      <div className={styles.page} style={{ paddingTop: '140px' }}>
        <Container>
          <Link to="/products" className={styles.backLink}>
            <ArrowLeft size={14} /> Back to Products Catalogue
          </Link>
          <div className={styles.notFound}>
            <h1 className={styles.title}>Product Not Found</h1>
            <p className={styles.notFoundText}>
              The product you are looking for does not exist or has been updated in our catalog.
            </p>
          </div>
        </Container>
      </div>
    );
  }

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
            { label: 'Products', to: '/products' },
            { label: product.name },
          ]}
        />

        {/* Header Block */}
        <header className={styles.header}>
          <span className={styles.category}>{product.category.toUpperCase()}</span>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.positioning}>{product.positioning}</p>
        </header>

        {/* Cover Hero Image */}
        <div className={styles.imageWrapper}>
          <OptimizedImage
            src={product.heroImage}
            alt={`${product.name} fabrication - TGB Enterprise Ahmedabad`}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* 2-Column Details Split Grid */}
        <div className={styles.grid}>
          {/* Left Column: Overview, Capabilities, Process, FAQs */}
          <div className={styles.descriptionCol}>
            {/* Overview */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Product Overview</h2>
              <p className={styles.description}>{product.overview.description}</p>
            </div>

            {/* Why It Matters */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Why It Matters</h3>
              <p className={styles.description}>{product.overview.whyItMatters}</p>
            </div>

            {/* Applications & Who It Is For */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Applications &amp; Suitable Environments</h3>
              <p className={styles.description}>{product.overview.whoItIsFor}</p>
            </div>

            {/* Fabrication Process */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Engineering &amp; Fabrication Process</h3>
              <div className={styles.processList}>
                {product.process.map((step, idx) => (
                  <div key={idx} className={styles.processItem}>
                    <span className={styles.processStep}>{step.step}</span>
                    <div className={styles.processInfo}>
                      <h4 className={styles.processTitle}>{step.title}</h4>
                      <p className={styles.processDesc}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            {product.faqs && product.faqs.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
                <div className={styles.faqList}>
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className={styles.faqItem}>
                      <h4 className={styles.faqQuestion}>{faq.question}</h4>
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Column: Specifications, Materials, Pricing & CTA */}
          <div className={styles.sidebarCol}>
            <div className={styles.specsCard}>
              <h3 className={styles.specsTitle}>Technical Specifications</h3>
              <ul className={styles.specsList}>
                <li className={styles.specItem}>
                  <span className={styles.specLabel}>Dimensions:</span>
                  <span className={styles.specValue}>{product.specifications.dimensions}</span>
                </li>
                <li className={styles.specItem}>
                  <span className={styles.specLabel}>Weather Resistance:</span>
                  <span className={styles.specValue}>
                    {product.specifications.weatherResistance}
                  </span>
                </li>
                <li className={styles.specItem}>
                  <span className={styles.specLabel}>Warranty:</span>
                  <span className={styles.specValue}>{product.specifications.warranty}</span>
                </li>
                <li className={styles.specItem}>
                  <span className={styles.specLabel}>Certifications:</span>
                  <span className={styles.specValue}>{product.specifications.certifications}</span>
                </li>
                <li className={styles.specItem}>
                  <span className={styles.specLabel}>Maintenance:</span>
                  <span className={styles.specValue}>{product.specifications.maintenance}</span>
                </li>
              </ul>

              <h4
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '20px 0 10px',
                  color: 'var(--color-secondary)',
                }}
              >
                Materials &amp; Finishes
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {product.capabilities.materials.map((mat, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      padding: '4px 8px',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {mat}
                  </span>
                ))}
              </div>

              <div className={styles.priceBlock}>
                <span className={styles.priceLabel}>Baseline Pricing:</span>
                <div className={styles.priceValue}>{product.pricing.startingFrom}</div>
                <p className={styles.taxNote}>{product.pricing.taxNote}</p>
              </div>

              <button
                onClick={openModal}
                className={styles.ctaButton}
                style={{ marginTop: '16px', width: '100%' }}
              >
                Request Custom Quote
                <ArrowRight size={14} style={{ marginLeft: '8px' }} />
              </button>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-outline-variant)',
                }}
              >
                <Link
                  to="/resources"
                  style={{
                    fontSize: '12px',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Download size={14} /> Download Technical Data &amp; Guides ➔
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bi-Directional Cross-Linking Section 1: Related Projects in Portfolio */}
        {relatedProjects.length > 0 && (
          <div
            style={{
              marginTop: '80px',
              paddingTop: '40px',
              borderTop: '1px solid var(--color-outline-variant)',
            }}
          >
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '24px' }}>
              Completed Projects Using {product.name}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {relatedProjects.map((proj) => (
                <Link
                  key={proj.id}
                  to={`/projects/${proj.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'var(--color-surface-container-low)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'block',
                  }}
                >
                  <img
                    src={proj.imagePath}
                    alt={proj.name}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '16px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-technical)',
                        letterSpacing: '1px',
                      }}
                    >
                      {proj.category}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', margin: '4px 0 8px', fontWeight: 600 }}>
                      {proj.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                      {proj.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bi-Directional Cross-Linking Section 2: Related Products */}
        {relatedProducts.length > 0 && (
          <div
            style={{
              marginTop: '60px',
              paddingTop: '40px',
              borderTop: '1px solid var(--color-outline-variant)',
            }}
          >
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '24px' }}>
              Related Product Categories
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/products/${rel.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    padding: '20px',
                    background: 'var(--color-surface-container-high)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '10px',
                        color: 'var(--color-secondary)',
                        fontFamily: 'var(--font-technical)',
                      }}
                    >
                      {rel.category}
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, margin: '6px 0 12px' }}>
                      {rel.name}
                    </h4>
                  </div>
                  <span
                    style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}
                  >
                    View Product ➔
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default ProductDetail;
