import React from 'react';
import type { Preview } from '@storybook/react';
import merakiTheme from './theme';
import '../src/fonts/fonts.css';
import '../src/tokens/tokens.css';

const colorSetOptions = [
  { value: '', title: 'Default' },
  { value: 'blue', title: 'Blue' },
  { value: 'cyan', title: 'Cyan' },
  { value: 'teal', title: 'Teal' },
  { value: 'green', title: 'Green' },
  { value: 'yellow', title: 'Yellow' },
  { value: 'orange', title: 'Orange' },
  { value: 'red', title: 'Red' },
  { value: 'magenta', title: 'Magenta' },
  { value: 'violet', title: 'Violet' },
  { value: 'gray', title: 'Gray' },
];

const preview: Preview = {
  initialGlobals: {
    theme: 'light',
    cornerMode: 'round',
    colorPrimary: '',
    colorSecondary: '',
    colorTertiary: '',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    cornerMode: {
      name: 'Corners',
      description: 'Sharp or rounded corners',
      defaultValue: 'round',
      toolbar: {
        icon: 'component',
        items: [
          { value: 'round', title: 'Rounded' },
          { value: 'sharp', title: 'Sharp' },
        ],
        dynamicTitle: true,
      },
    },
    colorPrimary: {
      name: 'Primary',
      description: 'Primary color set',
      defaultValue: '',
      toolbar: {
        icon: 'paintbrush',
        items: colorSetOptions,
        dynamicTitle: true,
      },
    },
    colorSecondary: {
      name: 'Secondary',
      description: 'Secondary color set',
      defaultValue: '',
      toolbar: {
        icon: 'paintbrush',
        items: colorSetOptions,
        dynamicTitle: true,
      },
    },
    colorTertiary: {
      name: 'Tertiary',
      description: 'Tertiary color set',
      defaultValue: '',
      toolbar: {
        icon: 'paintbrush',
        items: colorSetOptions,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const g = context.globals as Record<string, string>;
      const wrapperProps: Record<string, string> = {};
      if (g.theme) wrapperProps['data-theme'] = g.theme;
      if (g.cornerMode) wrapperProps['data-corner-mode'] = g.cornerMode;
      if (g.colorPrimary) wrapperProps['data-color-primary'] = g.colorPrimary;
      if (g.colorSecondary) wrapperProps['data-color-secondary'] = g.colorSecondary;
      if (g.colorTertiary) wrapperProps['data-color-tertiary'] = g.colorTertiary;
      return React.createElement(
        'div',
        {
          ...wrapperProps,
          style: {
            minHeight: '100%',
            padding: '1rem',
            background: 'var(--color-background)',
            color: 'var(--color-on-background)',
          },
        },
        React.createElement(Story)
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    docs: {
      theme: merakiTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'surface', value: '#f0f0f0' },
        { name: 'dark', value: '#00003a' },
      ],
    },
  },
};

export default preview;
