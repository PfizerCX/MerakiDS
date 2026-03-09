import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const SAMPLE_IMAGE =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
    initials: {
      control: 'text',
      description: 'Initials to display when no image is provided (1–2 characters)',
    },
    showStatus: {
      control: 'boolean',
      description: 'Whether to show the status indicator',
    },
    status: {
      control: 'select',
      options: ['online', 'away', 'do-not-disturb', 'offline'],
      description: 'Status of the user',
    },
  },
  args: {
    src: SAMPLE_IMAGE,
    alt: 'User avatar',
    showStatus: true,
    status: 'online',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Image: Story = {};

export const Initials: Story = {
  args: { src: undefined, initials: 'WW' },
};

export const Profile: Story = {
  args: { src: undefined },
};

export const WithOnlineStatus: Story = {
  args: { showStatus: true, status: 'online' },
};

export const WithAwayStatus: Story = {
  args: { showStatus: true, status: 'away' },
};

export const WithDoNotDisturbStatus: Story = {
  args: { showStatus: true, status: 'do-not-disturb' },
};

export const WithOfflineStatus: Story = {
  args: { showStatus: true, status: 'offline' },
};

export const NoStatus: Story = {
  args: { showStatus: false },
};

export const AllProfileForms: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar src={SAMPLE_IMAGE} alt="Image avatar" />
      <Avatar initials="WW" />
      <Avatar />
    </div>
  ),
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar src={SAMPLE_IMAGE} showStatus status="online" />
      <Avatar src={SAMPLE_IMAGE} showStatus status="away" />
      <Avatar src={SAMPLE_IMAGE} showStatus status="do-not-disturb" />
      <Avatar src={SAMPLE_IMAGE} showStatus status="offline" />
    </div>
  ),
};
