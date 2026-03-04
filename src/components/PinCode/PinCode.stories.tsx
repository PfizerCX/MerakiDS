import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PinCode } from './PinCode';

const meta: Meta<typeof PinCode> = {
  title: 'Components/PinCode',
  component: PinCode,
  tags: ['autodocs'],
  argTypes: {
    fields: { control: { type: 'inline-radio' }, options: [4, 6] },
    error: { control: 'boolean' },
    warning: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    mask: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    fields: 4,
  },
};

export default meta;

type Story = StoryObj<typeof PinCode>;

export const Default: Story = {};

export const SixFields: Story = {
  args: { fields: 6 },
};

export const WithError: Story = {
  args: { error: true, errorText: 'Incorrect PIN', defaultValue: '1234' },
};

export const WithWarning: Story = {
  args: { warning: true, warningText: 'PIN is about to expire', defaultValue: '1234' },
};

export const WithSuccess: Story = {
  args: { success: true, successText: 'PIN verified', defaultValue: '1234' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: '0000' },
};

export const Masked: Story = {
  args: { mask: true, defaultValue: '1234' },
};

export const Controlled: Story = {
  render: function ControlledPinCode() {
    const [value, setValue] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <PinCode
          label="Enter PIN"
          value={value}
          onChange={setValue}
          onComplete={(pin) => alert(`PIN entered: ${pin}`)}
        />
        <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 14 }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </p>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <PinCode label="Default" defaultValue="0000" />
      <PinCode label="Error" error errorText="Incorrect PIN" defaultValue="0000" />
      <PinCode label="Warning" warning warningText="PIN is about to expire" defaultValue="0000" />
      <PinCode label="Success" success successText="PIN verified" defaultValue="0000" />
      <PinCode label="Disabled" disabled defaultValue="0000" />
      <PinCode label="Default (6 fields)" fields={6} defaultValue="000000" />
      <PinCode label="Error (6 fields)" fields={6} error errorText="Incorrect PIN" defaultValue="000000" />
      <PinCode label="Disabled (6 fields)" fields={6} disabled defaultValue="000000" />
    </div>
  ),
};
