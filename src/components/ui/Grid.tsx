import React from 'react';
import styles from './Grid.module.css';

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
  gap?: 'none' | 'small' | 'normal' | 'large' | 'xlarge';
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
  blueprintLines?: boolean;
  as?: React.ElementType;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  gap = 'normal',
  align = 'stretch',
  className = '',
  blueprintLines = false,
  as: Component = 'div',
}) => {
  const colClass = 
    cols === 2 ? styles.cols2 :
    cols === 3 ? styles.cols3 :
    cols === 4 ? styles.cols4 :
    cols === 12 ? styles.cols12 : '';

  const gapClass = 
    gap === 'none' ? styles.gapNone :
    gap === 'small' ? styles.gapSmall :
    gap === 'large' ? styles.gapLarge :
    gap === 'xlarge' ? styles.gapExtraLarge : '';

  const alignClass = 
    align === 'center' ? styles.alignCenter :
    align === 'start' ? styles.alignStart :
    align === 'end' ? styles.alignEnd : styles.alignStretch;

  const classes = [
    styles.grid,
    colClass,
    gapClass,
    alignClass,
    blueprintLines ? styles.blueprintGrid : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};
export default Grid;
