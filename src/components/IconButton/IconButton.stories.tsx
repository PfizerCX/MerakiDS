import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

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

const iconOptions: Record<string, React.ReactNode> = {
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

const meta: Meta<typeof IconButton> = {
  title: 'Components/Icon Button',
  component: IconButton,
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
      description: 'Button size — sm: 32px, md: 40px, lg: 48px',
    },
    inverted: {
      control: 'boolean',
      description: 'Inverted color scheme for use on dark backgrounds',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Icon element to render inside the button',
    },
  },
  args: {
    icon: 'PhoneCall' as unknown as React.ReactNode,
    variant: 'primary',
    size: 'md',
    inverted: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Text: Story = {
  args: { variant: 'text' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
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
        <IconButton variant="primary" size="sm" icon={<PhoneCall size={20} />} />
        <IconButton variant="primary" size="md" icon={<PhoneCall size={20} />} />
        <IconButton variant="primary" size="lg" icon={<PhoneCall size={24} />} />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="secondary" size="sm" icon={<PhoneCall size={20} />} />
        <IconButton variant="secondary" size="md" icon={<PhoneCall size={20} />} />
        <IconButton variant="secondary" size="lg" icon={<PhoneCall size={24} />} />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="text" size="sm" icon={<PhoneCall size={20} />} />
        <IconButton variant="text" size="md" icon={<PhoneCall size={20} />} />
        <IconButton variant="text" size="lg" icon={<PhoneCall size={24} />} />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="primary" disabled icon={<PhoneCall size={20} />} />
        <IconButton variant="secondary" disabled icon={<PhoneCall size={20} />} />
        <IconButton variant="text" disabled icon={<PhoneCall size={20} />} />
      </div>
    </div>
  ),
};

export const AllInverted: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="primary" size="sm" inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="primary" size="md" inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="primary" size="lg" inverted icon={<PhoneCall size={24} />} />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="secondary" size="sm" inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="secondary" size="md" inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="secondary" size="lg" inverted icon={<PhoneCall size={24} />} />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="text" size="sm" inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="text" size="md" inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="text" size="lg" inverted icon={<PhoneCall size={24} />} />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <IconButton variant="primary" disabled inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="secondary" disabled inverted icon={<PhoneCall size={20} />} />
        <IconButton variant="text" disabled inverted icon={<PhoneCall size={20} />} />
      </div>
    </div>
  ),
};
