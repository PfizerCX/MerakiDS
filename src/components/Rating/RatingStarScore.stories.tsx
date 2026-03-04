import type { Meta, StoryObj } from '@storybook/react';
import { RatingStarScore } from './Rating';

const meta: Meta<typeof RatingStarScore> = {
  title: 'Components/Rating/StarScore',
  component: RatingStarScore,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    value: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    readOnly: { control: 'boolean' },
    compact: { control: 'boolean' },
    ratingCount: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Input Label',
    required: true,
    readOnly: false,
    compact: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof RatingStarScore>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: 3 },
};

export const HalfRating: Story = {
  args: { defaultValue: 2.5 },
};

export const Display: Story = {
  args: {
    value: 3,
    readOnly: true,
    ratingCount: '(14 ratings)',
  },
};

export const CompactDisplay: Story = {
  args: {
    value: 4.5,
    readOnly: true,
    compact: true,
    ratingCount: '(8 ratings)',
  },
};

export const Disabled: Story = {
  args: { defaultValue: 2, disabled: true },
};
