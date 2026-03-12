import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBanner } from './Notification';

const meta: Meta<typeof NotificationBanner> = {
  title: 'Components/Notification',
  component: NotificationBanner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['informational', 'warning', 'error', 'success'],
    },
    alignment: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    iconVariant: {
      control: 'select',
      options: [
        'type',
        'notification',
        'notification-filled',
        'notifications',
        'notifications-on',
        'notifications-off',
      ],
      description: 'Icon to show: "type" uses type-based icons (Alerts/Warning/CheckCircle), or pick a bell-style icon.',
    },
    inverted: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    showButton: { control: 'boolean' },
    showClose: { control: 'boolean' },
  },
  args: {
    type: 'informational',
    alignment: 'horizontal',
    iconVariant: 'type',
    inverted: false,
    showIcon: true,
    showTitle: true,
    showButton: true,
    showClose: true,
    title: 'This is a Notification',
    content:
      'Lorem ipsum dolor sit amet. Qui optio dolores est animi deserunt non suscipit fuga. Et architecto eum dolorum praesentium ex et.',
    actionLabel: 'Button Label',
    onClose: () => {},
    onAction: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof NotificationBanner>;

export const Informational: Story = {};

export const Warning: Story = {
  args: { type: 'warning' },
};

export const Error: Story = {
  args: { type: 'error' },
};

export const Success: Story = {
  args: { type: 'success' },
};

export const Inverted: Story = {
  args: { type: 'informational', inverted: true },
};

export const Vertical: Story = {
  args: { alignment: 'vertical' },
};

export const NoButton: Story = {
  args: { showButton: false },
};

export const NoClose: Story = {
  args: { showClose: false },
};

export const NoIcon: Story = {
  args: { showIcon: false },
};

export const NoTitle: Story = {
  args: { showTitle: false },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
      <NotificationBanner type="informational" onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="warning" onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="error" onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="success" onClose={() => {}} onAction={() => {}} />
    </div>
  ),
};

export const AllTypesInverted: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
      <NotificationBanner type="informational" inverted onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="warning" inverted onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="error" inverted onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="success" inverted onClose={() => {}} onAction={() => {}} />
    </div>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
      <NotificationBanner
        type="informational"
        iconVariant="type"
        title="Type (default)"
        onClose={() => {}}
        onAction={() => {}}
      />
      <NotificationBanner
        type="informational"
        iconVariant="notification"
        title="Notification (bell outline)"
        onClose={() => {}}
        onAction={() => {}}
      />
      <NotificationBanner
        type="informational"
        iconVariant="notification-filled"
        title="Notification filled"
        onClose={() => {}}
        onAction={() => {}}
      />
      <NotificationBanner
        type="informational"
        iconVariant="notifications"
        title="Notifications"
        onClose={() => {}}
        onAction={() => {}}
      />
      <NotificationBanner
        type="informational"
        iconVariant="notifications-on"
        title="Notifications on"
        onClose={() => {}}
        onAction={() => {}}
      />
      <NotificationBanner
        type="informational"
        iconVariant="notifications-off"
        title="Notifications off"
        onClose={() => {}}
        onAction={() => {}}
      />
    </div>
  ),
};
