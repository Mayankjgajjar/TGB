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
import Card from '../ui/Card';
import useScrollReveal from '../../hooks/useScrollReveal';
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

export const Industries: React.FC = () => {
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
    <section ref={ref} className={styles.section} id="industries">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          variants={headerVariants}
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
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
            >
              <Card
                icon={industry.icon}
                category={industry.category}
                title={industry.title}
                description={industry.description}
                footerPill={industry.tag}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;
