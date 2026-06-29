import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Label from '../ui/Label';
import styles from './ServicesOverview.module.css';

interface HomepageServiceItem {
  slug: string;
  number: string;
  category: string;
  name: string;
  description: string;
  footerBadge: string;
  image: string;
}

const HOMEPAGE_SERVICES: HomepageServiceItem[] = [
  {
    slug: "led-sign-boards",
    number: "01",
    category: "ILLUMINATED SIGNAGE",
    name: "LED Sign Boards",
    description: "High-impact illuminated signage solutions designed to maximize visibility and create memorable brand experiences, day and night.",
    footerBadge: "Indoor & Outdoor Applications",
    image: "/assets/services/led_board.png"
  },
  {
    slug: "acp-sign-boards",
    number: "02",
    category: "EXTERIOR BRANDING",
    name: "ACP Sign Boards",
    description: "Durable and premium ACP signage systems engineered for commercial buildings, retail spaces, and corporate environments.",
    footerBadge: "Weather Resistant",
    image: "/assets/services/acp_board.png"
  },
  {
    slug: "acrylic-letters",
    number: "03",
    category: "PREMIUM LETTERING",
    name: "Acrylic & 3D Letter Signages",
    description: "Elegant dimensional signage solutions that add depth, sophistication, and a premium identity to your brand.",
    footerBadge: "Custom Fabrication",
    image: "/assets/services/acrylic_3d.png"
  },
  {
    slug: "ss-letters",
    number: "04",
    category: "CORPORATE IDENTITY",
    name: "Corporate Signages",
    description: "Professional signage systems designed to reflect your company's identity and create a lasting impression.",
    footerBadge: "Brand-Focused Solutions",
    image: "/assets/services/corporate_sign.png"
  },
  {
    slug: "neon-sign-boards",
    number: "05",
    category: "CREATIVE DISPLAY",
    name: "Neon & Custom Signages",
    description: "Distinctive and creative signage solutions tailored to your brand's personality and business requirements.",
    footerBadge: "Made to Stand Out",
    image: "/assets/services/neon_custom.png"
  },
  {
    slug: "pylon-signs",
    number: "06",
    category: "COMPLETE BRANDING",
    name: "Indoor & Outdoor Signage Systems",
    description: "Comprehensive signage solutions covering wayfinding, directional, retail, and commercial branding applications.",
    footerBadge: "End-to-End Execution",
    image: "/assets/services/indoor_outdoor.png"
  }
];

export const ServicesOverview: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className={styles.section} id="services-overview">
      <Container>
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Label showMarker style={{ marginBottom: 'var(--space-16)' }}>
            OUR EXPERTISE
          </Label>
          <h2 className={styles.mainTitle}>Signage Solutions Built to Elevate Brands.</h2>
          <p className={styles.subtitle}>
            From iconic storefronts to corporate environments, we design, manufacture, and install premium signage solutions that make businesses impossible to ignore.
          </p>
        </motion.div>

        {/* Editorial Service Grid */}
        <motion.div 
          className={styles.editorialGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {HOMEPAGE_SERVICES.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
              
              {/* Background Imagery */}
              <img src={service.image} alt={service.name} className={styles.cardImage} />
              <div className={styles.cardOverlay} />
              
              {/* Content Overlay */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <span className={styles.serviceCategory}>{service.category}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.name}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <div className={styles.cardFooterRow}>
                  <span className={styles.footerBadge}>{service.footerBadge}</span>
                  <span className={styles.viewDetails}>
                    View Details
                    <ArrowRight size={14} color="var(--color-copper)" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA Block */}
        <motion.div 
          className={styles.ctaBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <h3 className={styles.ctaHeading}>Looking for a custom signage solution?</h3>
          <p className={styles.ctaDescription}>
            Every business has unique requirements. Let's create signage that reflects your brand and leaves a lasting impression.
          </p>
          <Link to="/services" className={styles.ctaButton}>
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
