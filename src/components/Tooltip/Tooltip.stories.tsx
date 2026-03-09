import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    beakPosition: {
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
      description: 'Beak position relative to the tooltip body',
    },
    showClose: { control: 'boolean' },
    showContent: { control: 'boolean' },
  },
  args: {
    beakPosition: 'top-left',
    title: 'Tooltip Title',
    content: 'Tooltip caption that is only 1 or 2 lines long.',
    showClose: true,
    showContent: true,
    onClose: () => {},
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

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const TopCenter: Story = {
  args: { beakPosition: 'top-center' },
};

export const TopRight: Story = {
  args: { beakPosition: 'top-right' },
};

export const RightCenter: Story = {
  args: { beakPosition: 'right-center' },
};

export const BottomCenter: Story = {
  args: { beakPosition: 'bottom-center' },
};

export const LeftCenter: Story = {
  args: { beakPosition: 'left-center' },
};

export const NoClose: Story = {
  args: { showClose: false },
};

export const TitleOnly: Story = {
  args: { showContent: false },
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
          <Tooltip
            key={pos}
            beakPosition={pos}
            title="Tooltip Title"
            content="Tooltip caption that is only 1 or 2 lines long."
            onClose={() => {}}
          />
        ))}
      </div>
    );
  },
};
