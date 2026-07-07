import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import { servicesData } from '../content/services';
import { projectsContent } from '../content/projects';
import styles from './ServiceDetail.module.css';

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  const otherServices = Object.values(servicesData).filter((s) => s.slug !== serviceId);
  const relatedProjects = service
    ? projectsContent.items.filter((p) => {
        const term = service.name
          .toLowerCase()
          .replace('boards', '')
          .replace('signage', '')
          .replace('signages', '')
          .replace('signs', '')
          .replace('letters', '')
          .trim();
        return p.category.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
      })
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className={styles.page}>
        <Container>
          <Link to="/services" className={styles.backLink}>
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
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontFamily: 'var(--font-technical)', fontSize: '0.6875rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <Link to="/services" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Services</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>{service.name}</span>
        </nav>

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

            {/* Dynamic Rich Content Expansion Block for SEO Word Count */}
            <div className={styles.sectionBlock} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', marginTop: '32px' }}>
              <h3 className={styles.sectionTitle}>Engineering &amp; Fabrication Standards</h3>
              <p className={styles.description} style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>
                At TGB Enterprise, our manufacturing process in Nikol, Ahmedabad adheres to strict structural and electrical safety codes. Every {service.name} is fabricated using state-of-the-art computer-controlled routers (CNC) and high-precision laser profiling machines to ensure exact alignment with design blueprints. We utilize premium architectural-grade materials (such as aluminum, structural acrylics, and stainless steel) treated with UV-resistant coatings to prevent fading, oxidation, or warping under severe weather conditions.
              </p>
              <p className={styles.description} style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)' }}>
                Our LED assemblies are powered by industry-leading transformers (Meanwell) and energy-efficient IP67 weather-sealed modules, providing consistent luminous intensity with no visible hot-spots. Our certified installation crew manages structural mounting, anchor point calculation, and grid wiring, ensuring safety compliance for high-rise commercial facades and local retail zones across Ahmedabad, Gujarat, and broader India.
              </p>
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
                  to="/contact" 
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

        {/* Related Work & Services Footer Section */}
        <div style={{ marginTop: '72px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            
            {/* Column 1: Other Services */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--color-off-white)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Other Signage Solutions
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {otherServices.slice(0, 3).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} style={{ color: 'var(--color-copper)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)' }}>
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Related Projects */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--color-off-white)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Completed Installations
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(relatedProjects.length > 0 ? relatedProjects : projectsContent.items).slice(0, 2).map((p) => (
                  <li key={p.id}>
                    <Link to={`/projects/${p.id}`} style={{ color: 'var(--color-copper)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-primary)' }}>
                      {p.name} ({p.category}) →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          <div style={{ marginTop: '48px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>← Back to Home</Link>
            <Link to="/projects" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>All Projects Portfolio</Link>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Our Services</Link>
          </div>
        </div>

      </Container>
    </motion.div>
  );
};

export default ServiceDetail;
