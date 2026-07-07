import React from 'react';
import styles from './SectionEyebrow.module.css';

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ children, className = '' }) => {
  return <span className={`${styles.sectionEyebrow} ${className}`}>{children}</span>;
};

export default SectionEyebrow;
