import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const MAX_STEPS = 7;
const stepLabelArgTypes = Object.fromEntries(
  Array.from({ length: MAX_STEPS }, (_, i) => [
    `step${i + 1}Label`,
    {
      control: 'text',
      description: `Label for step ${i + 1}`,
      table: {
        category: 'Step labels',
      },
    },
  ])
);

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    totalSteps: {
      control: { type: 'range', min: 2, max: MAX_STEPS, step: 1 },
      description: 'Total number of steps',
    },
    currentStep: {
      control: { type: 'range', min: 1, max: MAX_STEPS, step: 1 },
      description: 'Current active step (1-indexed). Previous steps show as completed.',
    },
    showLabels: {
      control: false,
      table: { disable: true },
      description: 'Show step labels below circles',
    },
    ...stepLabelArgTypes,
  },
  args: {
    totalSteps: 3,
    currentStep: 1,
    showLabels: true,
    step1Label: 'Description',
    step2Label: 'Description',
    step3Label: 'Description',
    step4Label: '',
    step5Label: '',
    step6Label: '',
    step7Label: '',
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

/** Build labels array from individual step label args (step1Label, step2Label, ...). */
function getLabelsFromArgs(args: Record<string, unknown>, totalSteps: number): string[] {
  return Array.from({ length: totalSteps }, (_, i) => {
    const value = args[`step${i + 1}Label`];
    const str = typeof value === 'string' ? value : '';
    return str.trim() || `Step ${i + 1}`;
  });
}

export const ThreeSteps: Story = {
  render: (args) => (
    <Stepper
      {...args}
      labels={getLabelsFromArgs(args as Record<string, unknown>, args.totalSteps ?? 3)}
    />
  ),
};

export const FourSteps: Story = {
  args: { totalSteps: 4 },
  render: (args) => (
    <Stepper
      {...args}
      labels={getLabelsFromArgs(args as Record<string, unknown>, args.totalSteps ?? 4)}
    />
  ),
};

export const FiveSteps: Story = {
  args: { totalSteps: 5 },
  render: (args) => (
    <Stepper
      {...args}
      labels={getLabelsFromArgs(args as Record<string, unknown>, args.totalSteps ?? 5)}
    />
  ),
};

export const WithCustomLabels: Story = {
  args: {
    totalSteps: 4,
    currentStep: 2,
    step1Label: 'Account',
    step2Label: 'Profile',
    step3Label: 'Review',
    step4Label: 'Complete',
  },
  render: (args) => (
    <Stepper
      {...args}
      labels={getLabelsFromArgs(args as Record<string, unknown>, args.totalSteps ?? 4)}
    />
  ),
};

export const StepTwoActive: Story = {
  args: {
    totalSteps: 3,
    currentStep: 2,
    step1Label: 'Description',
    step2Label: 'Description',
    step3Label: 'Description',
  },
  render: (args) => (
    <Stepper
      {...args}
      labels={getLabelsFromArgs(args as Record<string, unknown>, args.totalSteps ?? 3)}
    />
  ),
};

export const StepThreeCompleted: Story = {
  args: {
    totalSteps: 3,
    currentStep: 3,
    step1Label: 'Description',
    step2Label: 'Description',
    step3Label: 'Description',
  },
  render: (args) => (
    <Stepper
      {...args}
      labels={getLabelsFromArgs(args as Record<string, unknown>, args.totalSteps ?? 3)}
    />
  ),
};

export const HiddenLabels: Story = {
  args: {
    totalSteps: 3,
    showLabels: false,
  },
  render: (args) => <Stepper {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <Stepper totalSteps={3} currentStep={1} labels={['Description', 'Description', 'Description']} />
      <Stepper totalSteps={4} currentStep={2} labels={['Description', 'Description', 'Description', 'Description']} />
      <Stepper totalSteps={5} currentStep={3} labels={['Description', 'Description', 'Description', 'Description', 'Description']} />
    </div>
  ),
};
