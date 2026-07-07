import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE_EXPO } from '../../animations/variants';
import styles from './PageHero.module.css';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_EXPO } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, breadcrumbs }) => {
  return (
    <section className={styles.hero} aria-label={title}>
      <div className={styles.inner}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav variants={fadeUp} className={styles.breadcrumb} aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className={styles.breadcrumbSep}>›</span>}
                  {crumb.to ? (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          <motion.p variants={fadeUp} className={styles.eyebrow}>
            {eyebrow}
          </motion.p>

          <motion.h1 variants={fadeUp} className={styles.title}>
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p variants={fadeUp} className={styles.subtitle}>
              {subtitle}
            </motion.p>
          )}

          <motion.div variants={fadeUp} className={styles.divider} />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
