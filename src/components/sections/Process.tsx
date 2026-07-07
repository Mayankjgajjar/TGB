import React from 'react';
import { motion } from 'framer-motion';
import { Search, Pencil, Hammer, Truck, HeartHandshake } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Process.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';

const steps = [
  {
    icon: Search,
    number: '01',
    category: 'STAGE 01',
    label: 'Understanding Your Vision',
    title: 'Consultation & Discovery',
    description: 'We initiate our workflow with a detailed structural and brand consultation. Our site audit team evaluates spatial coordinates, viewing angles, structural mounting points, local wind velocity factors, and Ahmedabad municipal safety codes to ensure a solid foundation before drafting begins.',
    tag: 'Discovery Phase',
  },
  {
    icon: Pencil,
    number: '02',
    category: 'STAGE 02',
    label: 'Turning Ideas Into Concepts',
    title: 'Design & Visualization',
    description: 'Our engineering draftsmen create comprehensive technical blueprints and 3D architectural renders. We carefully match corporate brand guidelines, calculate distance readability indexes, simulate day-and-night LED lux intensity levels, and prepare precise vector cutpaths.',
    tag: 'Design Phase',
  },
  {
    icon: Hammer,
    number: '03',
    category: 'STAGE 03',
    label: 'Built With Precision',
    title: 'Manufacturing & Fabrication',
    description: 'Production takes place in our Nikol, Ahmedabad workshop under strict supervision. Utilizing high-speed CNC routing machines, fiber laser metal cutters, and argon welding stations, we shape ACP facades and stainless steel letters to high tolerances.',
    tag: 'Production Phase',
  },
  {
    icon: Truck,
    number: '04',
    category: 'STAGE 04',
    label: 'Seamless Delivery',
    title: 'Installation & Execution',
    description: 'Our certified rigging crew manages delivery, high-altitude alignment, and structural mounting. We use structural galvanized anchoring bolts, heavy-duty iron frames designed for 150 km/h winds, and surge-protected electrical conduit grids.',
    tag: 'Installation Phase',
  },
  {
    icon: HeartHandshake,
    number: '05',
    category: 'STAGE 05',
    label: 'Relationships Beyond Delivery',
    title: 'After-Sales Support',
    description: 'We safeguard your visual asset long after installation. Backed by our structured warranty, our service coordinators dispatch technical teams within 24-48 business hours to manage power module checks, LED replacements, and routine diagnostics.',
    tag: 'Support Phase',
  },
];

export const Process: React.FC = () => {
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
    <section ref={ref} className={styles.section} id="process">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <SectionEyebrow>HOW WE WORK</SectionEyebrow>
          <h2 className={styles.heading}>From Concept to Completion.</h2>
          <p className={styles.subheading}>
            Every signage project follows a carefully structured process to ensure precision, quality,
            and a seamless experience from the first conversation to long-term support.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className={styles.card}
                variants={cardVariants}
                custom={idx}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className={styles.cardIconWrapper}>
                  <Icon className={styles.cardIcon} strokeWidth={1.25} />
                </div>
                <span className={styles.cardCategory}>{step.category}</span>
                <span className={styles.stepLabel}>{step.label}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
                <span className={styles.cardTag}>{step.tag}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom Statement ── */}
        <p className={styles.bottomStatement}>
          "Every project is different. Our commitment to quality, craftsmanship, and customer
          satisfaction remains the same as a trusted signage manufacturer in Ahmedabad."
        </p>

      </div>
    </section>
  );
};

export default Process;
