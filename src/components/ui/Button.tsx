import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'technical';
  size?: 'normal' | 'large';
  icon?: React.ReactNode;
  showTechnicalDot?: boolean;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    to?: never;
    href?: never;
  };

type ButtonAsRouterLink = BaseProps &
  Omit<LinkProps, keyof BaseProps | 'to'> & {
    to: string;
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'> & {
    href: string;
    to?: never;
  };

type ButtonProps = ButtonAsButton | ButtonAsRouterLink | ButtonAsAnchor;

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

  const classes = `${styles.button} ${sizeClass} ${variantClass} ${className}`.trim();

  const renderContent = () => (
    <>
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

  if (to !== undefined) {
    const linkProps = props as Omit<LinkProps, 'to'>;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {renderContent()}
      </Link>
    );
  }

  if (href !== undefined) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {renderContent()}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {renderContent()}
    </button>
  );
};

export default Button;
