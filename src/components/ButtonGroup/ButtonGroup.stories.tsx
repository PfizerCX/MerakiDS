import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the buttons',
    },
    fill: {
      control: 'boolean',
      description:
        'When true, child buttons stretch to fill the available width equally',
    },
  },
  args: {
    orientation: 'horizontal',
    fill: false,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button Label</Button>
      <Button>Button Label</Button>
    </ButtonGroup>
  ),
};

export const HorizontalFill: Story = {
  args: { fill: true },
  render: (args) => (
    <div style={{ width: '100%' }}>
      <ButtonGroup {...args}>
        <Button>Button Label</Button>
        <Button>Button Label</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button Label</Button>
      <Button>Button Label</Button>
    </ButtonGroup>
  ),
};

export const VerticalFill: Story = {
  args: { orientation: 'vertical', fill: true },
  render: (args) => (
    <div style={{ width: 400 }}>
      <ButtonGroup {...args}>
        <Button>Button Label</Button>
        <Button>Button Label</Button>
      </ButtonGroup>
    </div>
  ),
};

export const MixedVariants: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </ButtonGroup>
  ),
};

export const AllOrientationsAndSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600, fontFamily: 'sans-serif' }}>
          Horizontal — Hug
        </p>
        <ButtonGroup orientation="horizontal">
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600, fontFamily: 'sans-serif' }}>
          Horizontal — Fill
        </p>
        <ButtonGroup orientation="horizontal" fill>
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600, fontFamily: 'sans-serif' }}>
          Vertical — Hug
        </p>
        <ButtonGroup orientation="vertical">
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
      <div style={{ width: 400 }}>
        <p style={{ marginBottom: 8, fontWeight: 600, fontFamily: 'sans-serif' }}>
          Vertical — Fill
        </p>
        <ButtonGroup orientation="vertical" fill>
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};
