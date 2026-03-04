import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Input Label',
    value: 1,
    min: 0,
    max: 10,
    step: 1,
    required: true,
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const StepperControlled = (args: React.ComponentProps<typeof Stepper>) => {
  const [value, setValue] = useState(args.value ?? 1);
  return <Stepper {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <StepperControlled {...args} />,
};

export const WithHelperText: Story = {
  render: (args) => <StepperControlled {...args} />,
  args: {
    helperText: 'Caption Label',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 1,
  },
};

export const AllStates: Story = {
  render: () => {
    const [val1, setVal1] = useState(1);
    const [val2, setVal2] = useState(3);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <Stepper
          label="Input Label"
          required
          value={val1}
          min={0}
          max={10}
          onChange={setVal1}
        />
        <Stepper
          label="Input Label"
          required
          helperText="Caption Label"
          value={val2}
          min={0}
          max={10}
          onChange={setVal2}
        />
        <Stepper
          label="Input Label"
          required
          disabled
          value={1}
          min={0}
          max={10}
        />
      </div>
    );
  },
};
