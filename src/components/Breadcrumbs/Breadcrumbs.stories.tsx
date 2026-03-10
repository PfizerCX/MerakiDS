import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

type Levels = 'Return' | '1 Level' | '2 Level' | '3 Level' | '3+ Levels';

const levelPresets: Record<Levels, BreadcrumbsProps> = {
  Return: {
    showBack: true,
    backLabel: 'Back',
  },
  '1 Level': {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Current Page' },
    ],
  },
  '2 Level': {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Second Level', href: '#' },
      { label: 'Current Page' },
    ],
  },
  '3 Level': {
    items: [
      { label: 'First Level', href: '#' },
      { label: 'Second Level', href: '#' },
      { label: 'Third Level', href: '#' },
      { label: 'Current Page' },
    ],
  },
  '3+ Levels': {
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

type StoryArgs = BreadcrumbsProps & { levels: Levels };

const meta: Meta<StoryArgs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    levels: {
      control: 'select',
      options: ['Return', '1 Level', '2 Level', '3 Level', '3+ Levels'],
      description: 'Preconfigured breadcrumb depth matching the Figma variants',
    },
    showBack: { table: { disable: true } },
    backLabel: { table: { disable: true } },
    backHref: { table: { disable: true } },
    onBack: { table: { disable: true } },
    items: { table: { disable: true } },
    maxItems: { table: { disable: true } },
  },
  args: {
    levels: '2 Level',
  },
  render: ({ levels, ...rest }) => {
    const preset = levelPresets[levels] ?? {};
    return <Breadcrumbs {...preset} {...rest} />;
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Return: Story = {
  args: { levels: 'Return' },
};

export const OneLevel: Story = {
  args: { levels: '1 Level' },
};

export const TwoLevel: Story = {
  args: { levels: '2 Level' },
};

export const ThreeLevel: Story = {
  args: { levels: '3 Level' },
};

export const ThreePlusLevels: Story = {
  name: '3+ Levels',
  args: { levels: '3+ Levels' },
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
