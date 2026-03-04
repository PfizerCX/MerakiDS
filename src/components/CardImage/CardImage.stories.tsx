import type { Meta, StoryObj } from '@storybook/react';
import { CardImage } from './CardImage';
import { Button } from '../Button/Button';

const sampleImage =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80';

const meta: Meta<typeof CardImage> = {
  title: 'Components/CardImage',
  component: CardImage,
  tags: ['autodocs'],
  argTypes: {
    imageVariant: {
      control: 'select',
      options: ['base', 'large', 'overlap'],
    },
    emphasized: { control: 'boolean' },
    headline: { control: 'text' },
    body: { control: 'text' },
    disclaimer: { control: 'text' },
    actions: { control: false },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'Sample image',
    headline: 'Headline Here',
    body: "Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",
    disclaimer: '*Disclaimer Text',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 325 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardImage>;

export const Base: Story = {
  args: {
    imageVariant: 'base',
    actions: <Button variant="secondary">Button Label</Button>,
  },
};

export const BaseEmphasized: Story = {
  args: {
    imageVariant: 'base',
    emphasized: true,
    actions: (
      <Button variant="secondary" inverted>
        Button Label
      </Button>
    ),
  },
};

export const Large: Story = {
  args: {
    imageVariant: 'large',
    headline:
      'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this here',
    body: undefined,
    actions: <Button variant="secondary">Button Label</Button>,
  },
};

export const LargeEmphasized: Story = {
  args: {
    imageVariant: 'large',
    emphasized: true,
    headline:
      'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this here',
    body: undefined,
    actions: (
      <Button variant="secondary" inverted>
        Button Label
      </Button>
    ),
  },
};

export const Overlap: Story = {
  args: {
    imageVariant: 'overlap',
    headline:
      'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this',
    body: undefined,
    actions: <Button variant="secondary">Button Label</Button>,
  },
};

export const OverlapEmphasized: Story = {
  args: {
    imageVariant: 'overlap',
    emphasized: true,
    headline:
      'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this',
    body: undefined,
    actions: (
      <Button variant="secondary" inverted>
        Button Label
      </Button>
    ),
  },
};

export const AllVariants: Story = {
  decorators: [
    () => (
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <CardImage
          imageSrc={sampleImage}
          imageAlt="Sample"
          imageVariant="base"
          headline="Headline Here"
          body="Write a helpful and concise body copy 3-4 lines of text maximum."
          actions={<Button variant="secondary">Button Label</Button>}
          disclaimer="*Disclaimer Text"
          style={{ width: 325 }}
        />
        <CardImage
          imageSrc={sampleImage}
          imageAlt="Sample"
          imageVariant="base"
          emphasized
          headline="Headline Here"
          body="Write a helpful and concise body copy 3-4 lines of text maximum."
          actions={
            <Button variant="secondary" inverted>
              Button Label
            </Button>
          }
          disclaimer="*Disclaimer Text"
          style={{ width: 325 }}
        />
        <CardImage
          imageSrc={sampleImage}
          imageAlt="Sample"
          imageVariant="large"
          headline="Write a helpful and concise body copy with 4 lines of text maximum."
          actions={<Button variant="secondary">Button Label</Button>}
          disclaimer="*Disclaimer Text"
          style={{ width: 325 }}
        />
        <CardImage
          imageSrc={sampleImage}
          imageAlt="Sample"
          imageVariant="overlap"
          headline="Write a helpful and concise body copy with 4 lines of text maximum."
          actions={<Button variant="secondary">Button Label</Button>}
          disclaimer="*Disclaimer Text"
          style={{ width: 325 }}
        />
      </div>
    ),
  ],
};
