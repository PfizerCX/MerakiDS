import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Close } from '../../icons/Close';

const modalBase: React.CSSProperties = {
  background: 'var(--color-layer-1)',
  border: '1px solid var(--color-outline-variant)',
  borderRadius: 'var(--radius-3)',
  overflow: 'hidden',
  maxWidth: 707,
  width: '100%',
  fontFamily: 'var(--font-family-sans)',
  color: 'var(--color-on-background)',
};

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the overlay is visible',
    },
    onClose: { action: 'close' },
  },
  args: {
    open: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

/* ---------------------------------------------------------------------------
   Stacked Modal — compact dialog with headline, body, and CTA buttons
   --------------------------------------------------------------------------- */

function StackedModalDemo({ onClose }: { onClose?: () => void }) {
  return (
    <div style={{ ...modalBase, maxWidth: 335 }}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20, padding: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ margin: 0, fontSize: 'var(--font-size-headline-s)', fontWeight: 'var(--font-weight-medium)', lineHeight: 1.2 }}>
              Headline Here
            </p>
            <p style={{ margin: 0, fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-regular)', lineHeight: 1.2, color: 'var(--color-on-surface)' }}>
              Write a helpful and concise body copy 3–4 lines of text maximum. We're in relentless pursuit of breakthroughs.
            </p>
          </div>
        </div>
        <IconButton
          variant="text"
          size="sm"
          icon={<Close size={20} />}
          aria-label="Close"
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16 }}
        />
      </div>
      <div style={{ display: 'flex', gap: 12, padding: 20 }}>
        <Button variant="primary" size="md">Button Label</Button>
        <Button variant="secondary" size="md">Button Label</Button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Modal Container — wider dialog with title, scrollable body, and optional CTA
   --------------------------------------------------------------------------- */

function ModalContainerDemo({ onClose }: { onClose?: () => void }) {
  const bodyText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div style={{ ...modalBase, display: 'flex', flexDirection: 'column', gap: 8, height: 400, padding: 'var(--component-inset-padding)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
        <p style={{ margin: 0, flex: 1, fontSize: 'var(--font-size-title-lg)', fontWeight: 'var(--font-weight-medium)', lineHeight: 1.2 }}>
          Modal Window Title
        </p>
        <IconButton
          variant="text"
          size="sm"
          icon={<Close size={20} />}
          aria-label="Close"
          onClick={onClose}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <p style={{ margin: 0, fontSize: 'var(--font-size-body-lg)', lineHeight: 1.2 }}>{bodyText}</p>
          <p style={{ margin: 0, fontSize: 'var(--font-size-body-lg)', lineHeight: 1.2 }}>{bodyText}</p>
          <p style={{ margin: 0, fontSize: 'var(--font-size-body-m)', lineHeight: 1.25, color: 'var(--color-on-surface-variant)' }}>{bodyText}</p>
          <p style={{ margin: 0, fontSize: 'var(--font-size-body-m)', lineHeight: 1.25, color: 'var(--color-on-surface-variant)' }}>{bodyText}</p>
        </div>
        <Button variant="secondary" size="md" style={{ alignSelf: 'flex-start' }}>Button Label</Button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Stories
   --------------------------------------------------------------------------- */

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 32 }}>
        <Button onClick={() => setOpen(true)}>Open Overlay</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <StackedModalDemo onClose={() => setOpen(false)} />
        </Overlay>
      </div>
    );
  },
};

export const WithStackedModal: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 32 }}>
        <Button onClick={() => setOpen(true)}>Open Stacked Modal</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <StackedModalDemo onClose={() => setOpen(false)} />
        </Overlay>
      </div>
    );
  },
};

export const WithModalContainer: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 32 }}>
        <Button onClick={() => setOpen(true)}>Open Modal Container</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <ModalContainerDemo onClose={() => setOpen(false)} />
        </Overlay>
      </div>
    );
  },
};

export const Preview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      <div
        style={{
          position: 'relative',
          height: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-scrim)',
          borderRadius: 'var(--radius-1)',
          overflow: 'hidden',
        }}
      >
        <StackedModalDemo />
      </div>
      <div
        style={{
          position: 'relative',
          height: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-scrim)',
          borderRadius: 'var(--radius-1)',
          overflow: 'hidden',
        }}
      >
        <ModalContainerDemo />
      </div>
    </div>
  ),
};
