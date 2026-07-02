import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, Box, Building2, Flame, LayoutGrid, ArrowRight, X } from 'lucide-react';
import Container from '../ui/Container';
import Label from '../ui/Label';
import Card from '../ui/Card';
import useScrollReveal from '../../hooks/useScrollReveal';
import { servicesData } from '../../content/services';
import styles from './ServicesOverview.module.css';

interface HomepageServiceItem {
  slug: string;
  icon: React.ElementType;
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
    icon: Zap,
    number: "01",
    category: "ILLUMINATED SIGNAGE",
    name: "LED Sign Boards",
    description: "High-impact illuminated signage solutions designed to maximize visibility and create memorable brand experiences, day and night.",
    footerBadge: "Indoor & Outdoor Applications",
    image: "/assets/services/led_board.jpg",
  },
  {
    slug: "acp-sign-boards",
    icon: Layers,
    number: "02",
    category: "EXTERIOR BRANDING",
    name: "ACP Sign Boards",
    description: "Durable and premium ACP signage systems engineered for commercial buildings, retail spaces, and corporate environments.",
    footerBadge: "Weather Resistant",
    image: "/assets/services/acp_board.jpg",
  },
  {
    slug: "acrylic-letters",
    icon: Box,
    number: "03",
    category: "PREMIUM LETTERING",
    name: "Acrylic & 3D Letter Signages",
    description: "Elegant dimensional signage solutions that add depth, sophistication, and a premium identity to your brand.",
    footerBadge: "Custom Fabrication",
    image: "/assets/services/acrylic_3d.jpg",
  },
  {
    slug: "ss-letters",
    icon: Building2,
    number: "04",
    category: "CORPORATE IDENTITY",
    name: "Corporate Signages",
    description: "Professional signage systems designed to reflect your company's identity and create a lasting impression.",
    footerBadge: "Brand-Focused Solutions",
    image: "/assets/services/corporate_sign.jpg",
  },
  {
    slug: "neon-sign-boards",
    icon: Flame,
    number: "05",
    category: "CREATIVE DISPLAY",
    name: "Neon & Custom Signages",
    description: "Distinctive and creative signage solutions tailored to your brand's personality and business requirements.",
    footerBadge: "Made to Stand Out",
    image: "/assets/services/neon_custom.jpg",
  },
  {
    slug: "pylon-signs",
    icon: LayoutGrid,
    number: "06",
    category: "COMPLETE BRANDING",
    name: "Indoor & Outdoor Signage Systems",
    description: "Comprehensive signage solutions covering wayfinding, directional, retail, and commercial branding applications.",
    footerBadge: "End-to-End Execution",
    image: "/assets/services/indoor_outdoor.jpg",
  }
];

const getAltTextForService = (slug: string, name: string): string => {
  switch (slug) {
    case "led-sign-boards":
      return "LED sign board installation Ahmedabad by TGB Enterprise";
    case "acp-sign-boards":
      return "ACP signage fabrication TGB Enterprise in Ahmedabad";
    case "acrylic-letters":
      return "acrylic 3D letter signage Nikol Ahmedabad";
    case "ss-letters":
      return "SS 3D letter signage corporate office Ahmedabad";
    case "neon-sign-boards":
      return "neon sign board custom design Ahmedabad";
    case "pylon-signs":
      return "glow sign board and architectural pylon signs Ahmedabad";
    default:
      return `${name} - Sign Board Manufacturer in Ahmedabad`;
  }
};

