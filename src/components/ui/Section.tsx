import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dividerTop?: boolean;
  dividerBottom?: boolean;
  spacing?: 'small' | 'normal' | 'large' | 'xlarge';
  as?: React.ElementType;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  dividerTop = false,
  dividerBottom = false,
  spacing = 'normal',
  as: Component = 'section',
}) => {
  const spacingClass = 
    spacing === 'small' ? styles.spacingSmall :
    spacing === 'large' ? styles.spacingLarge :
    spacing === 'xlarge' ? styles.spacingExtraLarge : '';

  const classes = [
    styles.section,
    spacingClass,
    dividerTop ? styles.dividerTop : '',
    dividerBottom ? styles.dividerBottom : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component id={id} className={classes}>
      {children}
    </Component>
  );
};
export default Section;
