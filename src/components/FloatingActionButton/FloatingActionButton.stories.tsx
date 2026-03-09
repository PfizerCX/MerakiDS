import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './FloatingActionButton';

import { Add } from '../../icons/Add';
import { Bookmark } from '../../icons/Bookmark';
import { Compose } from '../../icons/Compose';
import { Download } from '../../icons/Download';
import { Email } from '../../icons/Email';
import { Home } from '../../icons/Home';
import { Notifications } from '../../icons/Notifications';
import { PhoneCall } from '../../icons/PhoneCall';
import { Search } from '../../icons/Search';
import { Settings } from '../../icons/Settings';
import { Share } from '../../icons/Share';

const iconMap: Record<string, (size: number) => React.ReactNode> = {
  PhoneCall: (s) => <PhoneCall size={s} />,
  Add: (s) => <Add size={s} />,
  Bookmark: (s) => <Bookmark size={s} />,
  Compose: (s) => <Compose size={s} />,
  Download: (s) => <Download size={s} />,
  Email: (s) => <Email size={s} />,
  Home: (s) => <Home size={s} />,
  Notifications: (s) => <Notifications size={s} />,
  Search: (s) => <Search size={s} />,
  Settings: (s) => <Settings size={s} />,
  Share: (s) => <Share size={s} />,
};

const iconSizeForFab = { sm: 24, md: 24, lg: 36 } as const;

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'tonal'],
      description: 'Visual style of the FAB',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'FAB size — maps to 32 px / 40 px / 48 px',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: Object.fromEntries(
        Object.entries(iconMap).map(([k, fn]) => [k, fn(24)])
      ),
      description: 'Icon displayed inside the FAB',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    icon: 'PhoneCall' as unknown as React.ReactNode,
    'aria-label': 'Call',
  },
};

export default meta;

type Story = StoryObj<typeof FloatingActionButton>;

export const Primary: Story = {};

export const Tonal: Story = {
  args: { variant: 'tonal' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg', icon: <PhoneCall size={36} /> },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledTonal: Story = {
  args: { variant: 'tonal', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Primary */}
      <div>
        <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Primary</p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <FloatingActionButton
            size="sm"
            icon={<PhoneCall size={24} />}
            aria-label="Call"
          />
          <FloatingActionButton
            size="md"
            icon={<PhoneCall size={24} />}
            aria-label="Call"
          />
          <FloatingActionButton
            size="lg"
            icon={<PhoneCall size={36} />}
            aria-label="Call"
          />
          <FloatingActionButton
            size="md"
            icon={<PhoneCall size={24} />}
            aria-label="Call"
            disabled
          />
        </div>
      </div>

      {/* Tonal */}
      <div>
        <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Tonal</p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <FloatingActionButton
            variant="tonal"
            size="sm"
            icon={<PhoneCall size={24} />}
            aria-label="Call"
          />
          <FloatingActionButton
            variant="tonal"
            size="md"
            icon={<PhoneCall size={24} />}
            aria-label="Call"
          />
          <FloatingActionButton
            variant="tonal"
            size="lg"
            icon={<PhoneCall size={36} />}
            aria-label="Call"
          />
          <FloatingActionButton
            variant="tonal"
            size="md"
            icon={<PhoneCall size={24} />}
            aria-label="Call"
            disabled
          />
        </div>
      </div>

      {/* Different Icons */}
      <div>
        <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Icon examples</p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <FloatingActionButton icon={<Add size={24} />} aria-label="Add" />
          <FloatingActionButton icon={<Compose size={24} />} aria-label="Compose" />
          <FloatingActionButton icon={<Search size={24} />} aria-label="Search" />
          <FloatingActionButton
            variant="tonal"
            icon={<Email size={24} />}
            aria-label="Email"
          />
          <FloatingActionButton
            variant="tonal"
            icon={<Settings size={24} />}
            aria-label="Settings"
          />
        </div>
      </div>
    </div>
  ),
};
