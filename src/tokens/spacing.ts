export const spacing = {
  '0': 'var(--spacing-0)',
  '2': 'var(--spacing-2)',
  '4': 'var(--spacing-4)',
  '8': 'var(--spacing-8)',
  '12': 'var(--spacing-12)',
  '16': 'var(--spacing-16)',
  '24': 'var(--spacing-24)',
} as const;

export const layoutSpacing = {
  margin: 'var(--layout-margin)',
  section: 'var(--layout-section)',
  gutter: 'var(--layout-gutter)',
} as const;

export const componentSpacing = {
  verticalSpace: 'var(--component-vertical-space)',
  insetPadding: 'var(--component-inset-padding)',
  insetPaddingTb: 'var(--component-inset-padding-tb)',
  horizontalSpace: 'var(--component-horizontal-space)',
  borderRadius: 'var(--component-border-radius)',
} as const;

export type ComponentSpacingToken = keyof typeof componentSpacing;

export const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 3440,
} as const;

export type SpacingToken = keyof typeof spacing;
export type LayoutSpacingToken = keyof typeof layoutSpacing;
export type BreakpointToken = keyof typeof breakpoints;
