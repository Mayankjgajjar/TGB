export const animations = {
  speed: {
    fast: 'var(--transition-speed-fast)',
    normal: 'var(--transition-speed-normal)',
    slow: 'var(--transition-speed-slow)',
  },
  easing: {
    expo: 'var(--transition-ease-expo)',
  },
  transition: {
    fast: 'var(--transition-fast)',
    base: 'var(--transition-base)',
    slow: 'var(--transition-slow)',
  },
} as const;
