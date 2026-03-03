import type { Meta, StoryObj } from '@storybook/react';
import { BasicBlock } from './BasicBlock';

const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=800&h=600&fit=crop';

const meta: Meta<typeof BasicBlock> = {
  title: 'Components/BasicBlock',
  component: BasicBlock,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    imagePosition: {
      control: 'select',
      options: ['first', 'last'],
    },
    headline: { control: 'text' },
    body: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
  },
  args: {
    headline: 'Headline Here',
    body: "Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",
    imageSrc: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image',
  },
};

export default meta;

type Story = StoryObj<typeof BasicBlock>;

export const HorizontalImageLast: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'last',
  },
};

export const HorizontalImageFirst: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'first',
  },
};

export const VerticalImageLast: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'last',
  },
};

export const VerticalImageFirst: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'first',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
      <BasicBlock
        orientation="horizontal"
        imagePosition="last"
        headline="Horizontal — Image Last"
        body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
        imageSrc={PLACEHOLDER_IMAGE}
      />
      <BasicBlock
        orientation="horizontal"
        imagePosition="first"
        headline="Horizontal — Image First"
        body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
        imageSrc={PLACEHOLDER_IMAGE}
      />
      <BasicBlock
        orientation="vertical"
        imagePosition="last"
        headline="Vertical — Image Last"
        body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
        imageSrc={PLACEHOLDER_IMAGE}
      />
      <BasicBlock
        orientation="vertical"
        imagePosition="first"
        headline="Vertical — Image First"
        body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
        imageSrc={PLACEHOLDER_IMAGE}
      />
    </div>
  ),
};
