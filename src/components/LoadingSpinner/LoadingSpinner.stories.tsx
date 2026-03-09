import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Spinner size',
    },
    mode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Color mode (light or dark background)',
    },
  },
  args: {
    size: 'sm',
    mode: 'light',
  },
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};

export const SmallLight: Story = {
  args: { size: 'sm', mode: 'light' },
};

export const LargeLight: Story = {
  args: { size: 'lg', mode: 'light' },
};

export const SmallDark: Story = {
  args: { size: 'sm', mode: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const LargeDark: Story = {
  args: { size: 'lg', mode: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ marginBottom: 12, fontWeight: 500 }}>Light mode</p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <LoadingSpinner size="sm" mode="light" />
          <LoadingSpinner size="lg" mode="light" />
        </div>
      </div>
      <div
        style={{
          background: '#00003a',
          padding: 24,
          borderRadius: 8,
        }}
      >
        <p style={{ marginBottom: 12, fontWeight: 500, color: '#fff' }}>Dark mode</p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <LoadingSpinner size="sm" mode="dark" />
          <LoadingSpinner size="lg" mode="dark" />
        </div>
      </div>
    </div>
  ),
};
