import type { Meta, StoryObj } from '@storybook/react';
import { RatingLikeDislike } from './Rating';

const meta: Meta<typeof RatingLikeDislike> = {
  title: 'Components/Rating/LikeDislike',
  component: RatingLikeDislike,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    value: {
      control: 'select',
      options: [null, 'like', 'dislike'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Input Label',
    required: true,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof RatingLikeDislike>;

export const Default: Story = {};

export const Liked: Story = {
  args: { defaultValue: 'like' },
};

export const Disliked: Story = {
  args: { defaultValue: 'dislike' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
