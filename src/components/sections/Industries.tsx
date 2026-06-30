import React from 'react';
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
  LayoutGrid
} from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import styles from './Industries.module.css';

const industries = [
  {
    icon: ShoppingBag,
    category: 'RETAIL',
    title: 'Retail & Showrooms',
    description: 'Creating high-impact storefronts and brand experiences that attract customers and drive visibility.',
    tag: 'Retail Signage Solutions',
  },
  {
    icon: Building2,
    category: 'CORPORATE',
    title: 'Corporate Offices',
    description: 'Professional signage systems that strengthen brand identity and elevate workspaces.',
    tag: 'Corporate Signage',
  },
  {
    icon: UtensilsCrossed,
    category: 'F&B',
    title: 'Restaurants & Cafés',
    description: 'Distinctive signage solutions that enhance ambiance and create memorable customer experiences.',
    tag: 'Commercial Signage',
  },
  {
    icon: HeartPulse,
    category: 'HEALTHCARE',
    title: 'Hospitals & Healthcare',
    description: 'Wayfinding and branding solutions designed for clarity, trust, and functionality.',
    tag: 'Wayfinding Systems',
  },
  {
    icon: Hotel,
    category: 'HOSPITALITY',
    title: 'Hotels & Hospitality',
    description: 'Premium signage experiences that complement architecture and elevate guest experiences.',
    tag: 'Hospitality Signage',
  },
  {
    icon: Landmark,
    category: 'REAL ESTATE',
    title: 'Real Estate Projects',
    description: 'Large-scale branding and signage solutions for residential and commercial developments.',
    tag: 'Project Signage',
  },
  {
    icon: Factory,
    category: 'INDUSTRIAL',
    title: 'Industrial & Manufacturing',
    description: 'Durable indoor and outdoor signage solutions designed for operational environments.',
    tag: 'Industrial Signage',
  },
  {
    icon: GraduationCap,
    category: 'EDUCATION',
    title: 'Educational Institutions',
    description: 'Wayfinding and identity signage that supports learning environments and campus experiences.',
    tag: 'Campus Signage',
  },
  {
    icon: LayoutGrid,
    category: 'COMMERCIAL',
    title: 'Commercial Spaces',
    description: 'Integrated signage systems that improve navigation, branding, and visitor experience.',
    tag: 'Commercial Solutions',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_EXPO },
  },
};

export const Industries: React.FC = () => {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
        >
          <span className={styles.eyebrow}>WHO WE SERVE</span>
          <h2 className={styles.heading}>
            Signage Solutions for Every Industry.
          </h2>
          <p className={styles.subheading}>
            From retail storefronts to large commercial developments, we create signage solutions
            tailored to the unique needs of every industry we serve.
          </p>
        </motion.div>

        {/* ── Industry Cards Grid ── */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardIconWrapper}>
                  <Icon className={styles.cardIcon} strokeWidth={1.25} />
                </div>
                <span className={styles.cardCategory}>{industry.category}</span>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <p className={styles.cardDesc}>{industry.description}</p>
                <span className={styles.cardTag}>{industry.tag}</span>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
};

export default Industries;
