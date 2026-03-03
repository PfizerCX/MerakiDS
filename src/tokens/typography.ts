export const fontFamily = {
  sans: 'var(--font-family-sans)',
  mono: 'var(--font-family-mono)',
  extended: 'var(--font-family-extended)',
  condensed: 'var(--font-family-condensed)',
  tomorrow: 'var(--font-family-tomorrow)',
} as const;

export const fontSize = {
  display: 'var(--font-size-display)',
  headlineLg: 'var(--font-size-headline-lg)',
  headlineM: 'var(--font-size-headline-m)',
  headlineS: 'var(--font-size-headline-s)',
  titleLg: 'var(--font-size-title-lg)',
  titleM: 'var(--font-size-title-m)',
  titleS: 'var(--font-size-title-s)',
  bodyLg: 'var(--font-size-body-lg)',
  bodyM: 'var(--font-size-body-m)',
  bodyS: 'var(--font-size-body-s)',
  bodyXs: 'var(--font-size-body-xs)',
  labelLg: 'var(--font-size-label-lg)',
  labelM: 'var(--font-size-label-m)',
  labelS: 'var(--font-size-label-s)',
  labelXs: 'var(--font-size-label-xs)',
  buttonLg: 'var(--font-size-button-lg)',
  buttonM: 'var(--font-size-button-m)',
  buttonS: 'var(--font-size-button-s)',
} as const;

export const responsiveFontSize = {
  display: { sm: '64px', md: '72px', lg: '80px' },
  headlineLg: { sm: '48px', md: '56px', lg: '64px' },
  headlineM: { sm: '42px', md: '50px', lg: '58px' },
  headlineS: { sm: '34px', md: '40px', lg: '46px' },
} as const;

export const fontWeight = {
  light: 'var(--font-weight-light)',
  regular: 'var(--font-weight-regular)',
  medium: 'var(--font-weight-medium)',
  bold: 'var(--font-weight-bold)',
} as const;

export const roleWeight = {
  body: 400,
  label: 500,
  title: 500,
  button: 700,
  headlineLight: 300,
  headlineRegular: 400,
  headlineBold: 700,
  displayLight: 300,
  displayBold: 700,
} as const;

export const letterSpacing = {
  regular: 'var(--letter-spacing-regular)',
  tight: 'var(--letter-spacing-tight)',
} as const;

export type FontFamilyToken = keyof typeof fontFamily;
export type FontSizeToken = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;
export type LetterSpacingToken = keyof typeof letterSpacing;
