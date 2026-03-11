import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchField } from './SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['search', 'icon'],
    },
    size: {
      control: 'select',
      options: ['small', 'base', 'large'],
    },
    disabled: { control: 'boolean' },
    showSearchIcon: { control: 'boolean' },
    showMicrophoneButton: { control: 'boolean' },
    showFilterButton: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
  args: {
    variant: 'search',
    size: 'base',
    placeholder: 'Search',
    disabled: false,
    showSearchIcon: true,
    showMicrophoneButton: true,
    showFilterButton: true,
    showCloseButton: true,
  },
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    showMicrophoneButton: false,
    showFilterButton: false,
    showCloseButton: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const IconVariant: Story = {
  args: {
    variant: 'icon',
    size: 'base',
  },
};

export const IconVariantLarge: Story = {
  args: {
    variant: 'icon',
    size: 'large',
  },
};

export const IconVariantSmall: Story = {
  args: {
    variant: 'icon',
    size: 'small',
  },
};

export const IconVariantDisabled: Story = {
  args: {
    variant: 'icon',
    size: 'base',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <SearchField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 650 }}>
      <SearchField
        size="large"
        showMicrophoneButton
        showFilterButton
        showCloseButton
      />
      <SearchField
        size="base"
        showMicrophoneButton
        showFilterButton
        showCloseButton
      />
      <SearchField size="small" />
    </div>
  ),
};

export const AllIconSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <SearchField variant="icon" size="large" />
      <SearchField variant="icon" size="base" />
      <SearchField variant="icon" size="small" />
    </div>
  ),
};
