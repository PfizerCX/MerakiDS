import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multi'],
      description: 'Selection mode — single allows one item, multi allows many',
    },
    label: {
      control: 'text',
      description: 'Optional label displayed above the control',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

const fiveOptions = [
  { value: 'opt1', label: 'Label' },
  { value: 'opt2', label: 'Label' },
  { value: 'opt3', label: 'Label' },
  { value: 'opt4', label: 'Label' },
  { value: 'opt5', label: 'Label' },
];

export const SingleSelect: Story = {
  args: {
    label: 'Single-Select Label',
    options: fiveOptions,
    mode: 'single',
    defaultValue: 'opt1',
  },
};

export const MultiSelect: Story = {
  args: {
    label: 'Multi-Select Label',
    options: fiveOptions,
    mode: 'multi',
    defaultValue: ['opt1', 'opt2'],
  },
};

export const Boolean: Story = {
  args: {
    label: 'Boolean Label',
    options: [
      { value: 'yes', label: 'Label' },
      { value: 'no', label: 'Label' },
    ],
    mode: 'single',
    defaultValue: 'yes',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    options: fiveOptions,
    mode: 'single',
    defaultValue: 'opt1',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <SegmentedControl
        label="Single-Select Label"
        options={fiveOptions}
        mode="single"
        defaultValue="opt1"
      />
      <SegmentedControl
        label="Multi-Select Label"
        options={fiveOptions}
        mode="multi"
        defaultValue={['opt1', 'opt2']}
      />
      <SegmentedControl
        label="Boolean Label"
        options={[
          { value: 'yes', label: 'Label' },
          { value: 'no', label: 'Label' },
        ]}
        mode="single"
        defaultValue="yes"
      />
    </div>
  ),
};
