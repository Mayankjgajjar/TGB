import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionEyebrow from '../ui/SectionEyebrow';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './ManufacturingPillars.module.css';

const PILLARS = [
  {
    num: '01',
    title: '3D Design & CAD Mockups',
    desc: 'Every project starts with a CAD drawing and a daytime/nighttime lighting simulation before a single piece of metal is cut.',
  },
  {
    num: '02',
    title: 'Fiber Laser & CNC Precision',
    desc: 'In-house fiber laser cutting, automated letter bending, and CNC V-grooving at 0.1mm tolerances.',
  },
  {
    num: '03',
    title: 'Weatherproof Materials',
    desc: 'Marine-grade SS 316, 4mm PVDF ACP cladding, and Samsung IP67 waterproof LEDs — built for Gujarat\'s climate extremes.',
  },
  {
    num: '04',
    title: 'On-Time Delivery & Warranty',
    desc: 'Direct factory turnaround in 7–10 days with professional installation across Gujarat and India and multi-year warranty assurance.',
  },
];

export const ManufacturingPillars: React.FC = () => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section} id="why-tgb" aria-label="Why Choose TGB Enterprise">
      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow>MANUFACTURING EXCELLENCE</SectionEyebrow>
          <h2 className={styles.title}>Why Industry Leaders Choose TGB Enterprise</h2>
        </motion.div>

        <motion.div
          className={styles.pillarsRow}
          initial={{ opacity: 0 }}
          animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className={styles.pillar}>
              <span className={styles.pillarNum}>{pillar.num}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ManufacturingPillars;
