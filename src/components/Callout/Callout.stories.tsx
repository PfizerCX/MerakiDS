import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'right-top',
        'right-center',
        'right-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'left-top',
        'left-center',
        'left-bottom',
      ],
      description: 'Beak position relative to the callout body',
    },
    showImage: { control: 'boolean' },
    showSteps: { control: 'boolean' },
    showPrimary: { control: 'boolean' },
    showSecondary: { control: 'boolean' },
    showClose: { control: 'boolean' },
    currentStep: { control: { type: 'number', min: 1 } },
    totalSteps: { control: { type: 'number', min: 1 } },
  },
  args: {
    position: 'top-left',
    title: 'Callout Title',
    caption: 'Callout caption that is only 1 or 2 lines long.',
    showImage: true,
    showSteps: true,
    showPrimary: true,
    showSecondary: true,
    showClose: true,
    currentStep: 1,
    totalSteps: 3,
    primaryLabel: 'Next',
    secondaryLabel: 'Back',
    onPrimary: () => {},
    onSecondary: () => {},
    onClose: () => {},
    image: (
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=320&fit=crop"
        alt="Placeholder"
      />
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 40 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const TopCenter: Story = {
  args: { position: 'top-center' },
};

export const TopRight: Story = {
  args: { position: 'top-right' },
};

export const RightTop: Story = {
  args: { position: 'right-top' },
};

export const RightCenter: Story = {
  args: { position: 'right-center' },
};

export const BottomLeft: Story = {
  args: { position: 'bottom-left' },
};

export const BottomCenter: Story = {
  args: { position: 'bottom-center' },
};

export const LeftCenter: Story = {
  args: { position: 'left-center' },
};

export const NoImage: Story = {
  args: { showImage: false },
};

export const NoSteps: Story = {
  args: { showSteps: false },
};

export const NoActions: Story = {
  args: { showPrimary: false, showSecondary: false },
};

export const MinimalCallout: Story = {
  args: {
    showImage: false,
    showSteps: false,
    showPrimary: false,
    showSecondary: false,
    showClose: false,
  },
};

export const AllPositions: Story = {
  render: () => {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'right-top',
      'right-center',
      'right-bottom',
      'bottom-left',
      'bottom-center',
      'bottom-right',
      'left-top',
      'left-center',
      'left-bottom',
    ] as const;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 48,
          padding: 32,
        }}
      >
        {positions.map((pos) => (
          <Callout
            key={pos}
            position={pos}
            title="Callout Title"
            caption="Callout caption that is only 1 or 2 lines long."
            showImage={false}
            onClose={() => {}}
            onPrimary={() => {}}
            onSecondary={() => {}}
          />
        ))}
      </div>
    );
  },
};
