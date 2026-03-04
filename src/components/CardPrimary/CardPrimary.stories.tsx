import type { Meta, StoryObj } from '@storybook/react';
import { CardPrimary } from './CardPrimary';

const sampleImage =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80';

const meta: Meta<typeof CardPrimary> = {
  title: 'Components/CardPrimary',
  component: CardPrimary,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    headline: { control: 'text' },
    body: { control: 'text' },
    disclaimer: { control: 'text' },
    actionLabel: { control: 'text' },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'People enjoying a meal outdoors',
    headline: 'Headline Here',
    body: "Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",
    disclaimer: '*Disclaimer Text',
    actionLabel: 'Learn more',
  },
};

export default meta;

type Story = StoryObj<typeof CardPrimary>;

export const Default: Story = {};

export const WithoutDisclaimer: Story = {
  args: {
    disclaimer: undefined,
  },
};

export const WithoutImage: Story = {
  args: {
    imageSrc: undefined,
  },
};

export const CustomWidth: Story = {
  args: {
    style: { width: 350 },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <CardPrimary
        imageSrc={sampleImage}
        imageAlt="People enjoying a meal outdoors"
        headline="Headline Here"
        body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
        disclaimer="*Disclaimer Text"
        style={{ width: 250 }}
      />
      <CardPrimary
        imageSrc={sampleImage}
        imageAlt="People enjoying a meal outdoors"
        headline="Without Disclaimer"
        body="This card has no disclaimer text beneath the action button."
        style={{ width: 250 }}
      />
      <CardPrimary
        imageSrc={sampleImage}
        imageAlt="People enjoying a meal outdoors"
        headline="Wider Card"
        body="This card is rendered at a wider width to show responsive behavior."
        disclaimer="*Disclaimer Text"
        style={{ width: 400 }}
      />
    </div>
  ),
};
