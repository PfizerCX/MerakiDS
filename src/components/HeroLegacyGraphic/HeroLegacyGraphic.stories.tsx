import type { Meta, StoryObj } from '@storybook/react';
import { HeroLegacyGraphic } from './HeroLegacyGraphic';
import { Button } from '../Button/Button';

const sampleImage =
  'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80';

const meta: Meta<typeof HeroLegacyGraphic> = {
  title: 'Components/HeroLegacyGraphic',
  component: HeroLegacyGraphic,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    graphic: { control: 'boolean' },
    sidebar: { control: 'boolean' },
    headline: { control: 'text' },
    body: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    graphicIndicator: { control: 'text' },
    graphicSubheadline: { control: 'text' },
    graphicDescription: { control: 'text' },
    attributionTitle: { control: 'text' },
    attributionSubtitle: { control: 'text' },
    actions: { control: false },
  },
  args: {
    graphic: true,
    sidebar: true,
    imageSrc: sampleImage,
    imageAlt: 'Hero background',
    headline: 'Write a clear and eye-catching headline.',
    body: "Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",
    graphicIndicator: '#1',
    graphicSubheadline: 'Write a clear and eye-catching subheadline.',
    graphicDescription:
      '*Write a helpful and concise subheadline 1-3 lines maximum.',
    attributionTitle: 'Title',
    attributionSubtitle: 'Actual [BRAND] Patient',
    actions: <Button>Button Label</Button>,
  },
};

export default meta;

type Story = StoryObj<typeof HeroLegacyGraphic>;

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 767 }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalNoGraphic: Story = {
  args: {
    layout: 'vertical',
    graphic: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const HorizontalNoGraphic: Story = {
  args: {
    layout: 'horizontal',
    graphic: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 767 }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalNoSidebar: Story = {
  args: {
    layout: 'vertical',
    sidebar: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  decorators: [
    () => (
      <div
        style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        <HeroLegacyGraphic
          imageSrc={sampleImage}
          imageAlt="Hero background"
          layout="vertical"
          actions={<Button>Button Label</Button>}
          style={{ width: 375 }}
        />
        <HeroLegacyGraphic
          imageSrc={sampleImage}
          imageAlt="Hero background"
          layout="horizontal"
          actions={<Button>Button Label</Button>}
          style={{ width: 767 }}
        />
      </div>
    ),
  ],
};
