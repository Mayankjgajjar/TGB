import React from 'react';
import styles from './Label.module.css';

interface LabelProps {
  children: React.ReactNode;
  color?: 'steel' | 'copper' | 'muted';
  showMarker?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const Label: React.FC<LabelProps> = ({
  children,
  color = 'steel',
  showMarker = false,
  className = '',
  as: Component = 'span',
}) => {
  const colorClass =
    color === 'copper'
      ? styles.colorCopper
      : color === 'muted'
        ? styles.colorMuted
        : styles.colorSteel;

  const classes = `${styles.label} ${colorClass} ${className}`;

  return (
    <Component className={classes}>
      {showMarker && <span className={styles.marker} />}
      {children}
    </Component>
  );
};

export default Label;
