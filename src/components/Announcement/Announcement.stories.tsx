import type { Meta, StoryObj } from '@storybook/react';
import { Announcement } from './Announcement';

const meta: Meta<typeof Announcement> = {
  title: 'Components/Announcement',
  component: Announcement,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction — vertical stacks icon above text, horizontal places them side by side',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to display the announcement icon',
    },
  },
  args: {
    layout: 'vertical',
    showIcon: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin nibh, vitae sagittis mauris turpis a lorem. Etiam eu pulvinar mauris. Donec enim libero, sodales sed vulputate vitae, euismod a ligula. Vivamus ut mattis tellus. Aenean dui lacus, finibus nec eros in, pretium volutpat leo. Duis consequat massa quis nunc pellentesque, vel mattis felis vehicula.',
  },
};

export default meta;

type Story = StoryObj<typeof Announcement>;

export const Vertical: Story = {};

export const Horizontal: Story = {
  args: { layout: 'horizontal' },
};

export const WithoutIcon: Story = {
  args: { showIcon: false },
};

export const HorizontalWithoutIcon: Story = {
  args: { layout: 'horizontal', showIcon: false },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Announcement layout="vertical">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin
        nibh, vitae sagittis mauris turpis a lorem.
      </Announcement>
      <Announcement layout="horizontal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin
        nibh, vitae sagittis mauris turpis a lorem.
      </Announcement>
      <Announcement showIcon={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Announcement>
    </div>
  ),
};
