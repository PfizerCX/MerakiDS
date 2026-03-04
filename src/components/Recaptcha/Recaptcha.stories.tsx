import type { Meta, StoryObj } from '@storybook/react';
import { Recaptcha } from './Recaptcha';

const meta: Meta<typeof Recaptcha> = {
  title: 'Components/Recaptcha',
  component: Recaptcha,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'loading', 'ticked', 'error', 'expired'],
    },
  },
  args: {
    state: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Recaptcha>;

export const Default: Story = {};

export const Hover: Story = {
  args: { state: 'hover' },
};

export const Loading: Story = {
  args: { state: 'loading' },
};

export const Ticked: Story = {
  args: { state: 'ticked' },
};

export const ErrorState: Story = {
  args: { state: 'error' },
};

export const Expired: Story = {
  args: { state: 'expired' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Recaptcha state="default" />
      <Recaptcha state="hover" />
      <Recaptcha state="loading" />
      <Recaptcha state="ticked" />
      <Recaptcha state="error" />
      <Recaptcha state="expired" />
    </div>
  ),
};
