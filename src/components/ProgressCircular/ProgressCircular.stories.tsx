import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircular } from './ProgressCircular';

const meta: Meta<typeof ProgressCircular> = {
  title: 'Components/ProgressCircular',
  component: ProgressCircular,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0–100)',
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Size of the circular indicator',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate spinning animation',
    },
    complete: {
      control: 'boolean',
      description: 'Complete state with check icon',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage text in center',
    },
  },
  args: {
    value: 50,
    size: 'lg',
    showPercentage: true,
  },
};

export default meta;

type Story = StoryObj<typeof ProgressCircular>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm', value: 50 },
};

export const Large: Story = {
  args: { size: 'lg', value: 75 },
};

export const ZeroPercent: Story = {
  args: { value: 0, size: 'lg' },
};

export const Complete: Story = {
  args: { value: 100, complete: true, size: 'lg' },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, size: 'lg' },
};

export const NoPercentage: Story = {
  args: { value: 60, showPercentage: false, size: 'lg' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ marginBottom: 12, fontWeight: 500 }}>Small</p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <ProgressCircular size="sm" value={0} />
          <ProgressCircular size="sm" value={25} />
          <ProgressCircular size="sm" value={50} />
          <ProgressCircular size="sm" value={75} />
          <ProgressCircular size="sm" value={100} />
          <ProgressCircular size="sm" value={100} complete />
          <ProgressCircular size="sm" indeterminate />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 12, fontWeight: 500 }}>Large</p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <ProgressCircular size="lg" value={0} />
          <ProgressCircular size="lg" value={25} />
          <ProgressCircular size="lg" value={50} />
          <ProgressCircular size="lg" value={75} />
          <ProgressCircular size="lg" value={100} />
          <ProgressCircular size="lg" value={100} complete />
          <ProgressCircular size="lg" indeterminate />
        </div>
      </div>
    </div>
  ),
};
