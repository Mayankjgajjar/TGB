import React from 'react';
import { motion } from 'framer-motion';
import { Search, Pencil, Hammer, Truck, HeartHandshake } from 'lucide-react';
import { EASE_EXPO } from '../../animations/variants';
import styles from './Process.module.css';

const steps = [
  {
    icon: Search,
    number: '01',
    category: 'STAGE 01',
    label: 'Understanding Your Vision',
    title: 'Consultation & Discovery',
    description: 'We begin by understanding your business, objectives, space, and branding requirements to recommend the right custom signage solutions.',
    tag: 'Discovery Phase',
  },
  {
    icon: Pencil,
    number: '02',
    category: 'STAGE 02',
    label: 'Turning Ideas Into Concepts',
    title: 'Design & Visualization',
    description: 'Our team develops layouts and visual representations aligning with brand identity and signage design standards.',
    tag: 'Design Phase',
  },
  {
    icon: Hammer,
    number: '03',
    category: 'STAGE 03',
    label: 'Built With Precision',
    title: 'Manufacturing & Fabrication',
    description: 'Using premium materials, our signage manufacturing process ensures every sign is built to the highest quality and durability standards.',
    tag: 'Production Phase',
  },
  {
    icon: Truck,
    number: '04',
    category: 'STAGE 04',
    label: 'Seamless Delivery',
    title: 'Installation & Execution',
    description: 'Our experienced team ensures professional signage installation with meticulous attention to detail, safety compliance, and robust engineering.',
    tag: 'Installation Phase',
  },
  {
    icon: HeartHandshake,
    number: '05',
    category: 'STAGE 05',
    label: 'Relationships Beyond Delivery',
    title: 'After-Sales Support',
    description: 'Our commitment continues past completion with dedicated maintenance, warrantied assurance, and long-term client support.',
    tag: 'Support Phase',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_EXPO }
  }
};

export const Process: React.FC = () => {
  return (
    <section className={styles.section} id="process">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
        >
          <span className={styles.eyebrow}>HOW WE WORK</span>
          <h2 className={styles.heading}>From Concept to Completion.</h2>
          <p className={styles.subheading}>
            Every signage project follows a carefully structured process to ensure precision, quality,
            and a seamless experience from the first conversation to long-term support.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
