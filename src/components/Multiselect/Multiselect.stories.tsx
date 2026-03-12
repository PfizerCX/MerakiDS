import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Multiselect } from './Multiselect';

const sampleOptions = [
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4' },
];

const meta: Meta<typeof Multiselect> = {
  title: 'Components/Multiselect',
  component: Multiselect,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    chips: { control: 'boolean' },
    options: { table: { disable: true } },
  },
  args: {
    label: 'Multiselect Label',
    placeholder: 'Choose Option...',
    helperText: 'Caption Label',
    error: false,
    disabled: false,
    required: true,
    chips: false,
    options: sampleOptions,
  },
};

export default meta;

type Story = StoryObj<typeof Multiselect>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: ['item-2'],
  },
};

export const WithChips: Story = {
  args: {
    defaultValue: ['item-1', 'item-3'],
    chips: true,
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: 'This field is required',
    defaultValue: ['item-1'],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);
    return <Multiselect {...args} value={value} onChange={setValue} />;
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 496 }}>
      <Multiselect
        label="Multiselect Label"
        helperText="Caption Label"
        required
        options={sampleOptions}
      />
      <Multiselect
        label="Multiselect Label"
        helperText="Caption Label"
        required
        defaultValue={['item-2']}
        options={sampleOptions}
      />
      <Multiselect
        label="Multiselect Label"
        helperText="Caption Label"
        disabled
        required
        options={sampleOptions}
      />
      <Multiselect
        label="Multiselect Label"
        helperText="This field is required"
        error
        errorText="This field is required"
        required
        defaultValue={['item-1']}
        options={sampleOptions}
      />
      <Multiselect
        label="Multiselect Label"
        helperText="Caption Label"
        required
        chips
        defaultValue={['item-1', 'item-3']}
        options={sampleOptions}
      />
    </div>
  ),
};
