import type { Meta, StoryObj } from '@storybook/react';
import { Slideshow } from './Slideshow';
import type { SlideshowSlide } from './Slideshow';

const sampleImage1 =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80';
const sampleImage2 =
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80';
const sampleImage3 =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80';

const slides: SlideshowSlide[] = [
  {
    kicker: 'KICKER',
    headline:
      'Write a clear and eye-catching slideshow headline here with up to 4 lines of text maximum.',
    buttonLabel: 'Button Label',
    imageSrc: sampleImage1,
    imageAlt: 'Healthcare professional',
    imageDescription: 'Maria is a real patient',
  },
  {
    kicker: 'INNOVATION',
    headline:
      'A second slide with a different headline showcasing another key message.',
    buttonLabel: 'Learn More',
    imageSrc: sampleImage2,
    imageAlt: 'Medical research',
    imageDescription: 'Real patient testimonial',
  },
  {
    kicker: 'SCIENCE',
    headline:
      'Third slide demonstrating the full capability of the slideshow component.',
    buttonLabel: 'Explore',
    imageSrc: sampleImage3,
    imageAlt: 'Scientific research',
  },
  {
    kicker: 'RESULTS',
    headline: 'Fourth slide to show pagination at full capacity.',
    buttonLabel: 'View Results',
    imageSrc: sampleImage1,
    imageAlt: 'Results overview',
    imageDescription: 'Data from 2024 clinical trials',
  },
];

const meta: Meta<typeof Slideshow> = {
  title: 'Components/Slideshow',
  component: Slideshow,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    imageStyle: {
      control: 'select',
      options: ['side-by-side', 'full'],
    },
    variant: {
      control: 'select',
      options: ['33-66', '50-50'],
    },
    imagePosition: {
      control: 'select',
      options: ['after', 'before'],
    },
    slides: { control: false },
    activeIndex: { control: 'number' },
    onSlideChange: { action: 'slideChange' },
  },
  args: {
    slides,
    layout: 'vertical',
    imageStyle: 'side-by-side',
    variant: '33-66',
    imagePosition: 'after',
  },
};

export default meta;

type Story = StoryObj<typeof Slideshow>;

/* ---------------------------------------------------------------------------
   Vertical — Side-by-Side
   --------------------------------------------------------------------------- */

export const Default: Story = {};

export const Vertical5050: Story = {
  args: {
    variant: '50-50',
  },
};

export const VerticalBeforeText: Story = {
  args: {
    imagePosition: 'before',
  },
};

export const VerticalBeforeText5050: Story = {
  args: {
    imagePosition: 'before',
    variant: '50-50',
  },
};

/* ---------------------------------------------------------------------------
   Vertical — Full
   --------------------------------------------------------------------------- */

export const VerticalFull3366: Story = {
  args: {
    imageStyle: 'full',
    variant: '33-66',
  },
};

export const VerticalFull5050: Story = {
  args: {
    imageStyle: 'full',
    variant: '50-50',
  },
};

export const VerticalFullBeforeText: Story = {
  args: {
    imageStyle: 'full',
    imagePosition: 'before',
  },
};

/* ---------------------------------------------------------------------------
   Horizontal — Side-by-Side
   --------------------------------------------------------------------------- */

export const HorizontalSideBySide: Story = {
  args: {
    layout: 'horizontal',
  },
};

export const HorizontalSideBySide5050: Story = {
  args: {
    layout: 'horizontal',
    variant: '50-50',
  },
};

export const HorizontalSideBySideBefore: Story = {
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
  },
};

export const HorizontalSideBySideBefore5050: Story = {
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
    variant: '50-50',
  },
};

/* ---------------------------------------------------------------------------
   Horizontal — Full
   --------------------------------------------------------------------------- */

export const HorizontalFull3366: Story = {
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
  },
};

export const HorizontalFull5050: Story = {
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
    variant: '50-50',
  },
};

export const HorizontalFullBefore: Story = {
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
    imagePosition: 'before',
  },
};

export const HorizontalFullBefore5050: Story = {
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
    imagePosition: 'before',
    variant: '50-50',
  },
};

/* ---------------------------------------------------------------------------
   All Variants overview
   --------------------------------------------------------------------------- */

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <h3 style={{ margin: 0 }}>Vertical — Side-by-Side 33/66</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="side-by-side" variant="33-66" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Vertical — Side-by-Side 50/50</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="side-by-side" variant="50-50" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Vertical — Full 33/66</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="full" variant="33-66" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Vertical — Full 50/50</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="full" variant="50-50" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Horizontal — Side-by-Side 33/66</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="side-by-side" variant="33-66" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Horizontal — Side-by-Side 50/50</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="side-by-side" variant="50-50" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Horizontal — Full 33/66</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="full" variant="33-66" imagePosition="after" />

      <h3 style={{ margin: 0 }}>Horizontal — Full 50/50</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="full" variant="50-50" imagePosition="after" />
    </div>
  ),
};