export const ServicesOverview: React.FC = () => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedServiceSlug) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedServiceSlug]);

  const activeService = selectedServiceSlug ? servicesData[selectedServiceSlug] : null;

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : index * 0.08,
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} className={styles.section} id="services">
      <Container>
        {/* Section Header */}
        <motion.div 
          className={styles.headerBlock}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <span className={styles.eyebrow}>OUR EXPERTISE</span>
          <h2 className={styles.mainTitle}>Signage Solutions Built to Elevate Brands.</h2>
          <p className={styles.subtitle}>
            From iconic storefronts to corporate environments, we design, manufacture, and install premium signage solutions that make businesses impossible to ignore.
          </p>
        </motion.div>

        {/* Service Card Grid */}
        <motion.div
          className={styles.editorialGrid}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          {HOMEPAGE_SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              custom={index}
            >
              <Card
                image={service.image}
                icon={service.icon}
                category={service.category}
                title={service.name}
                description={service.description}
                footerPill={service.footerBadge}
                onClick={() => setSelectedServiceSlug(service.slug)}
                imageAlt={getAltTextForService(service.slug, service.name)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* SERVICE DETAILS MODAL */}
      <AnimatePresence>
        {activeService && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedServiceSlug(null)}
          >
            <motion.div 
              className={styles.modalWindow}
              data-lenis-prevent
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className={styles.modalCloseBtn} onClick={() => setSelectedServiceSlug(null)}>
                <X size={18} />
              </button>

              {/* Modal Hero */}
              <div className={styles.modalHero}>
                <img src={activeService.heroImage} alt={`${getAltTextForService(activeService.slug, activeService.name)} details`} className={styles.modalHeroImage} />
                <div className={styles.modalHeroOverlay} />
                <div className={styles.modalHeroContent}>
                  <span className={styles.modalSlug}>SERVICE DETAILS</span>
                  <h2 className={styles.modalTitle}>{activeService.name}</h2>
                  <p className={styles.modalPositioning}>{activeService.positioning}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className={styles.modalBody}>
                {/* Left Column */}
                <div className={styles.modalLeftCol}>
                  <div>
                    <span className={styles.modalLabel}>Overview</span>
                    <p className={styles.modalDescText}>{activeService.overview.description}</p>
                  </div>

                  <div>
                    <span className={styles.modalLabel}>Primary Applications</span>
                    <div className={styles.modalChipGrid}>
                      {activeService.industriesServed.map((ind, idx) => (
                        <span key={idx} className={styles.modalChip}>{ind}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className={styles.modalLabel}>Delivery Process</span>
                    <div className={styles.modalProcessList}>
                      {activeService.process.map((step, idx) => (
                        <div key={idx} className={styles.modalProcessItem}>
                          <span className={styles.modalProcessStep}>{step.step}</span>
                          <div className={styles.modalProcessInfo}>
                            <h4 className={styles.modalProcessTitle}>{step.title}</h4>
                            <p className={styles.modalProcessDesc}>{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className={styles.modalRightCol}>
                  <div>
                    <span className={styles.modalLabel}>Capabilities</span>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '10px', color: 'var(--color-steel)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Materials</div>
                      <div className={styles.modalChipGrid}>
                        {activeService.capabilities.materials.map((m, idx) => (
                          <span key={idx} className={styles.modalChip}>{m}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '10px', color: 'var(--color-steel)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Technology</div>
                      <div className={styles.modalChipGrid}>
                        {activeService.capabilities.technology.map((t, idx) => (
                          <span key={idx} className={styles.modalChip}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: 'var(--color-steel)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Finishes</div>
                      <div className={styles.modalChipGrid}>
                        {activeService.capabilities.finishes.map((f, idx) => (
                          <span key={idx} className={styles.modalChip}>{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className={styles.modalLabel}>Technical Specifications</span>
                    <div className={styles.modalSpecsList}>
                      <div className={styles.modalSpecRow}>
                        <span className={styles.modalSpecName}>Scale Range</span>
                        <span className={styles.modalSpecVal}>{activeService.specifications.dimensions}</span>
                      </div>
                      <div className={styles.modalSpecRow}>
                        <span className={styles.modalSpecName}>Weathering</span>
                        <span className={styles.modalSpecVal}>{activeService.specifications.weatherResistance}</span>
                      </div>
                      <div className={styles.modalSpecRow}>
                        <span className={styles.modalSpecName}>Warranty</span>
                        <span className={styles.modalSpecVal}>{activeService.specifications.warranty}</span>
                      </div>
                      <div className={styles.modalSpecRow}>
                        <span className={styles.modalSpecName}>Certifications</span>
                        <span className={styles.modalSpecVal}>{activeService.specifications.certifications}</span>
                      </div>
                      <div className={styles.modalSpecRow}>
                        <span className={styles.modalSpecName}>Maintenance</span>
                        <span className={styles.modalSpecVal}>{activeService.specifications.maintenance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesOverview;
