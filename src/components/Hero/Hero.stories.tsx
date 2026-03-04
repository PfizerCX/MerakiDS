import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Button } from '../Button/Button';

const sampleImage =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    imagePosition: {
      control: 'select',
      options: ['after', 'before'],
    },
    contentAlign: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    headline: { control: 'text' },
    body: { control: 'text' },
    disclaimer: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    actions: { control: false },
    videoControls: { control: false },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'Hero image',
    headline: 'Hero display text here',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt.',
    disclaimer: '*Disclaimer Text',
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

/* ---------------------------------------------------------------------------
   Vertical variants
   --------------------------------------------------------------------------- */

export const Default: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'after',
    contentAlign: 'top',
    actions: (
      <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
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

export const VerticalBeforeTop: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'before',
    contentAlign: 'top',
    actions: (
      <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
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

export const VerticalAfterBottom: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'after',
    contentAlign: 'bottom',
    actions: (
      <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
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

export const VerticalBeforeBottom: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'before',
    contentAlign: 'bottom',
    actions: (
      <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
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

export const HorizontalAfterTop: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'after',
    contentAlign: 'top',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: (
      <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
    ),
  },
};

export const HorizontalAfterBottom: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'after',
    contentAlign: 'bottom',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: (
      <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
    ),
  },
};

export const HorizontalBeforeTop: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
    contentAlign: 'top',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: (
      <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
    ),
  },
};

export const HorizontalBeforeBottom: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
    contentAlign: 'bottom',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: (
      <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
    ),
  },
};

/* ---------------------------------------------------------------------------
   All Variants overview
   --------------------------------------------------------------------------- */

export const AllVariants: Story = {
  decorators: [
    () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <h3 style={{ margin: 0 }}>Vertical — Image After, Content Top</h3>
        <div style={{ maxWidth: 375 }}>
          <Hero
            orientation="vertical"
            imagePosition="after"
            contentAlign="top"
            imageSrc={sampleImage}
            imageAlt="Hero"
            headline="Hero display text here"
            body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium."
            actions={
              <>
                <Button variant="primary" inverted>
                  Button Label
                </Button>
                <Button variant="secondary" inverted>
                  Button Label
                </Button>
              </>
            }
            disclaimer="*Disclaimer Text"
          />
        </div>

        <h3 style={{ margin: 0 }}>Vertical — Image Before, Content Bottom</h3>
        <div style={{ maxWidth: 375 }}>
          <Hero
            orientation="vertical"
            imagePosition="before"
            contentAlign="bottom"
            imageSrc={sampleImage}
            imageAlt="Hero"
            headline="Hero display text here"
            body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium."
            actions={
              <>
                <Button variant="primary" inverted>
                  Button Label
                </Button>
                <Button variant="secondary" inverted>
                  Button Label
                </Button>
              </>
            }
            disclaimer="*Disclaimer Text"
          />
        </div>

        <h3 style={{ margin: 0 }}>Horizontal — Image After, Content Top</h3>
        <Hero
          orientation="horizontal"
          imagePosition="after"
          contentAlign="top"
          imageSrc={sampleImage}
          imageAlt="Hero"
          headline="Hero display text here"
          body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis."
          actions={
            <>
              <Button variant="primary" size="lg" inverted>
                Button Label
              </Button>
              <Button variant="secondary" size="lg" inverted>
                Button Label
              </Button>
            </>
          }
          disclaimer="*Disclaimer Text"
        />

        <h3 style={{ margin: 0 }}>Horizontal — Image Before, Content Bottom</h3>
        <Hero
          orientation="horizontal"
          imagePosition="before"
          contentAlign="bottom"
          imageSrc={sampleImage}
          imageAlt="Hero"
          headline="Hero display text here"
          body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis."
          actions={
            <>
              <Button variant="primary" size="lg" inverted>
                Button Label
              </Button>
              <Button variant="secondary" size="lg" inverted>
                Button Label
              </Button>
            </>
          }
          disclaimer="*Disclaimer Text"
        />
      </div>
    ),
  ],
};
