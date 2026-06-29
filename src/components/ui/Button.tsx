import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'technical';
  size?: 'normal' | 'large';
  icon?: React.ReactNode;
  showTechnicalDot?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  href,
  variant = 'primary',
  size = 'normal',
  icon,
  showTechnicalDot = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClass = size === 'large' ? styles.sizeLarge : styles.sizeNormal;
  const variantClass = 
    variant === 'secondary' ? styles.variantSecondary :
    variant === 'technical' ? styles.variantTechnical : styles.variantPrimary;

  const classes = `${styles.button} ${sizeClass} ${variantClass} ${className}`;

  const renderContent = () => (
    <>
      {/* Blueprint Corners for secondary/technical buttons */}
      {(variant === 'secondary' || variant === 'technical') && (
        <>
          <span className={`${styles.blueprintCorner} ${styles.cornerTL}`} />
          <span className={`${styles.blueprintCorner} ${styles.cornerTR}`} />
          <span className={`${styles.blueprintCorner} ${styles.cornerBL}`} />
          <span className={`${styles.blueprintCorner} ${styles.cornerBR}`} />
        </>
      )}

      {showTechnicalDot && <span className={styles.technicalDot} />}
      <span>{children}</span>
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {renderContent()}
    </button>
  );
};

export default Button;
