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
    description:
      'We begin by understanding your business, objectives, space, and branding requirements to recommend the right custom signage solutions.',
    tag: 'Discovery Phase',
  },
  {
    icon: Pencil,
    number: '02',
    category: 'STAGE 02',
    label: 'Turning Ideas Into Concepts',
    title: 'Design & Visualization',
    description:
      'Our team develops layouts and visual representations aligning with brand identity and signage design standards.',
    tag: 'Design Phase',
  },
  {
    icon: Hammer,
    number: '03',
    category: 'STAGE 03',
    label: 'Built With Precision',
    title: 'Manufacturing & Fabrication',
    description:
      'Using premium materials, our signage manufacturing process ensures every sign is built to the highest quality and durability standards.',
    tag: 'Production Phase',
  },
  {
    icon: Truck,
    number: '04',
    category: 'STAGE 04',
    label: 'Seamless Delivery',
    title: 'Installation & Execution',
    description:
      'Our experienced team ensures professional signage installation with meticulous attention to detail, safety compliance, and robust engineering.',
    tag: 'Installation Phase',
  },
  {
    icon: HeartHandshake,
    number: '05',
    category: 'STAGE 05',
    label: 'Relationships Beyond Delivery',
    title: 'After-Sales Support',
    description:
      'Our commitment continues past completion with dedicated maintenance, warrantied assurance, and long-term client support.',
    tag: 'Support Phase',
  },
];

import { ICON_MAP } from '../../content/about';

interface ProcessProps {
  title?: string;
  subtitle?: string;
  introParagraph?: string;
  stages?: {
    step: string;
    title: string;
    duration: string;
    description: string;
    deliverables: string[];
  }[];
  asDiv?: boolean;
}

export const Process: React.FC<ProcessProps> = ({
  title,
  subtitle,
  introParagraph,
  stages,
  asDiv = false,
}) => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  const activeTitle = title || 'From Concept to Completion.';
  const activeSubtitle =
    subtitle ||
    'Every signage project follows a carefully structured process to ensure precision, quality, and a seamless experience from the first conversation to long-term support.';
  const activeIntro = introParagraph;

  // Map input stages to steps visual structure if provided
  const activeSteps = stages
    ? stages.map((stage) => {
        const iconList = [Search, Pencil, Hammer, Truck, HeartHandshake];
        const stepNum = parseInt(stage.step, 10);
        const icon = iconList[stepNum - 1] || Search;
        return {
          icon,
          number: stage.step,
          category: `STAGE ${stage.step}`,
          label: stage.duration,
          title: stage.title,
          description: stage.description,
          tag:
            stage.deliverables && stage.deliverables.length > 0
              ? stage.deliverables[0]
              : 'Execution Phase',
        };
      })
    : steps;

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.72,
        ease: [0.16, 1, 0.3, 1],
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

  const content = (
    <>
      {/* ── Section Header ── */}
      <motion.div
        className={styles.headerBlock}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={headerVariants}
      >
        <SectionEyebrow>HOW WE WORK</SectionEyebrow>
        <h2 className={styles.mainTitle}>{activeTitle}</h2>
        <p className={styles.subtitle}>{activeSubtitle}</p>
      </motion.div>

      {/* ── Optional Standards Intro Paragraph ── */}
      {activeIntro && (
        <motion.div
          className={styles.introParagraph}
          initial={{ opacity: 0, y: 15 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          {activeIntro}
        </motion.div>
      )}

      {/* ── Cards Grid ── */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
      >
        {activeSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
              custom={idx}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -4, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
              }
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
        satisfaction remains the same as a trusted signage manufacturer."
      </p>
    </>
  );

  if (asDiv) {
    return (
      <div ref={ref} id="process" className="sectionAnchor">
        {content}
      </div>
    );
  }

  return (
    <section ref={ref} className={styles.section} id="process">
      <div className={styles.inner}>{content}</div>
    </section>
  );
};

export default Process;
