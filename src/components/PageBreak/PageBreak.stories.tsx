import type { Meta, StoryObj } from '@storybook/react';
import { PageBreak } from './PageBreak';
import { Button } from '../Button/Button';

const sampleImage =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80';

const meta: Meta<typeof PageBreak> = {
  title: 'Components/PageBreak',
  component: PageBreak,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    imagePosition: {
      control: 'select',
      options: ['before', 'after'],
    },
    imageDirection: {
      control: 'select',
      options: ['left', 'right'],
    },
    headline: { control: 'text' },
    body: { control: 'text' },
    disclaimer: { control: 'text' },
    imageCaption: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    actions: { control: false },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'Page break image',
    headline: 'Headline Here',
    body: 'Write a helpful and concise body copy 3-4 lines of text maximum. We\u2019re in relentless pursuit of breakthroughs.',
    disclaimer: 'Optional disclaimer goes here.',
    imageCaption: 'Maria is a real patient who uses ABRYSVO\u2122',
  },
};

export default meta;

type Story = StoryObj<typeof PageBreak>;

/* ---------------------------------------------------------------------------
   Vertical variants
   --------------------------------------------------------------------------- */

export const VerticalBeforeLeft: Story = {
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'left',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalBeforeRight: Story = {
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'right',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalAfterLeft: Story = {
  args: {
    layout: 'vertical',
    imagePosition: 'after',
    imageDirection: 'left',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalAfterRight: Story = {
  args: {
    layout: 'vertical',
    imagePosition: 'after',
    imageDirection: 'right',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

/* ---------------------------------------------------------------------------
   Horizontal variants
   --------------------------------------------------------------------------- */

export const HorizontalBeforeLeft: Story = {
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
    imageDirection: 'left',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
};

export const HorizontalBeforeRight: Story = {
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
    imageDirection: 'right',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
};

export const HorizontalAfterLeft: Story = {
  args: {
    layout: 'horizontal',
    imagePosition: 'after',
    imageDirection: 'left',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
};

export const HorizontalAfterRight: Story = {
  args: {
    layout: 'horizontal',
    imagePosition: 'after',
    imageDirection: 'right',
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
};

/* ---------------------------------------------------------------------------
   Without optional content
   --------------------------------------------------------------------------- */

export const WithoutDisclaimer: Story = {
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'left',
    disclaimer: undefined,
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutImageCaption: Story = {
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'left',
    imageCaption: undefined,
    actions: (
      <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

/* ---------------------------------------------------------------------------
   All Variants overview
   --------------------------------------------------------------------------- */

export const AllVariants: Story = {
  decorators: [
    () => {
      const actions = (
        <>
          <Button variant="primary">Button Label</Button>
          <Button variant="secondary">Button Label</Button>
        </>
      );

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <h3 style={{ margin: 0 }}>Vertical — Before Text, Left</h3>
          <div style={{ maxWidth: 375 }}>
            <PageBreak
              layout="vertical"
              imagePosition="before"
              imageDirection="left"
              imageSrc={sampleImage}
              headline="Headline Here"
              body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
              imageCaption="Maria is a real patient who uses ABRYSVO™"
              actions={actions}
              disclaimer="Optional disclaimer goes here."
            />
          </div>

          <h3 style={{ margin: 0 }}>Vertical — Before Text, Right</h3>
          <div style={{ maxWidth: 375 }}>
            <PageBreak
              layout="vertical"
              imagePosition="before"
              imageDirection="right"
              imageSrc={sampleImage}
              headline="Headline Here"
              body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
              imageCaption="Maria is a real patient who uses ABRYSVO™"
              actions={actions}
              disclaimer="Optional disclaimer goes here."
            />
          </div>

          <h3 style={{ margin: 0 }}>Vertical — After Text, Left</h3>
          <div style={{ maxWidth: 375 }}>
            <PageBreak
              layout="vertical"
              imagePosition="after"
              imageDirection="left"
              imageSrc={sampleImage}
              headline="Headline Here"
              body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
              imageCaption="Maria is a real patient who uses ABRYSVO™"
              actions={actions}
              disclaimer="Optional disclaimer goes here."
            />
          </div>

          <h3 style={{ margin: 0 }}>Vertical — After Text, Right</h3>
          <div style={{ maxWidth: 375 }}>
            <PageBreak
              layout="vertical"
              imagePosition="after"
              imageDirection="right"
              imageSrc={sampleImage}
              headline="Headline Here"
              body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
              imageCaption="Maria is a real patient who uses ABRYSVO™"
              actions={actions}
              disclaimer="Optional disclaimer goes here."
            />
          </div>

          <h3 style={{ margin: 0 }}>Horizontal — Before Text, Left</h3>
          <PageBreak
            layout="horizontal"
            imagePosition="before"
            imageDirection="left"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            imageCaption="Maria is a real patient who uses ABRYSVO™"
            actions={actions}
            disclaimer="Optional disclaimer goes here."
          />

          <h3 style={{ margin: 0 }}>Horizontal — Before Text, Right</h3>
          <PageBreak
            layout="horizontal"
            imagePosition="before"
            imageDirection="right"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            imageCaption="Maria is a real patient who uses ABRYSVO™"
            actions={actions}
            disclaimer="Optional disclaimer goes here."
          />

          <h3 style={{ margin: 0 }}>Horizontal — After Text, Left</h3>
          <PageBreak
            layout="horizontal"
            imagePosition="after"
            imageDirection="left"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            imageCaption="Maria is a real patient who uses ABRYSVO™"
            actions={actions}
            disclaimer="Optional disclaimer goes here."
          />

          <h3 style={{ margin: 0 }}>Horizontal — After Text, Right</h3>
          <PageBreak
            layout="horizontal"
            imagePosition="after"
            imageDirection="right"
            imageSrc={sampleImage}
            headline="Headline Here"
            body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."
            imageCaption="Maria is a real patient who uses ABRYSVO™"
            actions={actions}
            disclaimer="Optional disclaimer goes here."
          />
        </div>
      );
    },
  ],
};
