export const refRadii = {
  round: {
    4: 'var(--ref-radius-round-4)',
    8: 'var(--ref-radius-round-8)',
    16: 'var(--ref-radius-round-16)',
    24: 'var(--ref-radius-round-24)',
    32: 'var(--ref-radius-round-32)',
    40: 'var(--ref-radius-round-40)',
    48: 'var(--ref-radius-round-48)',
    56: 'var(--ref-radius-round-56)',
  },
  sharp: {
    0: 'var(--ref-radius-sharp-0)',
    2: 'var(--ref-radius-sharp-2)',
    4: 'var(--ref-radius-sharp-4)',
    6: 'var(--ref-radius-sharp-6)',
  },
} as const;

export const radii = {
  1: 'var(--radius-1)',
  2: 'var(--radius-2)',
  3: 'var(--radius-3)',
  4: 'var(--radius-4)',
  5: 'var(--radius-5)',
  6: 'var(--radius-6)',
  7: 'var(--radius-7)',
  full: 'var(--radius-full)',
} as const;

export const radiiValues = {
  round: { 1: 8, 2: 16, 3: 24, 4: 32, 5: 40, 6: 48, 7: 56, full: 10000 },
  sharp: { 1: 0, 2: 2, 3: 2, 4: 4, 5: 4, 6: 6, 7: 6, full: 0 },
} as const;

export type RadiusToken = keyof typeof radii;
