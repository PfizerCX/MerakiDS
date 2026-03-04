import type { Meta, StoryObj } from '@storybook/react';
import { PageBreakLegacy } from './PageBreakLegacy';

const sampleImage =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80';

const meta: Meta<typeof PageBreakLegacy> = {
  title: 'Components/PageBreakLegacy',
  component: PageBreakLegacy,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'radio',
      options: ['full-bleed', 'inset'],
    },
    imagePosition: {
      control: 'radio',
      options: ['start', 'end'],
    },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    headline: { control: 'text' },
    body: { control: 'text' },
    actionLabel: { control: 'text' },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'Healthcare professional',
    headline: 'Headline Here',
    body: "Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",
    actionLabel: 'Button Label',
    attribution: { title: 'Title', subtitle: 'Subtitle' },
  },
};

export default meta;

type Story = StoryObj<typeof PageBreakLegacy>;

export const VerticalFullBleed: Story = {
  args: {
    layout: 'vertical',
    variant: 'full-bleed',
    imagePosition: 'start',
    style: { maxWidth: 375 },
  },
};

export const VerticalInset: Story = {
  args: {
    layout: 'vertical',
    variant: 'inset',
    imagePosition: 'start',
    style: { maxWidth: 335 },
  },
};

export const HorizontalFullBleed: Story = {
  args: {
    layout: 'horizontal',
    variant: 'full-bleed',
    imagePosition: 'start',
    style: { maxWidth: 767 },
  },
};

export const HorizontalInset: Story = {
  args: {
    layout: 'horizontal',
    variant: 'inset',
    imagePosition: 'start',
    style: { maxWidth: 712 },
  },
};

export const ImageEnd: Story = {
  args: {
    layout: 'horizontal',
    variant: 'full-bleed',
    imagePosition: 'end',
    style: { maxWidth: 767 },
  },
};

export const WithoutAttribution: Story = {
  args: {
    layout: 'vertical',
    variant: 'full-bleed',
    imagePosition: 'start',
    attribution: undefined,
    style: { maxWidth: 375 },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        <h3 style={{ marginBottom: 16 }}>Vertical — Full Bleed</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <PageBreakLegacy
            layout="vertical"
            variant="full-bleed"
            imagePosition="start"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 375 }}
          />
          <PageBreakLegacy
            layout="vertical"
            variant="full-bleed"
            imagePosition="end"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 375 }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 16 }}>Vertical — Inset</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <PageBreakLegacy
            layout="vertical"
            variant="inset"
            imagePosition="start"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 335 }}
          />
          <PageBreakLegacy
            layout="vertical"
            variant="inset"
            imagePosition="end"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 335 }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 16 }}>Horizontal — Full Bleed</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <PageBreakLegacy
            layout="horizontal"
            variant="full-bleed"
            imagePosition="start"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 767 }}
          />
          <PageBreakLegacy
            layout="horizontal"
            variant="full-bleed"
            imagePosition="end"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 767 }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 16 }}>Horizontal — Inset</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <PageBreakLegacy
            layout="horizontal"
            variant="inset"
            imagePosition="start"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 712 }}
          />
          <PageBreakLegacy
            layout="horizontal"
            variant="inset"
            imagePosition="end"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            attribution={{ title: 'Title', subtitle: 'Subtitle' }}
            style={{ maxWidth: 712 }}
          />
        </div>
      </div>
    </div>
  ),
};
