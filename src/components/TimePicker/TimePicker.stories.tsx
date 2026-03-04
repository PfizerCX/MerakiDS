import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    timeFormat: {
      control: 'radio',
      options: ['12h', '24h'],
    },
  },
  args: {
    label: 'Input Label',
    placeholder: '--:--',
    required: true,
    timeFormat: '12h',
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: '11:29 AM',
  },
};

export const TwentyFourHour: Story = {
  args: {
    timeFormat: '24h',
    defaultValue: '14:30',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: 'Please select a valid time',
    defaultValue: '11:29 AM',
  },
};

export const SuccessState: Story = {
  args: {
    success: true,
    defaultValue: '11:29 AM',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Select a preferred time',
  },
};

export const Controlled: Story = {
  render: function ControlledTimePicker() {
    const [time, setTime] = useState<string | null>(null);
    return (
      <div style={{ maxWidth: 496 }}>
        <TimePicker
          label="Controlled Time"
          required
          value={time}
          onChange={setTime}
        />
        <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
          Selected: {time ?? 'None'}
        </p>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        maxWidth: 496,
      }}
    >
      <TimePicker label="Input Label" required />
      <TimePicker
        label="Input Label"
        required
        defaultValue="11:29 AM"
      />
      <TimePicker
        label="Input Label"
        required
        error
        errorText="Please select a valid time"
        defaultValue="11:29 AM"
      />
      <TimePicker
        label="Input Label"
        required
        success
        defaultValue="11:29 AM"
      />
      <TimePicker label="Input Label" required disabled />
    </div>
  ),
};
