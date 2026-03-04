import type { Meta, StoryObj } from '@storybook/react';
import { ProgressTimeline } from './ProgressTimeline';

const meta: Meta<typeof ProgressTimeline> = {
  title: 'Components/ProgressTimeline',
  component: ProgressTimeline,
  tags: ['autodocs'],
  argTypes: {
    totalSteps: {
      control: { type: 'range', min: 2, max: 7, step: 1 },
      description: 'Total number of steps',
    },
    currentStep: {
      control: { type: 'range', min: 1, max: 7, step: 1 },
      description: 'Current active step (1-indexed)',
    },
    showLabels: {
      control: 'boolean',
      description: 'Show step labels',
    },
  },
  args: {
    totalSteps: 3,
    currentStep: 1,
    showLabels: true,
  },
};

export default meta;

type Story = StoryObj<typeof ProgressTimeline>;

export const ThreeSteps: Story = {};

export const FourSteps: Story = {
  args: {
    totalSteps: 4,
  },
};

export const FiveSteps: Story = {
  args: {
    totalSteps: 5,
  },
};

export const WithCustomLabels: Story = {
  args: {
    totalSteps: 4,
    currentStep: 2,
    labels: ['Account', 'Profile', 'Review', 'Complete'],
  },
};

export const HiddenLabels: Story = {
  args: {
    totalSteps: 3,
    showLabels: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <ProgressTimeline totalSteps={3} currentStep={1} />
      <ProgressTimeline totalSteps={4} currentStep={2} />
      <ProgressTimeline totalSteps={5} currentStep={3} />
    </div>
  ),
};
