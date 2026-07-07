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
import SectionEyebrow from '../ui/SectionEyebrow';

const industries = [
  {
    icon: ShoppingBag,
    category: 'RETAIL',
    title: 'Retail & Showrooms',
    description: 'We design and fabricate high-impact storefront signboards, halo-lit LED acrylic letters, and premium ACP facade claddings. Our retail installations are engineered to capture street-level foot traffic, establish brand presence, and deliver visibility under local weather conditions.',
    tag: 'Retail Signage Solutions',
  },
  {
    icon: Building2,
    category: 'CORPORATE',
    title: 'Corporate Offices',
    description: 'Elevate your corporate workspace with custom reception signs, frosted glass manifestations, architectural lobby markers, and directional plaques. We produce metal SS gold and mirror-finish signs that convey stability and align with corporate identity standards.',
    tag: 'Corporate Signage',
  },
  {
    icon: UtensilsCrossed,
    category: 'F&B',
    title: 'Restaurants & Cafés',
    description: 'Bespoke exterior sign boards, retro-style flexible silicone LED neon accents, and rustic wood-metal combination signage. We build distinctive branding systems that enhance interior dining ambiance, improve curb appeal, and attract diners.',
    tag: 'Commercial Signage',
  },
  {
    icon: HeartPulse,
    category: 'HEALTHCARE',
    title: 'Hospitals & Healthcare',
    description: 'Clear, high-visibility indoor wayfinding systems, emergency direction pylons, floor directories, and room plaques. Engineered with clean materials and anti-glare surfaces, our signage assists patient flow and meets local fire-safety guidelines.',
    tag: 'Wayfinding Systems',
  },
  {
    icon: Hotel,
    category: 'HOSPITALITY',
    title: 'Hotels & Hospitality',
    description: 'Luxury hotel exterior identity pylons, edge-lit glass markers, guestroom door numbering, and elevator lobby directory signage. We utilize premium materials like brass, titanium-plated stainless steel, and cast acrylic to complement five-star design themes.',
    tag: 'Hospitality Signage',
  },
  {
    icon: Landmark,
    category: 'REAL ESTATE',
    title: 'Real Estate Projects',
    description: 'Large-scale construction site hoardings, main entrance gate letters, commercial complex pylons, and residential building wings maps. We engineer signs designed to withstand severe wind loads and project developer stature.',
    tag: 'Project Signage',
  },
  {
    icon: Factory,
    category: 'INDUSTRIAL',
    title: 'Industrial & Manufacturing',
    description: 'Durable outdoor main-gate company signs, high-contrast hazard safety panels, overhead gantry boards, and internal production bay guides. Constructed to resist heavy dust, moisture, vibration, and thermal expansion.',
    tag: 'Industrial Signage',
  },
  {
    icon: GraduationCap,
    category: 'EDUCATION',
    title: 'Educational Institutions',
    description: 'Campus entrance monuments, building wings markers, multi-level directories, auditorium stage logos, and classroom placards. Our layouts focus on legibility and safety, helping students, faculty, and visitors navigate campuses.',
    tag: 'Campus Signage',
  },
  {
    icon: LayoutGrid,
    category: 'COMMERCIAL',
    title: 'Commercial Spaces',
    description: 'Integrated shopping mall directions, multi-tenant directory boards, basement parking exit signs, and exterior advertising lightboxes. We build structural layouts that coordinate navigation, branding, and safety regulations.',
    tag: 'Commercial Signage',
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
          <SectionEyebrow>WHO WE SERVE</SectionEyebrow>
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
              className={styles.cardWrapper}
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
