import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    errorText: { control: 'text' },
    success: { control: 'boolean' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  args: {
    label: 'Input Label',
    placeholder: 'mm/dd/yyyy',
    error: false,
    errorText: '',
    success: false,
    helperText: '',
    disabled: false,
    required: true,
    id: '',
    name: '',
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: new Date(2023, 10, 12),
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: 'Please enter a valid date',
    defaultValue: new Date(2023, 10, 12),
  },
};

export const SuccessState: Story = {
  args: {
    success: true,
    defaultValue: new Date(2023, 10, 12),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Select your date of birth',
  },
};

export const Controlled: Story = {
  render: function ControlledDatePicker() {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ maxWidth: 496 }}>
        <DatePicker
          label="Controlled Date"
          required
          value={date}
          onChange={setDate}
        />
        <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
          Selected: {date ? date.toLocaleDateString() : 'None'}
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
      <DatePicker label="Input Label" required />
      <DatePicker
        label="Input Label"
        required
        defaultValue={new Date(2023, 10, 12)}
      />
      <DatePicker
        label="Input Label"
        required
        error
        errorText="Please enter a valid date"
        defaultValue={new Date(2023, 10, 12)}
      />
      <DatePicker
        label="Input Label"
        required
        success
        defaultValue={new Date(2023, 10, 12)}
      />
      <DatePicker label="Input Label" required disabled />
    </div>
  ),
};
