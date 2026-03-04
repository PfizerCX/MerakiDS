import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxGroup } from './Checkbox';

/* ---------------------------------------------------------------------------
   Checkbox (single)
   --------------------------------------------------------------------------- */

const checkboxMeta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: {
    label: 'Checkbox',
  },
};

export default checkboxMeta;

type CheckboxStory = StoryObj<typeof Checkbox>;

export const Default: CheckboxStory = {};

export const Checked: CheckboxStory = {
  args: { defaultChecked: true },
};

export const Disabled: CheckboxStory = {
  args: { disabled: true },
};

export const DisabledChecked: CheckboxStory = {
  args: { disabled: true, defaultChecked: true },
};

/* ---------------------------------------------------------------------------
   CheckboxGroup
   --------------------------------------------------------------------------- */

type GroupStory = StoryObj<typeof CheckboxGroup>;

export const Group: GroupStory = {
  render: () => (
    <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
  ),
};

export const GroupTwoOptions: GroupStory = {
  render: () => (
    <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
  ),
};

export const GroupFourOptions: GroupStory = {
  render: () => (
    <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
  ),
};

export const GroupFiveOptions: GroupStory = {
  render: () => (
    <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
  ),
};

export const GroupError: GroupStory = {
  render: () => (
    <CheckboxGroup label="Checkbox Label" required error errorText="Please select at least one option.">
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
  ),
};

export const GroupWithoutLabel: GroupStory = {
  render: () => (
    <CheckboxGroup helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
    </CheckboxGroup>
  ),
};

export const AllVariants: GroupStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 420 }}>
      <CheckboxGroup label="Checkbox Label" helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>
    </div>
  ),
};
