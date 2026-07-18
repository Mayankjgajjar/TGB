export const typography = {
  font: {
    display: 'var(--font-display)',
    body: 'var(--font-body)',
    primary: 'var(--font-primary)',
    technical: 'var(--font-technical)',
  },
  lineHeight: {
    lhH1: 'var(--lh-h1)',
    lhBody: 'var(--lh-body)',
    tight: 'var(--line-height-tight)',
    snug: 'var(--line-height-snug)',
    normal: 'var(--line-height-normal)',
  },
  fontSize: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    base: 'var(--font-size-base)',
    md: 'var(--font-size-md)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    xxl: 'var(--font-size-2xl)',
    xxxl: 'var(--font-size-3xl)',
    display: 'var(--font-size-display)',
  },
} as const;
