import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';
import type { CountryOption } from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    error: false,
    disabled: false,
    required: true,
  },
};

export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {};

export const WithDefaultCountry: Story = {
  args: {
    defaultCountry: 'GB',
    defaultValue: '7911123456',
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Include area code',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: 'Please enter a valid phone number',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '5551234567',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('US');
    return (
      <div>
        <PhoneInput
          {...args}
          value={phone}
          onChange={setPhone}
          country={country}
          onCountryChange={(c: CountryOption) => setCountry(c.code)}
        />
        <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
          Country: {country} · Number: {phone}
        </p>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 496 }}>
      <PhoneInput label="Phone Number" required />
      <PhoneInput
        label="Phone Number"
        required
        defaultValue="5551234567"
      />
      <PhoneInput
        label="Phone Number"
        required
        helperText="Include area code"
      />
      <PhoneInput
        label="Phone Number"
        required
        error
        errorText="Please enter a valid phone number"
      />
      <PhoneInput
        label="Phone Number"
        required
        disabled
        defaultValue="5551234567"
      />
    </div>
  ),
};
