import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import styles from './Card.module.css';

interface CardProps {
  image?: string;
  icon?: LucideIcon;
  category?: string;
  title: string;
  description?: string;
  footerPill?: string;
  footerLinkText?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  loading?: 'lazy' | 'eager';
  imageAlt?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  icon: Icon,
  category,
  title,
  description,
  footerPill,
  footerLinkText,
  to,
  onClick,
  className = '',
  loading = 'lazy',
  imageAlt,
}) => {
  const isLink = !!to;
  const isButton = !!onClick && !isLink;

  const content = (
    <>
      {image && (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={imageAlt || title}
            className={styles.image}
            loading={loading}
          />
          <div className={styles.imageOverlay} />
          {category && (
            <div className={styles.imageBadge}>
              {Icon && <Icon size={13} strokeWidth={1.5} />}
              <span>{category}</span>
            </div>
          )}
        </div>
      )}

      <div className={styles.cardContent}>
        {!image && category && (
          <span className={styles.categoryEyebrow}>{category}</span>
        )}
        
        {!image && Icon && (
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} strokeWidth={1.25} />
          </div>
        )}

        <h3 className={styles.title}>{title}</h3>
        
        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}

        {footerPill && (
          <span className={styles.footerPill}>
            {footerPill}
          </span>
        )}

        {footerLinkText && (
          <div className={styles.footerLink}>
            {footerLinkText}{' '}
            <span className={styles.arrow}>→</span>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = `${styles.card} ${image ? styles.hasImage : styles.noImage} ${className}`;

  if (isLink) {
    return (
      <Link to={to} className={cardClasses}>
        {content}
      </Link>
    );
  }

  if (isButton) {
    return (
      <button onClick={onClick} className={cardClasses}>
        {content}
      </button>
    );
  }

  return <div className={cardClasses}>{content}</div>;
};

export default Card;
