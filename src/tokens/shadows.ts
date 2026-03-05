/**
 * Elevation tokens (direction + size, with optional -active for center).
 * All use fill rgba(255,255,255,1); use --elevation-fill or --color-surface for theme-aware.
 */
export const elevation = {
  topS: 'var(--elevation-top-s)',
  topM: 'var(--elevation-top-m)',
  centerS: 'var(--elevation-center-s)',
  centerM: 'var(--elevation-center-m)',
  centerSActive: 'var(--elevation-center-s-active)',
  centerMActive: 'var(--elevation-center-m-active)',
  bottomS: 'var(--elevation-bottom-s)',
  bottomM: 'var(--elevation-bottom-m)',
} as const;

export const elevationFill = 'var(--elevation-fill)' as const;

/** Shadow aliases (map to elevation tokens). Use elevation in new code. */
export const shadows = {
  sm: 'var(--elevation-bottom-s)',
  md: 'var(--elevation-bottom-s)',
  lg: 'var(--elevation-bottom-m)',
  xl: 'var(--elevation-bottom-m)',
  centerMd: 'var(--elevation-center-m)',
  centerLg: 'var(--elevation-center-m-active)',
} as const;

export type ElevationToken = keyof typeof elevation;
export type ShadowToken = keyof typeof shadows;
