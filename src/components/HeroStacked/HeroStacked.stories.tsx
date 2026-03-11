import type { Meta, StoryObj } from '@storybook/react';
import { HeroStacked } from './HeroStacked';
import { Button } from '../Button/Button';
import { PauseCircle } from '../../icons/PauseCircle';
import { Volume } from '../../icons/Volume';

const sampleImage =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80';

const scrimBtnStyle: React.CSSProperties = {
  appearance: 'none' as const,
  border: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 'var(--radius-7)',
  backgroundColor: 'var(--color-scrim)',
  color: 'white',
  cursor: 'pointer',
};

const scrimBtnSmStyle: React.CSSProperties = {
  ...scrimBtnStyle,
  width: 40,
  height: 40,
};

const videoControlsHorizontal = (
  <>
    <button type="button" style={scrimBtnStyle} aria-label="Pause">
      <PauseCircle size={24} style={{ color: 'white' }} />
    </button>
    <button type="button" style={scrimBtnStyle} aria-label="Mute">
      <Volume size={24} style={{ color: 'white' }} />
    </button>
  </>
);

const videoControlsVertical = (
  <>
    <button type="button" style={scrimBtnSmStyle} aria-label="Pause">
      <PauseCircle size={24} style={{ color: 'white' }} />
    </button>
    <button type="button" style={scrimBtnSmStyle} aria-label="Mute">
      <Volume size={24} style={{ color: 'white' }} />
    </button>
  </>
);

const meta: Meta<typeof HeroStacked> = {
  title: 'Components/HeroStacked',
  component: HeroStacked,
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
    headline: 'Hero headline text here',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    disclaimer: '*Disclaimer Text',
  },
};

export default meta;

type Story = StoryObj<typeof HeroStacked>;

/* ---------------------------------------------------------------------------
   Horizontal variants
   --------------------------------------------------------------------------- */

export const HorizontalBefore: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
    videoControls: videoControlsHorizontal,
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
};

export const HorizontalAfter: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'after',
    videoControls: videoControlsHorizontal,
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
};

/* ---------------------------------------------------------------------------
   Vertical variants
   --------------------------------------------------------------------------- */

export const VerticalBefore: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'before',
    headline: 'Hero display text here',
    body: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...',
    videoControls: videoControlsVertical,
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

export const VerticalAfter: Story = {
  args: {
    orientation: 'vertical',
    imagePosition: 'after',
    headline: 'Hero display text here',
    body: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...',
    videoControls: videoControlsVertical,
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
   Without video controls
   --------------------------------------------------------------------------- */

export const WithoutVideoControls: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
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
};

/* ---------------------------------------------------------------------------
   Without disclaimer
   --------------------------------------------------------------------------- */

export const WithoutDisclaimer: Story = {
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
    disclaimer: undefined,
    videoControls: videoControlsHorizontal,
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
};

/* ---------------------------------------------------------------------------
   All Variants overview
   --------------------------------------------------------------------------- */

export const AllVariants: Story = {
  decorators: [
    () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <h3 style={{ margin: 0 }}>Horizontal — Image Before</h3>
        <HeroStacked
          orientation="horizontal"
          imagePosition="before"
          imageSrc={sampleImage}
          imageAlt="Hero"
          headline="Hero headline text here"
          body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis."
          videoControls={videoControlsHorizontal}
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

        <h3 style={{ margin: 0 }}>Horizontal — Image After</h3>
        <HeroStacked
          orientation="horizontal"
          imagePosition="after"
          imageSrc={sampleImage}
          imageAlt="Hero"
          headline="Hero headline text here"
          body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis."
          videoControls={videoControlsHorizontal}
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

        <h3 style={{ margin: 0 }}>Vertical — Image Before</h3>
        <div style={{ maxWidth: 375 }}>
          <HeroStacked
            orientation="vertical"
            imagePosition="before"
            imageSrc={sampleImage}
            imageAlt="Hero"
            headline="Hero display text here"
            body="Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ..."
            videoControls={videoControlsVertical}
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

        <h3 style={{ margin: 0 }}>Vertical — Image After</h3>
        <div style={{ maxWidth: 375 }}>
          <HeroStacked
            orientation="vertical"
            imagePosition="after"
            imageSrc={sampleImage}
            imageAlt="Hero"
            headline="Hero display text here"
            body="Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ..."
            videoControls={videoControlsVertical}
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
      </div>
    ),
  ],
};
