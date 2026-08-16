import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  HeartPulse,
  Hotel,
  Landmark,
  Factory,
  GraduationCap,
  LayoutGrid,
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Industries.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';
import Container from '../ui/Container';
import { ICON_MAP } from '../../content/about';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    category: 'RETAIL',
    title: 'Retail & Showrooms',
    description:
      'High-impact storefronts and brand experiences that attract customers and drive visibility.',
  },
  {
    icon: Building2,
    category: 'CORPORATE',
    title: 'Corporate Offices',
    description:
      'Professional signage systems that strengthen brand identity and elevate workspaces.',
  },
  {
    icon: UtensilsCrossed,
    category: 'F&B',
    title: 'Restaurants & Cafés',
    description:
      'Distinctive signage that enhances ambiance and creates memorable customer experiences.',
  },
  {
    icon: HeartPulse,
    category: 'HEALTHCARE',
    title: 'Hospitals & Healthcare',
    description:
      'Wayfinding and branding solutions designed for clarity, trust, and functionality.',
  },
  {
    icon: Hotel,
    category: 'HOSPITALITY',
    title: 'Hotels & Hospitality',
    description: 'Premium signage that complements architecture and elevates the guest experience.',
  },
  {
    icon: Landmark,
    category: 'REAL ESTATE',
    title: 'Real Estate Projects',
    description:
      'Large-scale branding and signage solutions for residential and commercial developments.',
  },
  {
    icon: Factory,
    category: 'INDUSTRIAL',
    title: 'Industrial & Manufacturing',
    description: 'Durable indoor and outdoor signage solutions for operational environments.',
  },
  {
    icon: GraduationCap,
    category: 'EDUCATION',
    title: 'Educational Institutions',
    description:
      'Wayfinding and identity signage for learning environments and campus experiences.',
  },
  {
    icon: LayoutGrid,
    category: 'COMMERCIAL',
    title: 'Commercial Complexes',
    description:
      'Integrated signage systems that improve navigation, branding, and visitor experience.',
  },
];

interface IndustriesProps {
  title?: string;
  subtitle?: string;
  items?: {
    icon: any;
    category: string;
    title: string;
    description: string;
  }[];
  asDiv?: boolean;
}

export const Industries: React.FC<IndustriesProps> = ({
  title,
  subtitle,
  items,
  asDiv = false,
}) => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const activeTitle = title || 'Signage Solutions for Every Industry.';
  const activeItems = items || industries;

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const content = (
    <Container>
      <motion.div
        className={styles.layout}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
      >
        {/* Left column: headline + positioning line + CTA */}
        <motion.div className={styles.leftCol} variants={headerVariants}>
          <SectionEyebrow>WHO WE SERVE</SectionEyebrow>
          <h2 className={styles.heading}>{activeTitle}</h2>
          <p className={styles.positioning}>
            {subtitle ||
              'From retail storefronts to corporate towers — we fabricate for the full range of commercial environments across Ahmedabad and India.'}
          </p>
          <Link to="/contact" className={styles.ctaLink}>
            Discuss Your Project <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Right column: compact industry list */}
        <motion.div
          className={styles.rightCol}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
          }}
        >
          {activeItems.map((industry, index) => {
            const Icon =
              typeof industry.icon === 'string'
                ? ICON_MAP[industry.icon] || LayoutGrid
                : industry.icon;
            const isExpanded = expandedIdx === index;

            return (
              <motion.button
                key={index}
                className={`${styles.industryRow} ${isExpanded ? styles.industryRowExpanded : ''}`}
                onClick={() => setExpandedIdx(isExpanded ? null : index)}
                aria-expanded={isExpanded}
                variants={{
                  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -8 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <div className={styles.industryMain}>
                  <div className={styles.industryIcon}>
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className={styles.industryInfo}>
                    <span className={styles.industryCat}>{industry.category}</span>
                    <span className={styles.industryName}>{industry.title}</span>
                  </div>
                  <span className={styles.industryChevron} aria-hidden="true">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
                <div
                  className={`${styles.industryDesc} ${isExpanded ? styles.industryDescOpen : ''}`}
                  aria-hidden={!isExpanded}
                >
                  {industry.description}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );

  if (asDiv) {
    return (
      <div ref={ref} id="industries" className="sectionAnchor">
        {content}
      </div>
    );
  }

  return (
    <section ref={ref} className={styles.section} id="industries">
      {content}
    </section>
  );
};

export default Industries;
