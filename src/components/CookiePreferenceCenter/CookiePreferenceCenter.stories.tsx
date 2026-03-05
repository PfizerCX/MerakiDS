import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CookiePreferenceCenter } from './CookiePreferenceCenter';
import { Button } from '../Button';

const meta: Meta<typeof CookiePreferenceCenter> = {
  title: 'Components/CookiePreferenceCenter',
  component: CookiePreferenceCenter,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is visible',
    },
  },
  args: {
    open: true,
    onClose: () => console.log('Close'),
    onRejectAll: () => console.log('Reject All'),
    onSaveAndAccept: (prefs) => console.log('Save and Accept', prefs),
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

export const WithDefaults: Story = {
  args: {
    open: true,
    defaultMarketing: true,
    defaultAnalytics: false,
    defaultPersonalization: false,
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
