import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import ContactCTA from '../components/sections/ContactCTA';
import OptimizedImage from '../components/ui/OptimizedImage';
import Breadcrumbs from '../components/ui/Breadcrumbs';
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
        return (
          p.category.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
        );
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
          <div className={styles.notFound}>
            <h1 className={styles.title}>Service Not Found</h1>
            <p className={styles.notFoundText}>
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
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: service.name },
          ]}
        />

        {/* Header Block */}
        <header className={styles.header}>
          <span className={styles.category}>SIGNAGE SOLUTIONS</span>
          <h1 className={styles.title}>{service.name}</h1>
          <p className={styles.positioning}>{service.positioning}</p>
        </header>

        {/* Cover Hero Image */}
        <div className={styles.imageWrapper}>
          <OptimizedImage
            src={service.heroImage}
            alt={`${service.name} fabrication details - TGB Enterprise Ahmedabad`}
            className={styles.image}
            loading="lazy"
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
            <div className={`${styles.sectionBlock} ${styles.sectionBlockBordered}`}>
              <h3 className={styles.sectionTitle}>Engineering &amp; Fabrication Standards</h3>
              <p className={`${styles.description} ${styles.descriptionCompact}`}>
                At TGB Enterprise, our manufacturing process in Nikol, Ahmedabad adheres to strict
                structural and electrical safety codes. Every {service.name} is fabricated using
                state-of-the-art computer-controlled routers (CNC) and high-precision laser
                profiling machines to ensure exact alignment with design blueprints. We utilize
                premium architectural-grade materials (such as aluminum, structural acrylics, and
                stainless steel) treated with UV-resistant coatings to prevent fading, oxidation, or
                warping under severe weather conditions.
              </p>
              <p className={`${styles.description} ${styles.descriptionCompact}`}>
                Our LED assemblies are powered by industry-leading transformers (Meanwell) and
                energy-efficient IP67 weather-sealed modules, providing consistent luminous
                intensity with no visible hot-spots. Our certified installation crew manages
                structural mounting, anchor point calculation, and grid wiring, ensuring safety
                compliance for high-rise commercial facades and local retail zones across Ahmedabad,
                Gujarat, and broader India.
              </p>
            </div>
          </div>

          {/* Right Column: Specifications, Capabilities, Pricing */}
          <div className={styles.specsCol}>
            {/* Technical Specifications */}
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Technical Specifications</span>
              <div className={styles.specRows}>
                <div className={styles.specRow}>
                  <span className={styles.specFieldLabel}>Scale Range</span>
                  <span className={styles.specFieldValue}>{service.specifications.dimensions}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specFieldLabel}>Weathering</span>
                  <span className={styles.specFieldValue}>
                    {service.specifications.weatherResistance}
                  </span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specFieldLabel}>Warranty</span>
                  <span className={styles.specFieldValue}>{service.specifications.warranty}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specFieldLabel}>Certifications</span>
                  <span className={styles.specFieldValue}>
                    {service.specifications.certifications}
                  </span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specFieldLabel}>Maintenance</span>
                  <span className={styles.specFieldValue}>
                    {service.specifications.maintenance}
                  </span>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Manufacturing Capabilities</span>

              <div className={styles.capabilitySection}>
                <span className={styles.capabilityLabel}>Materials</span>
                <div className={styles.chipGrid}>
                  {service.capabilities.materials.map((item, idx) => (
                    <span key={idx} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.capabilitySection}>
                <span className={styles.capabilityLabel}>Technology</span>
                <div className={styles.chipGrid}>
                  {service.capabilities.technology.map((item, idx) => (
                    <span key={idx} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.capabilitySection}>
                <span className={styles.capabilityLabel}>Finishes</span>
                <div className={styles.chipGrid}>
                  {service.capabilities.finishes.map((item, idx) => (
                    <span key={idx} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Served */}
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Primary Applications</span>
              <div className={styles.chipGrid}>
                {service.industriesServed.map((ind, idx) => (
                  <span key={idx} className={styles.chip}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing Estimates */}
            <div className={styles.specItem}>
              <span className={styles.priceLabel}>Estimated Pricing</span>
              <div className={styles.pricingRow}>
                <span className={styles.priceAmount}>{service.pricing.startingFrom}</span>
                <span className={styles.priceMeta}>({service.pricing.taxNote})</span>
              </div>
              <ul className={styles.priceNotes}>
                {service.pricing.customQuotationNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
              <div className={styles.quoteWrapper}>
                <Link to="/contact" className={styles.quoteButton}>
                  Request A Quotation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Work & Services Footer Section */}
        <div className={styles.relatedSection}>
          <div className={styles.relatedGrid}>
            {/* Column 1: Other Services */}
            <div>
              <h3 className={styles.relatedHeading}>Other Signage Solutions</h3>
              <ul className={styles.relatedList}>
                {otherServices.slice(0, 3).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className={styles.relatedLink}>
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Related Projects */}
            <div>
              <h3 className={styles.relatedHeading}>Completed Installations</h3>
              <ul className={styles.relatedList}>
                {(relatedProjects.length > 0 ? relatedProjects : projectsContent.items)
                  .slice(0, 2)
                  .map((p) => (
                    <li key={p.id}>
                      <Link to={`/projects/${p.id}`} className={styles.relatedLink}>
                        {p.name} ({p.category}) →
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className={styles.bottomNav}>
            <Link to="/" className={styles.bottomNavLink}>
              ← Back to Home
            </Link>
            <Link to="/gallery" className={styles.bottomNavLink}>
              Project Gallery
            </Link>
            <Link to="/services" className={styles.bottomNavLink}>
              Our Services
            </Link>
          </div>
        </div>
      </Container>
      <ContactCTA />
    </motion.div>
  );
};

export default ServiceDetail;
