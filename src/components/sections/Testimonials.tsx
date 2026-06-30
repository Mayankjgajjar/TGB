import React from 'react';
import { motion } from 'framer-motion';
import { EASE_EXPO } from '../../animations/variants';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    client: 'Sperenza Legal Associates',
    industry: 'Legal Services',
    review: '"TGB Enterprise delivered exactly what we envisioned. The quality of the signage, attention to detail, and professional installation exceeded our expectations. Their after-sales support truly sets them apart."',
    rating: '★★★★★'
  },
  {
    client: 'Speranza Tiles',
    industry: 'Retail & Showroom',
    review: '"From design to execution, the entire process was smooth and professional. The final signage has significantly enhanced our storefront and strengthened our brand presence."',
    rating: '★★★★★'
  },
  {
    client: 'Grey Eminence',
    industry: 'Corporate',
    review: '"The team understood our requirements perfectly and delivered a premium signage solution that reflects our brand identity. Their craftsmanship and commitment to quality are exceptional."',
    rating: '★★★★★'
  },
  {
    client: 'Infinity AV Solution',
    industry: 'Technology & Commercial',
    review: '"Professional, responsive, and highly dependable. TGB Enterprise handled everything from design to installation with precision and delivered a result we are proud of."',
    rating: '★★★★★'
  }
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

export const Testimonials: React.FC = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
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
