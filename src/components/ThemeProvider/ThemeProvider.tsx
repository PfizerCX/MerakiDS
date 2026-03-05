import * as React from 'react';

/** Theme mode: light or dark color scheme */
export type ThemeMode = 'light' | 'dark';

/** Corner style: round (8–56px radii) or sharp (0–6px radii) */
export type CornerMode = 'round' | 'sharp';

/** Tonal palette name for primary, secondary, or tertiary color set */
export type ColorSet =
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'magenta'
  | 'violet'
  | 'gray';

export interface ThemeProviderProps {
  /** Light or dark color scheme. Omit to use default (light). */
  theme?: ThemeMode;
  /** Round (default) or sharp corners for components using radius tokens. */
  cornerMode?: CornerMode;
  /** Primary color palette. Default is blue when omitted. */
  colorPrimary?: ColorSet;
  /** Secondary color palette. Default is cyan when omitted. */
  colorSecondary?: ColorSet;
  /** Tertiary color palette. Default is gray when omitted. */
  colorTertiary?: ColorSet;
  children: React.ReactNode;
  /** Optional className for the wrapper element */
  className?: string;
  /** Optional style for the wrapper element */
  style?: React.CSSProperties;
}

/**
 * Applies Meraki theme options to its subtree via data attributes.
 * Use at app root (or around any subtree) to control:
 * - **Theme**: light vs dark mode
 * - **Corner mode**: sharp vs rounded corners (design tokens round-8–56 / sharp-0–6)
 * - **Color sets**: primary, secondary, and tertiary palettes (blue, cyan, teal, green, etc.)
 *
 * Ensure `tokens.css` is loaded (e.g. in your app entry or Storybook preview).
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  cornerMode,
  colorPrimary,
  colorSecondary,
  colorTertiary,
  children,
  className,
  style,
}) => {
  const dataAttrs: Record<string, string> = {};
  if (theme) dataAttrs['data-theme'] = theme;
  if (cornerMode) dataAttrs['data-corner-mode'] = cornerMode;
  if (colorPrimary) dataAttrs['data-color-primary'] = colorPrimary;
  if (colorSecondary) dataAttrs['data-color-secondary'] = colorSecondary;
  if (colorTertiary) dataAttrs['data-color-tertiary'] = colorTertiary;

  return (
    <div className={className} style={style} {...dataAttrs}>
      {children}
    </div>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
