import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

import { Add } from '../../icons/Add';
import { ArrowDown } from '../../icons/ArrowDown';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { ArrowRight } from '../../icons/ArrowRight';
import { ArrowUp } from '../../icons/ArrowUp';
import { Bookmark } from '../../icons/Bookmark';
import { Calendar } from '../../icons/Calendar';
import { Check } from '../../icons/Check';
import { CheckCircle } from '../../icons/CheckCircle';
import { ChevronDown } from '../../icons/ChevronDown';
import { ChevronLeft } from '../../icons/ChevronLeft';
import { ChevronRight } from '../../icons/ChevronRight';
import { Close } from '../../icons/Close';
import { Compose } from '../../icons/Compose';
import { Download } from '../../icons/Download';
import { Email } from '../../icons/Email';
import { Filter } from '../../icons/Filter';
import { Globe } from '../../icons/Globe';
import { HelpCircle } from '../../icons/HelpCircle';
import { Home } from '../../icons/Home';
import { Info } from '../../icons/Info';
import { Link } from '../../icons/Link';
import { Location } from '../../icons/Location';
import { Notifications } from '../../icons/Notifications';
import { PhoneCall } from '../../icons/PhoneCall';
import { Search } from '../../icons/Search';
import { Settings } from '../../icons/Settings';
import { Share } from '../../icons/Share';
import { Star } from '../../icons/Star';
import { Warning } from '../../icons/Warning';

const iconOptions: Record<string, React.ReactNode | undefined> = {
  None: undefined,
  Add: <Add size={20} />,
  ArrowDown: <ArrowDown size={20} />,
  ArrowLeft: <ArrowLeft size={20} />,
  ArrowRight: <ArrowRight size={20} />,
  ArrowUp: <ArrowUp size={20} />,
  Bookmark: <Bookmark size={20} />,
  Calendar: <Calendar size={20} />,
  Check: <Check size={20} />,
  CheckCircle: <CheckCircle size={20} />,
  ChevronDown: <ChevronDown size={20} />,
  ChevronLeft: <ChevronLeft size={20} />,
  ChevronRight: <ChevronRight size={20} />,
  Close: <Close size={20} />,
  Compose: <Compose size={20} />,
  Download: <Download size={20} />,
  Email: <Email size={20} />,
  Filter: <Filter size={20} />,
  Globe: <Globe size={20} />,
  HelpCircle: <HelpCircle size={20} />,
  Home: <Home size={20} />,
  Info: <Info size={20} />,
  Link: <Link size={20} />,
  Location: <Location size={20} />,
  Notifications: <Notifications size={20} />,
  PhoneCall: <PhoneCall size={20} />,
  Search: <Search size={20} />,
  Settings: <Settings size={20} />,
  Share: <Share size={20} />,
  Star: <Star size={20} />,
  Warning: <Warning size={20} />,
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size — maps to 32px / 40px / 52px height',
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
    rightIcon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Icon displayed after the label',
    },
  },
  args: {
    children: 'Button Label',
    variant: 'primary',
    size: 'md',
    inverted: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Text: Story = {
  args: { variant: 'text' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: 'Check' as unknown as React.ReactNode,
    children: 'Confirm',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: 'ArrowRight' as unknown as React.ReactNode,
    children: 'Next',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: 'Check' as unknown as React.ReactNode,
    rightIcon: 'ArrowRight' as unknown as React.ReactNode,
    children: 'Continue',
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const InvertedPrimary: Story = {
  args: { inverted: true },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InvertedSecondary: Story = {
  args: { variant: 'secondary', inverted: true },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InvertedText: Story = {
  args: { variant: 'text', inverted: true },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Base</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="md">Base</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="text" size="sm">Small</Button>
        <Button variant="text" size="md">Base</Button>
        <Button variant="text" size="lg">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="text" disabled>Disabled</Button>
      </div>
    </div>
  ),
};
