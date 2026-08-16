import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import SectionEyebrow from '../ui/SectionEyebrow';
import Container from '../ui/Container';
import useScrollReveal from '../../hooks/useScrollReveal';

const testimonials = [
  {
    client: 'Rajesh Patel',
    company: 'Apex Hub',
    role: 'Director',
    review:
      'Exceptional service and top-notch quality! TGB Enterprise designed and installed our LED sign board. The finish is premium, and it has drastically improved our storefront visibility.',
  },
  {
    client: 'Amit Shah',
    company: 'The Gold Palace',
    role: 'Owner',
    review:
      'Highly professional sign board manufacturer in Ahmedabad. The 3D gold letter signage they made for our Nikol showroom looks extremely luxurious. Excellent communication and on-time delivery.',
  },
  {
    client: 'Neha Gupta',
    company: 'Glow & Co.',
    role: 'Studio Founder',
    review:
      'Superb craftsmanship! The custom neon sign board they designed for our studio is perfect. The team is very skilled and the installation was clean. Highly recommend TGB.',
  },
  {
    client: 'Sanjay Mehta',
    company: 'INFRA CORP India',
    role: 'Projects Head',
    review:
      'We hired TGB Enterprise for the INFRA CORP facade branding. They did an outstanding job with the ACP board installation. Their structural engineering and wind-load calculations were highly professional.',
  },
  {
    client: 'Vikram Rathod',
    company: 'City Plaza',
    role: 'General Manager',
    review:
      'Great experience working with Mayank and Ankit. They provide excellent after-sales support and premium materials. Easily the best sign board company in Nikol, Ahmedabad.',
  },
];

export const Testimonials: React.FC = () => {
  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : delay,
      },
    }),
  };

  return (
    <section ref={ref} className={styles.section} id="testimonials">
      <Container>
        {/* Header — left-aligned */}
        <motion.div
          className={styles.header}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <SectionEyebrow>CLIENT EXPERIENCES</SectionEyebrow>
          <h2 className={styles.heading}>What Our Clients Say.</h2>
        </motion.div>

        {/* Quote grid — 2 columns */}
        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              className={styles.quote}
              initial="hidden"
              animate={isRevealed ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={0.1 + idx * 0.07}
            >
              <p className={styles.quoteText}>"{t.review}"</p>
              <footer className={styles.quoteMeta}>
                <span className={styles.clientName}>{t.client}</span>
                <span className={styles.clientDetails}>
                  {t.role}, {t.company}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
