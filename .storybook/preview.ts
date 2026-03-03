import type { Preview } from '@storybook/react';
import merakiTheme from './theme';
import '../src/fonts/fonts.css';
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
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
