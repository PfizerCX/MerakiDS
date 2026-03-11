import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CookiePreferenceCenter } from './CookiePreferenceCenter';
import { Button } from '../Button';

const meta: Meta<typeof CookiePreferenceCenter> = {
  title: 'Components/CookiePreferenceCenter',
  component: CookiePreferenceCenter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: { control: 'boolean' },
    defaultMarketing: { table: { disable: true } },
    defaultAnalytics: { table: { disable: true } },
    defaultPersonalization: { table: { disable: true } },
    title: { control: 'text' },
    body: { control: 'text' },
    essentialLabel: { control: 'text' },
    marketingLabel: { control: 'text' },
    analyticsLabel: { control: 'text' },
    personalizationLabel: { control: 'text' },
    alwaysActiveLabel: { control: 'text' },
    essentialExplanation: { control: 'text' },
    marketingExplanation: { control: 'text' },
    analyticsExplanation: { control: 'text' },
    personalizationExplanation: { control: 'text' },
    rejectAllLabel: { control: 'text' },
    saveAndAcceptLabel: { control: 'text' },
    poweredByLabel: { control: 'text' },
    oneTrustLabel: { control: 'text' },
    onClose: { table: { disable: true } },
    onRejectAll: { table: { disable: true } },
    onSaveAndAccept: { table: { disable: true } },
    style: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    open: true,
    onClose: () => console.log('Close'),
    onRejectAll: () => console.log('Reject All'),
    onSaveAndAccept: (prefs) => console.log('Save and Accept', prefs),
    defaultMarketing: false,
    defaultAnalytics: false,
    defaultPersonalization: false,
    title: 'We Care About Your Privacy',
    body: 'Cookies and similar technologies typically collect information about how you use a website such as pages and content you view, information you submit, digital tools you use, and links you click. Depending on your interactions with us, this information may suggest certain details about your health, which may be considered sensitive.',
    essentialLabel: 'Essential Cookies',
    marketingLabel: 'Marketing Cookies',
    analyticsLabel: 'Analytics Cookies',
    personalizationLabel: 'Personalization Cookies',
    alwaysActiveLabel: 'Always Active',
    essentialExplanation: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are set in response to user actions like setting privacy preferences or logging in. Blocking them via the browser may affect site functionality. They do not store any personally identifiable information.',
    marketingExplanation: 'Marketing cookies help us share content with you that you may find interesting and relevant.',
    analyticsExplanation: 'Analytics cookies measure website use to learn what content is most useful to users and to help us improve it.',
    personalizationExplanation: 'Copy to be determined once a Personalization Cookie is warranted.',
    rejectAllLabel: 'Reject All',
    saveAndAcceptLabel: 'Save and Accept Changes',
    poweredByLabel: 'Powered by ',
    oneTrustLabel: 'onetrust',
  },
};

export default meta;

type Story = StoryObj<typeof CookiePreferenceCenter>;

export const Default: Story = {
  args: {
    open: true,
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};

export const Interactive: Story = {
  render: function InteractivePreferenceCenter() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" size="md" onClick={() => setOpen(true)}>
          Open Cookie Preferences
        </Button>
        <CookiePreferenceCenter
          open={open}
          onClose={() => setOpen(false)}
          onRejectAll={() => {
            console.log('Reject All');
            setOpen(false);
          }}
          onSaveAndAccept={(prefs) => {
            console.log('Save and Accept', prefs);
            setOpen(false);
          }}
        />
      </>
    );
  },
};
