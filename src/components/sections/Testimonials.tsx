import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    client: 'Rajesh Patel',
    industry: 'Apex Hub',
    review: '"Exceptional service and top-notch quality! TGB Enterprise designed and installed our LED sign board in Ahmedabad. The finish is premium, and it has drastically improved our storefront visibility."',
    rating: '★★★★★'
  },
  {
    client: 'Amit Shah',
    industry: 'The Gold Palace',
    review: '"Highly professional sign board manufacturer Ahmedabad. The 3D gold letter signage they made for our Nikol showroom looks extremely luxurious. Excellent communication and on-time delivery."',
    rating: '★★★★★'
  },
  {
    client: 'Neha Gupta',
    industry: 'Glow & Co.',
    review: '"Superb craftsmanship! The custom neon sign board they designed for our studio is perfect. The team is very skilled and the installation was clean. Highly recommend TGB!"',
    rating: '★★★★★'
  },
  {
    client: 'Sanjay Mehta',
    industry: 'Infra Projects',
    review: '"We hired TGB Enterprise for the INFRA CORP facade branding. They did an outstanding job with the ACP board installation. Their structural engineering and wind-load calculations were highly professional."',
    rating: '★★★★★'
  },
  {
    client: 'Vikram Rathod',
    industry: 'City Plaza Manager',
    review: '"Great experience working with Mayank and Ankit. They provide excellent after-sales support and premium materials. Easily the best sign board company in Nikol, Ahmedabad."',
    rating: '★★★★★'
  }
];

import useScrollReveal from '../../hooks/useScrollReveal';

export const Testimonials: React.FC = () => {
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
    <section ref={ref} className={styles.section} id="testimonials">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <span className={styles.eyebrow}>CLIENT EXPERIENCES</span>
          <h2 className={styles.heading}>Trusted by Businesses Across India.</h2>
          <p className={styles.subheading}>
            Every project is built on collaboration, craftsmanship, and long-term relationships. 
            Here's what our clients have to say about working with TGB Enterprise.
          </p>
        </motion.div>

        {/* ── Testimonial Grid ── */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
              custom={idx}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.25 } }}
            >
              <div className={styles.quoteSymbol}>”</div>
              <div className={styles.rating}>{t.rating}</div>
              <p className={styles.reviewText}>{t.review}</p>
              
              <div className={styles.clientMeta}>
                <span className={styles.clientName}>{t.client}</span>
                <span className={styles.clientIndustry}>{t.industry}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
