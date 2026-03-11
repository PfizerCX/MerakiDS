import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';
import type { NavCategoryData, NavItemData } from './Navigation';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Globe } from '../../icons/Globe';
import { Link } from '../../icons/Link';
import { Email } from '../../icons/Email';

const sampleCategories: NavCategoryData[] = [
  {
    title: 'Products',
    items: [
      { label: 'Product Overview', href: '#' },
      { label: 'Clinical Trials', href: '#' },
      { label: 'Safety Data', href: '#' },
      { label: 'Dosing Guide', href: '#' },
      { label: 'Resources', href: '#' },
    ],
  },
  {
    title: 'Patients',
    items: [
      { label: 'Getting Started', href: '#' },
      { label: 'Support Programs', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Find a Doctor', href: '#' },
      { label: 'Stories', href: '#' },
    ],
  },
  {
    title: 'Healthcare Providers',
    items: [
      { label: 'Efficacy Data', href: '#' },
      { label: 'Mechanism of Action', href: '#' },
      { label: 'Prescribing Info', href: '#' },
      { label: 'Peer Resources', href: '#' },
      { label: 'Webinars', href: '#' },
    ],
  },
  {
    title: 'About',
    items: [
      { label: 'Our Mission', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Newsroom', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
];

const sampleRegulatoryLinks: NavItemData[] = [
  { label: 'Prescribing Information', href: '#', external: true },
  { label: 'Patient Information', href: '#', external: true },
  { label: 'Use(s)', href: '#' },
  { label: 'Important Safety Information', href: '#' },
  { label: 'Healthcare Professionals', href: '#' },
];

const SampleLogo = () => (
  <div
    style={{
      width: 112,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-family-sans)',
      fontWeight: 'var(--font-weight-bold)' as never,
      fontSize: 20,
      color: 'var(--color-primary)',
      letterSpacing: '-0.5px',
    }}
  >
    Meraki
  </div>
);

const SmallLogo = () => (
  <div
    style={{
      width: 88,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-family-sans)',
      fontWeight: 'var(--font-weight-bold)' as never,
      fontSize: 16,
      color: 'var(--color-primary)',
      letterSpacing: '-0.5px',
    }}
  >
    Meraki
  </div>
);

const SocialIcons = ({ inverted = false }: { inverted?: boolean }) => (
  <>
    <IconButton variant="secondary" size="sm" inverted={inverted} icon={<Globe size={20} />} aria-label="Facebook" />
    <IconButton variant="secondary" size="sm" inverted={inverted} icon={<Link size={20} />} aria-label="Instagram" />
    <IconButton variant="secondary" size="sm" inverted={inverted} icon={<Email size={20} />} aria-label="X" />
  </>
);

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    colorway: {
      control: 'select',
      options: ['default', 'dark', 'transparent'],
      description: 'Color scheme of the navigation',
    },
    open: {
      control: 'boolean',
      description: 'Controlled open state of the navigation panel',
    },
  },
  args: {
    colorway: 'default',
    open: false,
    logo: <SampleLogo />,
    categories: sampleCategories,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const DefaultClosed: Story = {
  args: {
    open: false,
  },
};

export const DefaultOpen: Story = {
  args: {
    open: true,
    hvaAction: (
      <Button variant="primary" style={{ width: '100%' }}>
        High Value Action
      </Button>
    ),
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />,
  },
};

export const WithHeaderCta: Story = {
  args: {
    open: true,
    hvaCta: (
      <Button variant="secondary" size="md">
        HVA Button
      </Button>
    ),
    hvaAction: (
      <Button variant="primary" style={{ width: '100%' }}>
        High Value Action
      </Button>
    ),
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />,
  },
};

export const DarkClosed: Story = {
  args: {
    colorway: 'dark',
    open: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkOpen: Story = {
  args: {
    colorway: 'dark',
    open: true,
    hvaAction: (
      <Button variant="primary" style={{ width: '100%' }}>
        High Value Action
      </Button>
    ),
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons inverted />,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const TransparentClosed: Story = {
  args: {
    colorway: 'transparent',
    open: false,
  },
};

export const TransparentOpen: Story = {
  args: {
    colorway: 'transparent',
    open: true,
    hvaAction: (
      <Button variant="primary" style={{ width: '100%' }}>
        High Value Action
      </Button>
    ),
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />,
  },
};

export const AllColorways: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        <h3 style={{ padding: '16px 24px', margin: 0, fontFamily: 'var(--font-family-sans)' }}>
          Default (Closed)
        </h3>
        <Navigation
          colorway="default"
          logo={<SampleLogo />}
          categories={sampleCategories}
        />
      </div>
      <div style={{ background: '#000' }}>
        <h3 style={{ padding: '16px 24px', margin: 0, color: '#fff', fontFamily: 'var(--font-family-sans)' }}>
          Dark (Closed)
        </h3>
        <Navigation
          colorway="dark"
          logo={<SampleLogo />}
          categories={sampleCategories}
        />
      </div>
      <div>
        <h3 style={{ padding: '16px 24px', margin: 0, fontFamily: 'var(--font-family-sans)' }}>
          Transparent (Closed)
        </h3>
        <Navigation
          colorway="transparent"
          logo={<SampleLogo />}
          categories={sampleCategories}
        />
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    open: true,
    hvaAction: (
      <Button variant="primary" style={{ width: '100%' }}>
        High Value Action
      </Button>
    ),
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Resize the browser window to see the navigation switch between vertical (mobile/tablet, < 1024px) and horizontal (desktop, >= 1024px) layouts.',
      },
    },
  },
};
