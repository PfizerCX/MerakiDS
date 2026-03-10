import type { Meta, StoryObj } from '@storybook/react';
import { CardNumber } from './CardNumber';

const meta: Meta<typeof CardNumber> = {
  title: 'Components/CardNumber',
  component: CardNumber,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'solid', 'outline', 'outline-inverse'],
    },
    headlineLead: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    style: { table: { disable: true } },
    onTooltipClick: { table: { disable: true } },
  },
  args: {
    variant: 'base',
    number: '1',
    headline: 'Headline Max 2 Lines',
    body: 'Optional Units / Description',
    footnote: 'Optional Footnote',
    headlineLead: false,
    showTooltip: true,
    style: { width: 250 },
  },
};

export default meta;

type Story = StoryObj<typeof CardNumber>;

export const Default: Story = {};

export const HeadlineLead: Story = {
  args: {
    headlineLead: true,
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const SolidHeadlineLead: Story = {
  args: {
    variant: 'solid',
    headlineLead: true,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const OutlineHeadlineLead: Story = {
  args: {
    variant: 'outline',
    headlineLead: true,
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

export const OutlineInverseHeadlineLead: Story = {
  args: {
    variant: 'outline-inverse',
    headlineLead: true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#2e29ff', padding: 32, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutTooltip: Story = {
  args: {
    showTooltip: false,
  },
};

export const WithoutBody: Story = {
  args: {
    body: undefined,
  },
};

export const WithoutFootnote: Story = {
  args: {
    footnote: undefined,
  },
};

export const LargeNumber: Story = {
  args: {
    number: '1,234',
    headline: 'Total Patients',
    body: 'Active enrollments',
    footnote: 'Updated daily',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardNumber
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
        />
        <CardNumber
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
          headlineLead
        />
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardNumber
          variant="solid"
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
        />
        <CardNumber
          variant="solid"
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
          headlineLead
        />
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardNumber
          variant="outline"
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
        />
        <CardNumber
          variant="outline"
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
          headlineLead
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
        <CardNumber
          variant="outline-inverse"
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
        />
        <CardNumber
          variant="outline-inverse"
          style={{ width: 250 }}
          number="1"
          headline="Headline Max 2 Lines"
          body="Optional Units / Description"
          footnote="Optional Footnote"
          headlineLead
        />
      </div>
    </div>
  ),
};
