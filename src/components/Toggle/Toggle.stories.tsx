import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    contextLabel: { control: 'text' },
    leftLabel: { control: 'text' },
    rightLabel: { control: 'text' },
  },
  args: {
    label: 'Switch label',
    disabled: false,
  },
};

export default meta;

type ToggleStory = StoryObj<typeof Toggle>;

export const Default: ToggleStory = {};

export const Checked: ToggleStory = {
  args: { defaultChecked: true },
};

export const WithContextLabel: ToggleStory = {
  args: {
    label: 'Camera Access',
    contextLabel: 'Grants permission to turn on your phones camera',
  },
};

export const WithSwitchLabels: ToggleStory = {
  args: {
    label: 'Camera Access',
    leftLabel: 'Off',
    rightLabel: 'On',
    defaultChecked: true,
  },
};

export const WithAllLabels: ToggleStory = {
  args: {
    label: 'Camera Access',
    contextLabel: 'Grants permission to turn on your phones camera',
    leftLabel: 'Off',
    rightLabel: 'On',
    defaultChecked: true,
  },
};

export const Disabled: ToggleStory = {
  args: { disabled: true },
};

export const DisabledChecked: ToggleStory = {
  args: { disabled: true, defaultChecked: true },
};

export const SwitchOnly: ToggleStory = {
  args: { label: undefined },
};

export const Controlled: ToggleStory = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        label="Dark Mode"
        leftLabel="Off"
        rightLabel="On"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const ListOfSettings: ToggleStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 480 }}>
      <Toggle
        label="Camera Access"
        contextLabel="Grants permission to turn on your phones camera"
        leftLabel="Off"
        rightLabel="On"
        defaultChecked
      />
      <Toggle
        label="Notification Sound"
        contextLabel="Play a sound when you receive a notification"
        leftLabel="Off"
        rightLabel="On"
      />
      <Toggle
        label="Use Face ID"
        leftLabel="Off"
        rightLabel="On"
        defaultChecked
      />
    </div>
  ),
};

export const SingleSetting: ToggleStory = {
  render: () => (
    <Toggle label="Show my position on the map" defaultChecked />
  ),
};
