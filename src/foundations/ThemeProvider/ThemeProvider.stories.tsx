import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';
import { Button } from '../../components/Button';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Foundations/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Wrap your app (or any subtree) with `ThemeProvider` to control theme mode, corner style, and primary/secondary/tertiary color sets. You can also use the Storybook toolbar (Theme, Corners, Primary, Secondary, Tertiary) to try combinations without code.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  args: {},
  render: () => (
    <ThemeProvider>
      <div style={{ padding: 24, background: 'var(--color-surface)', borderRadius: 'var(--radius-2)' }}>
        <p style={{ margin: 0, color: 'var(--color-on-surface)' }}>Uses default theme (light), rounded corners, blue primary.</p>
        <Button style={{ marginTop: 16 }}>Primary button</Button>
      </div>
    </ThemeProvider>
  ),
};

export const DarkMode: Story = {
  args: { theme: 'dark' },
  render: (args) => (
    <ThemeProvider {...args}>
      <div style={{ padding: 24, background: 'var(--color-surface)', borderRadius: 'var(--radius-2)' }}>
        <p style={{ margin: 0, color: 'var(--color-on-surface)' }}>Dark mode with default colors.</p>
        <Button style={{ marginTop: 16 }}>Primary button</Button>
      </div>
    </ThemeProvider>
  ),
};

export const SharpCorners: Story = {
  args: { cornerMode: 'sharp' },
  render: (args) => (
    <ThemeProvider {...args}>
      <div style={{ padding: 24, background: 'var(--color-surface)', borderRadius: 'var(--radius-2)' }}>
        <p style={{ margin: 0, color: 'var(--color-on-surface)' }}>Sharp corners (0–6px radius tokens).</p>
        <Button style={{ marginTop: 16 }}>Primary button</Button>
      </div>
    </ThemeProvider>
  ),
};

export const CustomColorSets: Story = {
  args: {
    colorPrimary: 'teal',
    colorSecondary: 'green',
    colorTertiary: 'orange',
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <div style={{ padding: 24, background: 'var(--color-surface)', borderRadius: 'var(--radius-2)' }}>
        <p style={{ margin: 0, color: 'var(--color-on-surface)' }}>Primary: Teal, Secondary: Green, Tertiary: Orange.</p>
        <Button style={{ marginTop: 16 }}>Primary button</Button>
      </div>
    </ThemeProvider>
  ),
};

export const DarkWithVioletPrimary: Story = {
  args: {
    theme: 'dark',
    colorPrimary: 'violet',
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <div style={{ padding: 24, background: 'var(--color-surface)', borderRadius: 'var(--radius-2)' }}>
        <p style={{ margin: 0, color: 'var(--color-on-surface)' }}>Dark mode with violet primary.</p>
        <Button style={{ marginTop: 16 }}>Primary button</Button>
      </div>
    </ThemeProvider>
  ),
};
