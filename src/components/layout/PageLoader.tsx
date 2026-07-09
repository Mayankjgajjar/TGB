import React from 'react';
import styles from './PageLoader.module.css';

const SkeletonBlock: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`${styles.skeleton} ${className ?? ''}`} aria-hidden="true" />
);

export const PageLoader: React.FC<{ role?: string }> = ({ role = 'status' }) => (
  <div role={role} aria-label="Loading page" className={styles.container}>
    <div className={styles.content}>
      <SkeletonBlock className={styles.title} />
      <SkeletonBlock className={styles.text} />
      <SkeletonBlock className={styles.textShort} />
      <SkeletonBlock className={styles.image} />
      <SkeletonBlock className={styles.text} />
      <SkeletonBlock className={styles.textShort} />
    </div>
  </div>
);

export default PageLoader;
