import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Meraki Design System',
  brandUrl: '/',

  colorPrimary: '#2e29ff',
  colorSecondary: '#2e29ff',

  appBg: '#f8f8fc',
  appContentBg: '#ffffff',
  appBorderColor: '#c9c9c9',
  appBorderRadius: 8,

  fontBase: '"Pfizer Diatype", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"Pfizer Diatype Mono", "Fira Code", Consolas, monospace',

  textColor: '#00003a',
  textInverseColor: '#ffffff',
  textMutedColor: '#3d3d3d',

  barTextColor: '#00003a',
  barSelectedColor: '#2e29ff',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#c9c9c9',
  inputTextColor: '#00003a',
  inputBorderRadius: 8,
});
