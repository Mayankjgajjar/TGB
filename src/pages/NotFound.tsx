import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import ContactCTA from '../components/sections/ContactCTA';
import styles from './NotFound.module.css';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | TGB Enterprise';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'The page you are looking for does not exist. Return to TGB Enterprise home.',
      );
    }
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <div className={styles.page}>
        <Container>
          <div className={styles.inner}>
            <span className={styles.code} aria-hidden="true">
              404
            </span>
            <h1 className={styles.heading}>Page Not Found</h1>
            <p className={styles.message}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className={styles.actions}>
              <Link to="/" className={styles.primaryBtn}>
                Return to Home
              </Link>
              <Link to="/#contact" className={styles.secondaryBtn}>
                Contact Us →
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <ContactCTA />
    </motion.div>
  );
};

export default NotFound;
