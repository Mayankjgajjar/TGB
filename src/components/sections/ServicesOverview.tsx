import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Label from '../ui/Label';
import styles from './ServicesOverview.module.css';
import { servicesData } from '../../content/services';

export const ServicesOverview: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const servicesList = Object.values(servicesData);

  return (
    <section className={styles.section} id="services-overview">
      <Container>
        <motion.div 
          ref={ref}
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Label showMarker style={{ marginBottom: 'var(--space-16)' }}>
            OUR SERVICES
          </Label>
          <h2 className={styles.mainTitle}>Comprehensive Technical Solutions</h2>
          <p className={styles.subtitle}>
            From monumental pylon structures to precision halo-lit lettering, we execute 
            complex architectural signage with uncompromising quality and permanence.
          </p>
        </motion.div>

        <motion.div 
          className={styles.editorialGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {servicesList.map((service, index) => {
            const number = String(index + 1).padStart(2, '0');
            
            return (
              <Link to={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
                
                {/* Background Imagery */}
                <img src={service.heroImage} alt={service.name} className={styles.cardImage} />
                <div className={styles.cardOverlay} />
                
                {/* Content Overlay */}
                <div className={styles.cardContent}>
                  <span className={styles.serviceNumber}>{number}</span>
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.shortDescription}</p>
                  
                  <span className={styles.viewDetails}>
                    View Details
                    <ArrowRight size={14} color="var(--color-copper)" />
                  </span>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
