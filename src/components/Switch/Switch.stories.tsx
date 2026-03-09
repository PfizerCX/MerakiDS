import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: false,
      table: { disable: true },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name for the switch (for screen readers). Defaults to "Toggle" if not set.',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch',
    },
  },
  args: {
    'aria-label': 'Toggle option',
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: function InteractiveSwitch() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        checked={checked}
        onChange={setChecked}
        aria-label="Toggle option"
      />
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    checked: false,
    disabled: false,
    'aria-label': 'Toggle option',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    'aria-label': 'Toggle option',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    'aria-label': 'Toggle option',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    'aria-label': 'Toggle option',
  },
};
