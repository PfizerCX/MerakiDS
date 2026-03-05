import type { Meta, StoryObj } from '@storybook/react';
import { CookieOverlay } from './CookieOverlay';

const meta: Meta<typeof CookieOverlay> = {
  title: 'Components/CookieOverlay',
  component: CookieOverlay,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Stack buttons vertically or horizontally',
    },
  },
  args: {
    layout: 'vertical',
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
