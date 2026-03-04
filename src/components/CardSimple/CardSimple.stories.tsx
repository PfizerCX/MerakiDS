import type { Meta, StoryObj } from '@storybook/react';
import { CardSimple } from './CardSimple';
import { ArrowLeft } from '../../icons/ArrowLeft';

const meta: Meta<typeof CardSimple> = {
  title: 'Components/CardSimple',
  component: CardSimple,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'solid', 'outline', 'outline-inverse'],
    },
    showBody: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
  args: {
    variant: 'base',
    headline: 'Write a clear and eye-catching headline.',
    body: 'Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.',
    showBody: true,
    showRightIcon: true,
    style: { width: 464 },
  },
};

export default meta;

type Story = StoryObj<typeof CardSimple>;

export const Default: Story = {};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const OutlineInverse: Story = {
  args: {
    variant: 'outline-inverse',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#2e29ff', padding: 32, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <ArrowLeft size={36} style={{ color: 'var(--color-primary)' }} />,
  },
};

export const WithoutBody: Story = {
  args: {
    showBody: false,
  },
};

export const WithoutRightIcon: Story = {
  args: {
    showRightIcon: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardSimple
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardSimple
          variant="solid"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          variant="solid"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardSimple
          variant="outline"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          variant="outline"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>

      <div
        style={{
          backgroundColor: '#2e29ff',
          padding: 32,
          borderRadius: 16,
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <CardSimple
          variant="outline-inverse"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          variant="outline-inverse"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>
    </div>
  ),
};
