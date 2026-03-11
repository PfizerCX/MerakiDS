import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { Fpo } from '../../icons/Fpo';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    warning: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Input Label',
    caption: 'Optional Caption Label',
    error: false,
    warning: false,
    success: false,
    disabled: false,
    required: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 496 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <Fpo size={24} />,
  },
};

export const Entered: Story = {
  args: {
    defaultValue: 'Value Label',
    icon: <Fpo size={24} />,
  },
};

export const Error: Story = {
  args: {
    defaultValue: 'Value Label',
    error: true,
  },
};

export const Warning: Story = {
  args: {
    defaultValue: 'Value Label',
    warning: true,
  },
};

export const Success: Story = {
  args: {
    defaultValue: 'Value Label',
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: <Fpo size={24} />,
  },
};

export const DisabledWithValue: Story = {
  args: {
    defaultValue: 'Value Label',
    disabled: true,
    icon: <Fpo size={24} />,
  },
};

export const WithoutCaption: Story = {
  args: {
    caption: undefined,
  },
};

export const NotRequired: Story = {
  args: {
    required: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 496 }}>
      <TextInput
        label="Input Label"
        caption="Optional Caption Label"
        required
        icon={<Fpo size={24} />}
      />
      <TextInput
        label="Input Label"
        caption="Optional Caption Label"
        required
        defaultValue="Value Label"
        icon={<Fpo size={24} />}
      />
      <TextInput
        label="Input Label"
        caption="Optional Caption Label"
        required
        disabled
        icon={<Fpo size={24} />}
      />
      <TextInput
        label="Input Label"
        caption="Optional Caption Label"
        required
        defaultValue="Value Label"
        error
      />
      <TextInput
        label="Input Label"
        caption="Optional Caption Label"
        required
        defaultValue="Value Label"
        warning
      />
      <TextInput
        label="Input Label"
        caption="Optional Caption Label"
        required
        defaultValue="Value Label"
        success
      />
    </div>
  ),
};
