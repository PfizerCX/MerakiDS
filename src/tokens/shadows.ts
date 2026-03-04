export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  centerMd: 'var(--shadow-center-md)',
  centerLg: 'var(--shadow-center-lg)',
} as const;

export type ShadowToken = keyof typeof shadows;
