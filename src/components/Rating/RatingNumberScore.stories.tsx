import type { Meta, StoryObj } from '@storybook/react';
import { RatingNumberScore } from './Rating';

const meta: Meta<typeof RatingNumberScore> = {
  title: 'Components/Rating/NumberScore',
  component: RatingNumberScore,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    value: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    leftLabel: { control: 'text' },
    middleLabel: { control: 'text' },
    rightLabel: { control: 'text' },
    showLabels: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Input Label',
    required: true,
    leftLabel: 'Left Label',
    middleLabel: 'Middle Label',
    rightLabel: 'Right Label',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof RatingNumberScore>;

export const Default: Story = {};

export const WithSelection: Story = {
  args: { defaultValue: 8 },
};

export const WithoutLabels: Story = {
  args: {
    showLabels: false,
    leftLabel: undefined,
    middleLabel: undefined,
    rightLabel: undefined,
  },
};

export const Disabled: Story = {
  args: { defaultValue: 5, disabled: true },
};
