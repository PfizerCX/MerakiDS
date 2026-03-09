import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    showBack: {
      control: 'boolean',
      description: 'Render a "Back" return link instead of the full path',
    },
    backLabel: {
      control: 'text',
      description: 'Label for the back button',
    },
    maxItems: {
      control: { type: 'number', min: 0, max: 10 },
      description:
        'Maximum visible items before collapsing behind "…". Set 0 to disable.',
    },
  },
  args: {
    showBack: false,
    maxItems: 4,
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Return: Story = {
  args: {
    showBack: true,
    backLabel: 'Back',
  },
};

export const OneLevel: Story = {
  args: {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Current Page' },
    ],
  },
};

export const TwoLevel: Story = {
  args: {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Second Level', href: '#' },
      { label: 'Current Page' },
    ],
  },
};

export const ThreeLevel: Story = {
  args: {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Second Level', href: '#' },
      { label: 'Third Level', href: '#' },
      { label: 'Current Page' },
    ],
  },
};

export const Collapsed: Story = {
  name: '3+ Levels (collapsed)',
  args: {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Second Level', href: '#' },
      { label: 'Third Level', href: '#' },
      { label: 'Fourth Level', href: '#' },
      { label: 'Current Page' },
    ],
    maxItems: 4,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <Breadcrumbs showBack backLabel="Back" />
      <Breadcrumbs
        items={[
          { label: 'First Level', href: '#' },
          { label: 'Current Page' },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'First Level', href: '#' },
          { label: 'Second Level', href: '#' },
          { label: 'Current Page' },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'First Level', href: '#' },
          { label: 'Second Level', href: '#' },
          { label: 'Third Level', href: '#' },
          { label: 'Current Page' },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'First Level', href: '#' },
          { label: 'Second Level', href: '#' },
          { label: 'Third Level', href: '#' },
          { label: 'Fourth Level', href: '#' },
          { label: 'Current Page' },
        ]}
        maxItems={4}
      />
    </div>
  ),
};
