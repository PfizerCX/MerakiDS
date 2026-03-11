import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateSegmented, type DateSegmentedValue } from './DateSegmented';

const meta: Meta<typeof DateSegmented> = {
  title: 'Components/DateSegmented',
  component: DateSegmented,
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['MDY', 'DMY', 'YMD'],
    },
    showMonth: { control: 'boolean' },
    showDate: { control: 'boolean' },
    showYear: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    groupLabel: 'Group Label',
    format: 'MDY',
    showMonth: true,
    showDate: true,
    showYear: true,
    required: false,
    disabled: false,
    error: false,
  },
};

export default meta;

type Story = StoryObj<typeof DateSegmented>;

function DateSegmentedControlled(props: React.ComponentProps<typeof DateSegmented>) {
  const [value, setValue] = useState<DateSegmentedValue>({
    month: 3,
    date: 23,
    year: 1996,
  });
  return <DateSegmented {...props} value={value} onChange={setValue} />;
}

export const Default: Story = {
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const MonthDateYear: Story = {
  args: {
    format: 'MDY',
    groupLabel: 'Group Label',
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const DateMonthYear: Story = {
  args: {
    format: 'DMY',
    groupLabel: 'Group Label',
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const YearMonthDate: Story = {
  args: {
    format: 'YMD',
    groupLabel: 'Group Label',
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const AllFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <DateSegmentedControlled groupLabel="Group Label" format="MDY" />
      <DateSegmentedControlled groupLabel="Group Label" format="DMY" />
      <DateSegmentedControlled groupLabel="Group Label" format="YMD" />
    </div>
  ),
};

export const Required: Story = {
  args: {
    required: true,
    groupLabel: 'Date of Birth',
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const WithHelperText: Story = {
  args: {
    groupLabel: 'Date of Birth',
    helperText: 'Select your date of birth',
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const ErrorState: Story = {
  args: {
    groupLabel: 'Date of Birth',
    error: true,
    errorText: 'Please select a valid date',
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const Disabled: Story = {
  args: {
    groupLabel: 'Date of Birth',
    disabled: true,
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const MonthOnly: Story = {
  args: {
    groupLabel: 'Select Month',
    showDate: false,
    showYear: false,
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};

export const MonthAndYear: Story = {
  args: {
    groupLabel: 'Month & Year',
    showDate: false,
  },
  render: (args) => <DateSegmentedControlled {...args} />,
};
