import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Info } from '../../icons/Info';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: 'This is a helper message',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: 'This field is required',
    value: '',
  },
};

export const WithIcon: Story = {
  args: {
    rightIcon: <Info size={20} />,
  },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled input' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 360 }}>
      <Input label="Default" placeholder="Enter text" />
      <Input label="With helper" placeholder="Enter text" helperText="Optional helper text" />
      <Input label="Error" placeholder="Enter text" error errorText="This field is required" />
      <Input label="Disabled" placeholder="Disabled" disabled />
    </div>
  ),
};
