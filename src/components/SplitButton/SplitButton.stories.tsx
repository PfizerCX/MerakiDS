import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';
import type { SplitButtonOption } from './SplitButton';

import { PhoneCall } from '../../icons/PhoneCall';
import { Download } from '../../icons/Download';
import { Email } from '../../icons/Email';
import { Share } from '../../icons/Share';
import { Settings } from '../../icons/Settings';

const iconOptions: Record<string, React.ReactNode | undefined> = {
  None: undefined,
  PhoneCall: <PhoneCall size={24} />,
  Download: <Download size={24} />,
  Email: <Email size={24} />,
  Share: <Share size={24} />,
  Settings: <Settings size={24} />,
};

const sampleOptions: SplitButtonOption[] = [
  { value: 'action-1', label: 'Secondary Action 1' },
  { value: 'action-2', label: 'Secondary Action 2' },
  { value: 'action-3', label: 'Secondary Action 3' },
  { value: 'action-4', label: 'Secondary Action 4' },
  { value: 'action-5', label: 'Secondary Action 5' },
];

const meta: Meta<typeof SplitButton> = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Button size — maps to 40 px / 52 px height',
    },
    inverted: {
      control: 'boolean',
      description: 'Inverted color scheme for use on dark backgrounds',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    leftIcon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Icon displayed before the label',
    },
  },
  args: {
    children: 'Button Label',
    size: 'md',
    inverted: false,
    disabled: false,
    options: sampleOptions,
  },
};

export default meta;

type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    leftIcon: 'PhoneCall' as unknown as React.ReactNode,
    children: 'Button Label',
  },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const LargeWithIcon: Story = {
  args: {
    size: 'lg',
    leftIcon: 'PhoneCall' as unknown as React.ReactNode,
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Inverted: Story = {
  args: { inverted: true },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InvertedWithIcon: Story = {
  args: {
    inverted: true,
    leftIcon: 'PhoneCall' as unknown as React.ReactNode,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InvertedDisabled: Story = {
  args: { inverted: true, disabled: true },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <SplitButton options={sampleOptions}>Button Label</SplitButton>
        <SplitButton
          options={sampleOptions}
          leftIcon={<PhoneCall size={24} />}
        >
          Button Label
        </SplitButton>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <SplitButton size="lg" options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton
          size="lg"
          options={sampleOptions}
          leftIcon={<PhoneCall size={24} />}
        >
          Button Label
        </SplitButton>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <SplitButton disabled options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton
          disabled
          options={sampleOptions}
          leftIcon={<PhoneCall size={24} />}
        >
          Button Label
        </SplitButton>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          backgroundColor: '#00003a',
          padding: 24,
          borderRadius: 8,
        }}
      >
        <SplitButton inverted options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton
          inverted
          options={sampleOptions}
          leftIcon={<PhoneCall size={24} />}
        >
          Button Label
        </SplitButton>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          backgroundColor: '#00003a',
          padding: 24,
          borderRadius: 8,
        }}
      >
        <SplitButton inverted size="lg" options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton
          inverted
          size="lg"
          options={sampleOptions}
          leftIcon={<PhoneCall size={24} />}
        >
          Button Label
        </SplitButton>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          backgroundColor: '#00003a',
          padding: 24,
          borderRadius: 8,
        }}
      >
        <SplitButton inverted disabled options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton
          inverted
          disabled
          options={sampleOptions}
          leftIcon={<PhoneCall size={24} />}
        >
          Button Label
        </SplitButton>
      </div>
    </div>
  ),
};
