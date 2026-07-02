import React from 'react';
import styles from './LedWallBackground.module.css';

export const LedWallBackground: React.FC = () => {
  return (
    <div className={styles.container} aria-hidden="true">
      <svg className={styles.svgGrid} width="100%" height="100%">
        <defs>
          {/* Repeating pattern block of 48px containing a 3x3 staggered dot grid */}
          <pattern id="led-board-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            {/* Row 1 */}
            <circle cx="8" cy="8" r="1.2" className={`${styles.dot} ${styles.dot1}`} />
            <circle cx="24" cy="8" r="1.2" className={`${styles.dot} ${styles.dot2}`} />
            <circle cx="40" cy="8" r="1.2" className={`${styles.dot} ${styles.dot3}`} />

            {/* Row 2 */}
            <circle cx="8" cy="24" r="1.2" className={`${styles.dot} ${styles.dot3}`} />
            <circle cx="24" cy="24" r="1.2" className={`${styles.dot} ${styles.dot1}`} />
            <circle cx="40" cy="24" r="1.2" className={`${styles.dot} ${styles.dot2}`} />

            {/* Row 3 */}
            <circle cx="8" cy="40" r="1.2" className={`${styles.dot} ${styles.dot2}`} />
            <circle cx="24" cy="40" r="1.2" className={`${styles.dot} ${styles.dot3}`} />
            <circle cx="40" cy="40" r="1.2" className={`${styles.dot} ${styles.dot1}`} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#led-board-pattern)" />
      </svg>

      {/* Ambient slow red and white visual glows */}
      <div className={styles.flareRed} />
      <div className={styles.flareWhite} />

      {/* Dark gradient scrim safeguarding WCAG AA readability */}
      <div className={styles.scrim} />
    </div>
  );
};

export default LedWallBackground;
