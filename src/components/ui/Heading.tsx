import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 'display';
  color?: 'white' | 'copper' | 'steel';
  className?: string;
  as?: React.ElementType;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  color = 'white',
  className = '',
  as,
}) => {
  const getTag = (): React.ElementType => {
    if (as) return as;
    if (level === 'display') return 'h1';
    return `h${level}` as React.ElementType;
  };

  const Component = getTag();

  const levelClass = 
    level === 'display' ? styles.display :
    level === 1 ? styles.h1 :
    level === 2 ? styles.h2 :
    level === 3 ? styles.h3 : styles.h4;

  const colorClass = 
    color === 'copper' ? styles.colorCopper :
    color === 'steel' ? styles.colorSteel : styles.colorOffWhite;

  const classes = `${styles.heading} ${levelClass} ${colorClass} ${className}`;

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default Heading;
