import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const sampleThumbnail =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80';

const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['inset', 'full'],
    },
    title: { control: 'text' },
    thumbnailSrc: { control: 'text' },
    thumbnailAlt: { control: 'text' },
    onPlay: {
      control: false,
      table: { disable: true },
    },
  },
  args: {
    thumbnailSrc: sampleThumbnail,
    thumbnailAlt: 'Video thumbnail',
    title: 'Video Title',
  },
};

export default meta;

type Story = StoryObj<typeof Video>;

/* ---------------------------------------------------------------------------
   Inset variant (default)
   --------------------------------------------------------------------------- */

export const Default: Story = {
  args: {
    variant: 'inset',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 767 }}>
        <Story />
      </div>
    ),
  ],
};

/* ---------------------------------------------------------------------------
   Full variant
   --------------------------------------------------------------------------- */

export const Full: Story = {
  args: {
    variant: 'full',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 767 }}>
        <Story />
      </div>
    ),
  ],
};

/* ---------------------------------------------------------------------------
   Without title
   --------------------------------------------------------------------------- */

export const NoTitle: Story = {
  args: {
    variant: 'inset',
    title: undefined,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 767 }}>
        <Story />
      </div>
    ),
  ],
};

/* ---------------------------------------------------------------------------
   All Variants overview
   --------------------------------------------------------------------------- */

export const AllVariants: Story = {
  decorators: [
    () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <h3 style={{ margin: 0 }}>Inset</h3>
        <div style={{ maxWidth: 767 }}>
          <Video
            variant="inset"
            title="Video Title"
            thumbnailSrc={sampleThumbnail}
            thumbnailAlt="Video thumbnail"
          />
        </div>

        <h3 style={{ margin: 0 }}>Full</h3>
        <div style={{ maxWidth: 767 }}>
          <Video
            variant="full"
            title="Video Title"
            thumbnailSrc={sampleThumbnail}
            thumbnailAlt="Video thumbnail"
          />
        </div>

        <h3 style={{ margin: 0 }}>Without Title</h3>
        <div style={{ maxWidth: 767 }}>
          <Video
            variant="inset"
            thumbnailSrc={sampleThumbnail}
            thumbnailAlt="Video thumbnail"
          />
        </div>
      </div>
    ),
  ],
};
