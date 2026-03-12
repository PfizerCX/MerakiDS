import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OverlayExitInterstitial } from './OverlayExitInterstitial';
import { Button } from '../Button/Button';

const SAMPLE_HEADLINE =
  'You are now leaving lorem ipsum dolor sit amet consectetur. Massa in blandit sapien viverra a facilisi.';

const SAMPLE_BODY =
  'Lorem ipsum dolor sit amet consectetur. Elit tincidunt nisl fermentum eu. Egestas ut fermentum morbi aenean lorem ac netus mollis sapien. Ultrices nibh orci nulla nibh vestibulum ultrices eu. Elit in arcu eu netus justo tellus a orci tempor. Quis quis velit blandit rhoncus. Sapien fermentum pulvinar sagittis elementum feugiat a venenatis. Ac consequat et auctor egestas hendrerit a pharetra.';

const SAMPLE_LINKS = [
  { label: 'Example of a Document Selection Link', href: '#link-1' },
  { label: 'Example of a Document Selection Link', href: '#link-2' },
  { label: 'Example of a Document Selection Link', href: '#link-3' },
];

const meta: Meta<typeof OverlayExitInterstitial> = {
  title: 'Components/OverlayExitInterstitial',
  component: OverlayExitInterstitial,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    headline: { control: 'text' },
    body: { control: 'text' },
    continueLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    showScrim: { control: 'boolean' },
    container: { table: { disable: true } },
  },
  args: {
    open: true,
    headline: SAMPLE_HEADLINE,
    body: SAMPLE_BODY,
    continueLabel: 'Continue',
    cancelLabel: 'Cancel',
    showScrim: true,
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '4em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OverlayExitInterstitial>;

export const Default: Story = {
  render: (args) => <OverlayExitInterstitial {...args} container={null} />,
};

export const WithoutScrim: Story = {
  args: { showScrim: false },
  render: (args) => <OverlayExitInterstitial {...args} container={null} />,
};

export const WithDocumentLinks: Story = {
  args: { links: SAMPLE_LINKS },
  render: (args) => <OverlayExitInterstitial {...args} container={null} />,
};

export const WithAllLinks: Story = {
  args: {
    links: [
      ...SAMPLE_LINKS,
      { label: 'Example of a Document Selection Link', href: '#link-4' },
      { label: 'Example of a Document Selection Link', href: '#link-5' },
    ],
  },
  render: (args) => <OverlayExitInterstitial {...args} container={null} />,
};

export const Interactive: Story = {
  parameters: { layout: 'fullscreen' },
  render: function InteractiveStory() {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '4em' }}>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Exit Interstitial
        </Button>
        <OverlayExitInterstitial
          open={open}
          headline="You are now leaving this site. Are you sure you want to continue?"
          body="By clicking continue, you will be redirected to an external website that is not operated by us. We are not responsible for the content or privacy practices of external sites."
          onContinue={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          links={[
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' },
          ]}
          container={null}
        />
      </div>
    );
  },
};
