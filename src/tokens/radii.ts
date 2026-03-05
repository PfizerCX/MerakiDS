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

/**
 * Size/radius tokens (--radius-1 … --radius-7).
 * Resolve per data-corner-mode:
 *   Round: size-1→round-8, size-2→round-16, size-3→round-24, size-4→round-32,
 *          size-5→round-40, size-6→round-48, size-7→round-56
 *   Sharp: size-1→sharp-0, size-2→sharp-2, size-3→sharp-2, size-4→sharp-4,
 *          size-5→sharp-4, size-6→sharp-6, size-7→sharp-6
 */
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

/** Size token aliases (spec naming: size-1 … size-7) */
export const sizeRadii = {
  1: 'var(--radius-size-1)',
  2: 'var(--radius-size-2)',
  3: 'var(--radius-size-3)',
  4: 'var(--radius-size-4)',
  5: 'var(--radius-size-5)',
  6: 'var(--radius-size-6)',
  7: 'var(--radius-size-7)',
} as const;

/** Pixel values per corner mode for size-1…7 (Round | Sharp) */
export const radiiValues = {
  round: { 1: 8, 2: 16, 3: 24, 4: 32, 5: 40, 6: 48, 7: 56, full: 10000 },
  sharp: { 1: 0, 2: 2, 3: 2, 4: 4, 5: 4, 6: 6, 7: 6, full: 0 },
} as const;

export type RadiusToken = keyof typeof radii;
export type SizeRadiusToken = keyof typeof sizeRadii;
