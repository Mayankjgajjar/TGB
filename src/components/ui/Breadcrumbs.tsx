import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [] }) => {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className={styles.row}>
      {items.map((crumb, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className={styles.separator}>›</span>}
          {crumb.to ? (
            <Link to={crumb.to} className={styles.link}>
              {crumb.label}
            </Link>
          ) : (
            <span className={styles.current}>{crumb.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
