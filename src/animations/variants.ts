import { Variants } from 'framer-motion';

// Premium architectural easing (easeOutExpo)
export const EASE_EXPO = [0.16, 1, 0.3, 1];

/**
 * Fade-in variants supporting directional slide-ins.
 * Uses hardware accelerated properties and clean spring/expo curves.
 */
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none', delay = 0, duration = 0.8): Variants => {
  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: 24, x: 0 };
      case 'down': return { y: -24, x: 0 };
      case 'left': return { x: 24, y: 0 };
      case 'right': return { x: -24, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return {
    hidden: {
      opacity: 0,
      ...offset
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: EASE_EXPO
      }
    }
  };
};

/**
 * Container variant that staggers direct children that use motion keys.
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => {
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

/**
 * Architectural line drawing animation variant.
 * Animates scaleX or scaleY to mimic structural blueprint construction.
 */
export const lineDraw = (delay = 0, duration = 1.2): Variants => {
  return {
    hidden: {
      scaleX: 0,
      transformOrigin: 'left'
    },
    visible: {
      scaleX: 1,
      transition: {
        duration,
        delay,
        ease: EASE_EXPO
      }
    }
  };
};

export const lineDrawVertical = (delay = 0, duration = 1.2): Variants => {
  return {
    hidden: {
      scaleY: 0,
      transformOrigin: 'top'
    },
    visible: {
      scaleY: 1,
      transition: {
        duration,
        delay,
        ease: EASE_EXPO
      }
    }
  };
};

/**
 * Slide-in from clip path (for luxury reveals of architectural photography)
 */
export const clipReveal = (delay = 0, duration = 1.4): Variants => {
  return {
    hidden: {
      clipPath: 'inset(100% 0% 0% 0%)'
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration,
        delay,
        ease: EASE_EXPO
      }
    }
  };
};

/**
 * Minimal Page transition variants for smooth routing switch
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_EXPO
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: EASE_EXPO
    }
  }
};
