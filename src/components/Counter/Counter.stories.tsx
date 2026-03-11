import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: false,
      table: { disable: true },
    },
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    label: 'Input Label',
    helperText: '',
    value: 1,
    min: 0,
    max: 10,
    step: 1,
    disabled: false,
    required: true,
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

const CounterControlled = (args: React.ComponentProps<typeof Counter>) => {
  const [value, setValue] = useState(args.value ?? 1);
  return <Counter {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <CounterControlled {...args} />,
};

export const WithHelperText: Story = {
  render: (args) => <CounterControlled {...args} />,
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
        <Counter
          label="Input Label"
          required
          value={val1}
          min={0}
          max={10}
          onChange={setVal1}
        />
        <Counter
          label="Input Label"
          required
          helperText="Caption Label"
          value={val2}
          min={0}
          max={10}
          onChange={setVal2}
        />
        <Counter
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
