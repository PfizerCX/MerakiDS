import type { Meta, StoryObj } from '@storybook/react';
import { CookieOverlay } from './CookieOverlay';

const meta: Meta<typeof CookieOverlay> = {
  title: 'Components/CookieOverlay',
  component: CookieOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '530px', transform: 'scale(1)' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    layout: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    title: { control: 'text' },
    privacyPolicyUrl: { control: 'text' },
    privacyPolicyLabel: { control: 'text' },
    rejectAllLabel: { control: 'text' },
    acceptAllLabel: { control: 'text' },
    preferencesLabel: { control: 'text' },
    style: { table: { disable: true } },
    className: { table: { disable: true } },
    body: { table: { disable: true } },
    onRejectAll: { table: { disable: true } },
    onAcceptAll: { table: { disable: true } },
    onOpenPreferences: { table: { disable: true } },
  },
  args: {
    layout: 'vertical',
    title: 'We Care About Your Privacy',
    privacyPolicyUrl: '#',
    privacyPolicyLabel: 'Privacy Policy',
    rejectAllLabel: 'Reject All',
    acceptAllLabel: 'Accept All',
    preferencesLabel: 'Cookies Preferences',
    style: { bottom: '50px' },
    onRejectAll: () => console.log('Reject All'),
    onAcceptAll: () => console.log('Accept All'),
    onOpenPreferences: () => console.log('Cookies Preferences'),
  },
};

export default meta;

type Story = StoryObj<typeof CookieOverlay>;

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
};

export const WithCustomPrivacyUrl: Story = {
  args: {
    layout: 'vertical',
    privacyPolicyUrl: 'https://www.pfizer.com/privacy-policy',
  },
};
