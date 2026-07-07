import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, Box, Building2, Flame, LayoutGrid, ArrowRight, X } from 'lucide-react';
import Container from '../ui/Container';
import Label from '../ui/Label';
import Card from '../ui/Card';
import useScrollReveal from '../../hooks/useScrollReveal';
import { servicesData } from '../../content/services';
import styles from './ServicesOverview.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';

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
    slug: 'led-sign-boards',
    icon: Zap,
    number: '01',
    category: 'ILLUMINATED SIGNAGE',
    name: 'LED Sign Boards',
    description:
      'High-impact illuminated signage solutions designed to maximize visibility and create memorable brand experiences, day and night.',
    footerBadge: 'Indoor & Outdoor Applications',
    image: '/assets/services/led-sign.png',
  },
  {
    slug: 'acp-sign-boards',
    icon: Layers,
    number: '02',
    category: 'EXTERIOR BRANDING',
    name: 'ACP Sign Boards',
    description:
      'Durable and premium ACP signage systems engineered for commercial buildings, retail spaces, and corporate environments.',
    footerBadge: 'Weather Resistant',
    image: '/assets/services/acp-sign.png',
  },
  {
    slug: 'acrylic-letters',
    icon: Box,
    number: '03',
    category: 'PREMIUM LETTERING',
    name: 'Acrylic & 3D Letter Signages',
    description:
      'Elegant dimensional signage solutions that add depth, sophistication, and a premium identity to your brand.',
    footerBadge: 'Custom Fabrication',
    image: '/assets/services/acrylic-letters.png',
  },
  {
    slug: 'ss-letters',
    icon: Building2,
    number: '04',
    category: 'CORPORATE IDENTITY',
    name: 'Corporate Signages',
    description:
      "Professional signage systems designed to reflect your company's identity and create a lasting impression.",
    footerBadge: 'Brand-Focused Solutions',
    image: '/assets/services/ss-letters.png',
  },
  {
    slug: 'neon-sign-boards',
    icon: Flame,
    number: '05',
    category: 'CREATIVE DISPLAY',
    name: 'Neon & Custom Signages',
    description:
      "Distinctive and creative signage solutions tailored to your brand's personality and business requirements.",
    footerBadge: 'Made to Stand Out',
    image: '/assets/services/neon-sign.png',
  },
  {
    slug: 'pylon-signs',
    icon: LayoutGrid,
    number: '06',
    category: 'COMPLETE BRANDING',
    name: 'Indoor & Outdoor Signage Systems',
    description:
      'Comprehensive signage solutions covering wayfinding, directional, retail, and commercial branding applications.',
    footerBadge: 'End-to-End Execution',
    image: '/assets/services/pylon-sign.png',
  },
];

const getAltTextForService = (slug: string, name: string): string => {
  switch (slug) {
    case 'led-sign-boards':
      return 'LED sign board installation Ahmedabad by TGB Enterprise';
    case 'acp-sign-boards':
      return 'ACP signage fabrication TGB Enterprise in Ahmedabad';
    case 'acrylic-letters':
      return 'acrylic 3D letter signage Nikol Ahmedabad';
    case 'ss-letters':
      return 'SS 3D letter signage corporate office Ahmedabad';
    case 'neon-sign-boards':
      return 'neon sign board custom design Ahmedabad';
    case 'pylon-signs':
      return 'glow sign board and architectural pylon signs Ahmedabad';
    default:
      return `${name} - Sign Board Manufacturer in Ahmedabad`;
  }
};

export const ServicesOverview: React.FC<{
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  introParagraph?: string;
  breadcrumbs?: { label: string; to?: string }[];
}> = ({ eyebrow, title, subtitle, introParagraph, breadcrumbs }) => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

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
    <section ref={ref} className={styles.section}>
      <Container>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          {breadcrumbs && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '24px',
                fontFamily: 'var(--font-technical)',
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-steel)',
              }}
            >
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span style={{ opacity: 0.4 }}>›</span>}
                  {crumb.to ? (
                    <Link to={crumb.to} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: 'var(--color-off-white)' }}>{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          <SectionEyebrow>{eyebrow || 'OUR EXPERTISE'}</SectionEyebrow>
          <h2 className={styles.mainTitle}>
            {title || 'Signage Solutions Built to Elevate Brands.'}
          </h2>
          <p className={styles.subtitle}>
            {subtitle ||
              'From iconic storefronts to corporate environments, we design, manufacture, and install premium signage solutions that make businesses impossible to ignore.'}
          </p>
          {introParagraph && (
            <p
              className={styles.introParagraph}
              style={{
                maxWidth: '800px',
                margin: '24px auto 0 auto',
                fontSize: '15px',
                lineHeight: '1.75',
                color: 'rgba(255, 255, 255, 0.65)',
                textAlign: 'center',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {introParagraph}
            </p>
          )}
        </motion.div>

        {/* Service Card Grid */}
        <motion.div
          className={styles.editorialGrid}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
        >
          {HOMEPAGE_SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              className={styles.cardWrapper}
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
                to={`/services/${service.slug}`}
                imageAlt={getAltTextForService(service.slug, service.name)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
