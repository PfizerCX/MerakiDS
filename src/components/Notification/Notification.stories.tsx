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
    inverted: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    showButton: { control: 'boolean' },
    showClose: { control: 'boolean' },
  },
  args: {
    type: 'informational',
    alignment: 'horizontal',
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
