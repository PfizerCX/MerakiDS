import type { Meta, StoryObj } from '@storybook/react';
import { HeroCorporate } from './HeroCorporate';
import { Button } from '../Button/Button';

const sampleImage =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80';

const meta: Meta<typeof HeroCorporate> = {
  title: 'Components/HeroCorporate',
  component: HeroCorporate,
  tags: ['autodocs'],
  argTypes: {
    headline: { control: 'text' },
    subheadline: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    actions: { control: false },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'Hero background',
    headline: 'Write a clear and eye-catching headline.',
    subheadline:
      'Write a helpful and concise subheadline. 1-2 lines of text maximum.',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HeroCorporate>;

export const Default: Story = {
  args: {
    actions: (
      <Button variant="primary" size="lg" inverted>
        Button Label
      </Button>
    ),
  },
};

export const WithoutButton: Story = {
  args: {
    actions: undefined,
  },
};

export const WithMultipleActions: Story = {
  args: {
    actions: (
      <>
        <Button variant="primary" size="lg" inverted>
          Primary Action
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Secondary Action
        </Button>
      </>
    ),
  },
};
