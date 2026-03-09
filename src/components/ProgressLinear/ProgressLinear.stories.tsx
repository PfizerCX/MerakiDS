import type { Meta, StoryObj } from '@storybook/react';
import { ProgressLinear } from './ProgressLinear';

const meta: Meta<typeof ProgressLinear> = {
  title: 'Components/ProgressLinear',
  component: ProgressLinear,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0–100)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Use indeterminate (looping) animation',
    },
    complete: {
      control: 'boolean',
      description: 'Mark as complete (positive color)',
    },
    progressLabel: {
      control: 'text',
      description: 'Label above the bar',
    },
    contextLabel: {
      control: 'text',
      description: 'Label below the bar',
    },
  },
  args: {
    value: 50,
    progressLabel: 'Uploading…',
    contextLabel: '50% complete',
  },
};

export default meta;

type Story = StoryObj<typeof ProgressLinear>;

export const Default: Story = {};

export const ZeroPercent: Story = {
  args: { value: 0, progressLabel: 'Progress Label', contextLabel: 'Context Label' },
};

export const TwentyFivePercent: Story = {
  args: { value: 25, progressLabel: 'Progress Label', contextLabel: '25% complete' },
};

export const SeventyFivePercent: Story = {
  args: { value: 75, progressLabel: 'Progress Label', contextLabel: '75% complete' },
};

export const OneHundredPercent: Story = {
  args: { value: 100, progressLabel: 'Progress Label', contextLabel: '100% complete' },
};

export const Complete: Story = {
  args: { value: 100, complete: true, progressLabel: 'Upload complete', contextLabel: 'File saved' },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, progressLabel: 'Loading…', contextLabel: 'Please wait' },
};

export const NoLabels: Story = {
  args: { value: 60, progressLabel: undefined, contextLabel: undefined },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>
      <ProgressLinear value={0} progressLabel="0%" contextLabel="Context Label" />
      <ProgressLinear value={25} progressLabel="25%" contextLabel="Context Label" />
      <ProgressLinear value={50} progressLabel="50%" contextLabel="Context Label" />
      <ProgressLinear value={75} progressLabel="75%" contextLabel="Context Label" />
      <ProgressLinear value={100} progressLabel="100%" contextLabel="Context Label" />
      <ProgressLinear value={100} complete progressLabel="Complete" contextLabel="Context Label" />
      <ProgressLinear indeterminate progressLabel="Indeterminate" contextLabel="Context Label" />
    </div>
  ),
};
