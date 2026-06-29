import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { servicesData } from '../content/services';
import Container from '../components/ui/Container';
import Label from '../components/ui/Label';
import styles from './ServiceDetail.module.css';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      className={styles.pageWrapper}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <img src={service.heroImage} alt={service.name} className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.serviceLabel}>SERVICE DETAIL — {service.slug.replace(/-/g, ' ')}</span>
            <h1 className={styles.heroTitle}>{service.name}</h1>
            <p className={styles.heroPositioning}>{service.positioning}</p>
          </div>
        </Container>
      </section>

      {/* Overview & Applications */}
      <section className={styles.section}>
        <Container>
          <div className={styles.overviewBlock}>
            <p className={styles.overviewText}>{service.overview.description}</p>
            
            <div style={{ marginTop: '64px' }}>
              <Label showMarker style={{ marginBottom: 'var(--space-16)' }}>PRIMARY APPLICATIONS</Label>
              <div className={styles.chipContainer}>
                {service.industriesServed.map((industry, i) => (
                  <div key={i} className={styles.chip}>{industry}</div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Materials & Finishes (Visual Swatches) */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <Label showMarker style={{ marginBottom: 'var(--space-16)' }}>MATERIALS & FINISHES</Label>
            <h2 className={styles.sectionTitle}>Physical Craftsmanship.</h2>
          </div>
          
          <div className={styles.swatchGrid}>
            {service.capabilities.materials.map((m, i) => (
              <div key={`m-${i}`} className={styles.swatchCard}>
                <span className={styles.swatchCategory}>MATERIAL</span>
                <span className={styles.swatchLabel}>{m}</span>
              </div>
            ))}
            {service.capabilities.finishes.map((f, i) => (
              <div key={`f-${i}`} className={styles.swatchCard}>
                <span className={styles.swatchCategory}>FINISH</span>
                <span className={styles.swatchLabel}>{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specification Cards & Pricing */}
      <section className={styles.section}>
        <Container>
          <div style={{ marginBottom: '120px' }}>
            <Label showMarker style={{ marginBottom: 'var(--space-32)' }}>TECHNICAL SPECIFICATIONS</Label>
            <div className={styles.specsGrid}>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Dimensions</span>
                <p className={styles.specValue}>{service.specifications.dimensions}</p>
              </div>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Durability</span>
                <p className={styles.specValue}>{service.specifications.weatherResistance}</p>
              </div>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Warranty</span>
                <p className={styles.specValue}>{service.specifications.warranty}</p>
              </div>
            </div>
          </div>

          <div>
            <Label showMarker style={{ marginBottom: 'var(--space-32)' }}>INVESTMENT PROFILE</Label>
            <div className={styles.pricingBlock}>
              <div>
                <span className={styles.specLabel}>Starting From</span>
                <div className={styles.pricingPrice}>{service.pricing.startingFrom}</div>
              </div>
              <div>
                <span className={styles.specLabel}>Custom Quotation Based On:</span>
                <ul className={styles.pricingList}>
                  {service.pricing.customQuotationNotes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Horizontal Process Timeline */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <Label showMarker style={{ marginBottom: 'var(--space-16)' }}>WORKFLOW</Label>
            <h2 className={styles.sectionTitle}>The Execution Standard.</h2>
          </div>
          
          <div className={styles.processTimeline}>
            {service.process.map((p, i) => (
              <div key={i} className={styles.processCard}>
                <span className={styles.processNumber}>{p.step}</span>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Projects Gallery */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <Label showMarker style={{ marginBottom: 'var(--space-16)' }}>INSTALLATIONS</Label>
            <h2 className={styles.sectionTitle}>Projects Using This Service.</h2>
          </div>
          
          <div className={styles.galleryMasonry}>
            {service.gallery.map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <img src={img} alt={`${service.name} project`} className={styles.galleryImage} />
                {/* Temporary caption overlay for project linking context */}
                <div style={{ position: 'absolute', bottom: '32px', left: '32px', zIndex: 10 }}>
                  <span style={{ fontFamily: 'var(--font-technical)', fontSize: '11px', color: 'var(--color-copper)', letterSpacing: '2px' }}>
                    FEATURED INSTALLATION
                  </span>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 40%)', zIndex: 1 }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Massive Editorial CTA */}
      <section className={styles.ctaSection}>
        <Container>
          <h2 className={styles.ctaTitle}>Let's Build Something Exceptional.</h2>
          <Link to="/contact">
            <button className={styles.ctaButton}>
              Request Consultation
              <ArrowRight size={16} />
            </button>
          </Link>
        </Container>
      </section>

    </motion.div>
  );
};

export default ServiceDetail;
