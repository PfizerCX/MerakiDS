import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'positive', 'negative', 'cautionary', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
  args: {
    children: 'Badge',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Positive: Story = {
  args: { variant: 'positive', children: 'Recommended' },
};

export const Negative: Story = {
  args: { variant: 'negative', children: 'Error' },
};

export const Cautionary: Story = {
  args: { variant: 'cautionary', children: 'Warning' },
};

export const Neutral: Story = {
  args: { variant: 'neutral', children: 'Info' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="positive">Positive</Badge>
      <Badge variant="negative">Negative</Badge>
      <Badge variant="cautionary">Cautionary</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};
