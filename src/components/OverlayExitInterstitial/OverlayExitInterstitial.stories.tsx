import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OverlayExitInterstitial } from './OverlayExitInterstitial';
import { Button } from '../Button/Button';

const meta: Meta<typeof OverlayExitInterstitial> = {
  title: 'Components/OverlayExitInterstitial',
  component: OverlayExitInterstitial,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the overlay is visible',
    },
    headline: {
      control: 'text',
      description: 'Headline text displayed at the top of the dialog',
    },
    body: {
      control: 'text',
      description: 'Body content below the buttons',
    },
    continueLabel: {
      control: 'text',
      description: 'Label for the primary continue button',
    },
    cancelLabel: {
      control: 'text',
      description: 'Label for the secondary cancel button',
    },
    showScrim: {
      control: 'boolean',
      description: 'Whether to display the scrim backdrop',
    },
  },
  args: {
    open: true,
    headline:
      'You are now leaving lorem ipsum dolor sit amet consectetur. Massa in blandit sapien viverra a facilisi.',
    body: 'Lorem ipsum dolor sit amet consectetur. Elit tincidunt nisl fermentum eu. Egestas ut fermentum morbi aenean lorem ac netus mollis sapien. Ultrices nibh orci nulla nibh vestibulum ultrices eu. Elit in arcu eu netus justo tellus a orci tempor. Quis quis velit blandit rhoncus. Sapien fermentum pulvinar sagittis elementum feugiat a venenatis. Ac consequat et auctor egestas hendrerit a pharetra.',
    continueLabel: 'Continue',
    cancelLabel: 'Cancel',
    showScrim: true,
    container: null,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof OverlayExitInterstitial>;

export const Default: Story = {};

export const WithoutScrim: Story = {
  args: { showScrim: false },
};

export const WithDocumentLinks: Story = {
  args: {
    links: [
      { label: 'Example of a Document Selection Link', href: '#link-1' },
      { label: 'Example of a Document Selection Link', href: '#link-2' },
      { label: 'Example of a Document Selection Link', href: '#link-3' },
    ],
  },
};

export const WithAllLinks: Story = {
  args: {
    links: [
      { label: 'Example of a Document Selection Link', href: '#link-1' },
      { label: 'Example of a Document Selection Link', href: '#link-2' },
      { label: 'Example of a Document Selection Link', href: '#link-3' },
      { label: 'Example of a Document Selection Link', href: '#link-4' },
      { label: 'Example of a Document Selection Link', href: '#link-5' },
    ],
  },
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 64 }}>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Exit Interstitial
        </Button>
        <OverlayExitInterstitial
          open={open}
          headline="You are now leaving this site. Are you sure you want to continue?"
          body="By clicking continue, you will be redirected to an external website that is not operated by us. We are not responsible for the content or privacy practices of external sites."
          continueLabel="Continue"
          cancelLabel="Cancel"
          onContinue={() => {
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          links={[
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' },
          ]}
        />
      </div>
    );
  },
};

export const DialogOnly: Story = {
  args: {
    showScrim: false,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
