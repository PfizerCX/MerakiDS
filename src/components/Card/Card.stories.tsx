import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'outlined'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'elevated',
    padding: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

const sampleContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <h3 style={{ margin: 0, fontSize: 'var(--font-size-title-m)', fontWeight: 500, color: 'var(--color-on-surface)' }}>
      Card Title
    </h3>
    <p style={{ margin: 0, fontSize: 'var(--font-size-body-m)', color: 'var(--color-on-surface-variant)' }}>
      This is a card component from the Meraki Design System. It supports elevated, filled, and outlined variants.
    </p>
    <div>
      <Button size="sm">Action</Button>
    </div>
  </div>
);

export const Elevated: Story = {
  args: { children: sampleContent },
};

export const Filled: Story = {
  args: { variant: 'filled', children: sampleContent },
};

export const Outlined: Story = {
  args: { variant: 'outlined', children: sampleContent },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Card variant="elevated" style={{ width: 280 }}>{sampleContent}</Card>
      <Card variant="filled" style={{ width: 280 }}>{sampleContent}</Card>
      <Card variant="outlined" style={{ width: 280 }}>{sampleContent}</Card>
    </div>
  ),
};
