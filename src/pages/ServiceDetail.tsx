import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import { servicesData } from '../content/services';
import styles from './ServiceDetail.module.css';

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  useEffect(() => {
    if (service) {
      document.title = service.seoMetadata.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', service.seoMetadata.description);
      }
    }
  }, [service]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className={styles.page}>
        <Container>
          <Link to="/#services" className={styles.backLink}>
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <div style={{ textAlign: 'center', padding: '96px 0', color: 'var(--color-white-muted)' }}>
            <h1 className={styles.title}>Service Not Found</h1>
            <p style={{ marginTop: '16px', fontFamily: 'var(--font-primary)' }}>
              The signage service you are looking for does not exist or has been moved.
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
        {/* Navigation Link back to homepage services */}
        <Link to="/#services" className={styles.backLink}>
          <ArrowLeft size={14} /> Back to Services
        </Link>

        {/* Header Block */}
        <header className={styles.header}>
          <span className={styles.category}>SIGNAGE SOLUTIONS</span>
          <h1 className={styles.title}>{service.name}</h1>
          <p className={styles.positioning}>{service.positioning}</p>
        </header>

        {/* Cover Hero Image */}
        <div className={styles.imageWrapper}>
          <img 
            src={service.heroImage} 
            alt={`${service.name} fabrication details - TGB Enterprise Ahmedabad`}
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* 2-Column Details Split Grid */}
        <div className={styles.grid}>
          
          {/* Left Column: Descriptions, Delivery Process, FAQs */}
          <div className={styles.descriptionCol}>
            
            {/* Overview */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Service Overview</h2>
              <p className={styles.description}>{service.overview.description}</p>
            </div>

            {/* Why It Matters */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Why It Matters</h3>
              <p className={styles.description}>{service.overview.whyItMatters}</p>
            </div>

            {/* Delivery Process */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Fabrication &amp; Delivery Process</h3>
              <div className={styles.processList}>
                {service.process.map((step, idx) => (
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
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
              <div className={styles.faqList}>
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>{faq.question}</h4>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Specifications, Capabilities, Pricing */}
          <div className={styles.specsCol}>
            
            {/* Technical Specifications */}
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Technical Specifications</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-steel)' }}>Scale Range</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-white)' }}>{service.specifications.dimensions}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-steel)' }}>Weathering</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-white)' }}>{service.specifications.weatherResistance}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-steel)' }}>Warranty</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-white)' }}>{service.specifications.warranty}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-steel)' }}>Certifications</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-white)' }}>{service.specifications.certifications}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-steel)' }}>Maintenance</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-white)' }}>{service.specifications.maintenance}</span>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Manufacturing Capabilities</span>
              
              <div style={{ marginTop: '16px' }}>
                <span style={{ fontSize: '10px', color: 'var(--color-steel)', letterSpacing: '1px', textTransform: 'uppercase' }}>Materials</span>
                <div className={styles.chipGrid} style={{ marginTop: '8px' }}>
                  {service.capabilities.materials.map((item, idx) => (
                    <span key={idx} className={styles.chip}>{item}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <span style={{ fontSize: '10px', color: 'var(--color-steel)', letterSpacing: '1px', textTransform: 'uppercase' }}>Technology</span>
                <div className={styles.chipGrid} style={{ marginTop: '8px' }}>
                  {service.capabilities.technology.map((item, idx) => (
                    <span key={idx} className={styles.chip}>{item}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <span style={{ fontSize: '10px', color: 'var(--color-steel)', letterSpacing: '1px', textTransform: 'uppercase' }}>Finishes</span>
                <div className={styles.chipGrid} style={{ marginTop: '8px' }}>
                  {service.capabilities.finishes.map((item, idx) => (
                    <span key={idx} className={styles.chip}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Served */}
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Primary Applications</span>
              <div className={styles.chipGrid} style={{ marginTop: '12px' }}>
                {service.industriesServed.map((ind, idx) => (
                  <span key={idx} className={styles.chip}>{ind}</span>
                ))}
              </div>
            </div>

            {/* Pricing Estimates */}
            <div className={styles.specItem}>
              <span className={styles.priceLabel}>Estimated Pricing</span>
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                <span className={styles.priceAmount}>{service.pricing.startingFrom}</span>
                <span style={{ fontSize: '12px', color: 'var(--color-steel)', fontFamily: 'var(--font-technical)' }}>
                  ({service.pricing.taxNote})
                </span>
              </div>
              <ul className={styles.priceNotes}>
                {service.pricing.customQuotationNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
              <div style={{ marginTop: '24px' }}>
                <Link 
                  to="/#contact" 
                  className={styles.backLink}
                  style={{
                    background: 'var(--color-red)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-primary)',
                    fontSize: '13px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    margin: 0,
                    textAlign: 'center',
                    transition: 'background var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-red-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-red)'}
                >
                  Request A Quotation
                </Link>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </motion.div>
  );
};

export default ServiceDetail;
