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

export const componentLayout = {
  insetMinWidth: 'var(--component-inset-min-width)',
  insetMaxWidth: 'var(--component-inset-max-width)',
} as const;

export const componentSpacing = {
  horizontalSpace: 'var(--component-horizontal-space)',
  verticalSpace: 'var(--component-vertical-space)',
  insetPaddingT: 'var(--component-inset-padding-t)',
  insetPadding: 'var(--component-inset-padding)',
  borderRadius: 'var(--component-border-radius)',
} as const;

export const patternSpacing = {
  insetPaddingTb: 'var(--pattern-inset-padding-tb)',
  insetPaddingLr: 'var(--pattern-inset-padding-lr)',
} as const;

export type ComponentSpacingToken = keyof typeof componentSpacing;
export type ComponentLayoutToken = keyof typeof componentLayout;

export const breakpoints = {
  sm: 375,
  smMax: 767,
  md: 768,
  mdMax: 1023,
  lg: 1024,
  lgMax: 1440,
  xl: 3440,
  xlMax: 3440,
} as const;

export type SpacingToken = keyof typeof spacing;
export type LayoutSpacingToken = keyof typeof layoutSpacing;
export type PatternSpacingToken = keyof typeof patternSpacing;
export type BreakpointToken = keyof typeof breakpoints;
