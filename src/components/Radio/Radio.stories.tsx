import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const radioMeta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: {
    label: 'Radio',
  },
};

export default radioMeta;

type RadioStory = StoryObj<typeof Radio>;

export const Default: RadioStory = {};

export const Selected: RadioStory = {
  args: { defaultChecked: true },
};

export const Disabled: RadioStory = {
  args: { disabled: true },
};

export const DisabledSelected: RadioStory = {
  args: { disabled: true, defaultChecked: true },
};

type GroupStory = StoryObj<typeof RadioGroup>;

export const Group: GroupStory = {
  render: () => (
    <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-default" value="1" label="Radio" defaultChecked />
      <Radio name="group-default" value="2" label="Radio" />
      <Radio name="group-default" value="3" label="Radio" />
    </RadioGroup>
  ),
};

export const GroupTwoOptions: GroupStory = {
  render: () => (
    <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-two" value="1" label="Radio" defaultChecked />
      <Radio name="group-two" value="2" label="Radio" />
    </RadioGroup>
  ),
};

export const GroupFourOptions: GroupStory = {
  render: () => (
    <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-four" value="1" label="Radio" defaultChecked />
      <Radio name="group-four" value="2" label="Radio" />
      <Radio name="group-four" value="3" label="Radio" />
      <Radio name="group-four" value="4" label="Radio" />
    </RadioGroup>
  ),
};

export const GroupFiveOptions: GroupStory = {
  render: () => (
    <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-five" value="1" label="Radio" defaultChecked />
      <Radio name="group-five" value="2" label="Radio" />
      <Radio name="group-five" value="3" label="Radio" />
      <Radio name="group-five" value="4" label="Radio" />
      <Radio name="group-five" value="5" label="Radio" />
    </RadioGroup>
  ),
};

export const GroupError: GroupStory = {
  render: () => (
    <RadioGroup
      label="Radio Label"
      required
      error
      errorText="Please select an option."
    >
      <Radio name="group-error" value="1" label="Radio" />
      <Radio name="group-error" value="2" label="Radio" />
      <Radio name="group-error" value="3" label="Radio" />
    </RadioGroup>
  ),
};

export const GroupWithoutLabel: GroupStory = {
  render: () => (
    <RadioGroup helperText="Caption Label">
      <Radio name="group-no-label" value="1" label="Radio" defaultChecked />
    </RadioGroup>
  ),
};

export const AllVariants: GroupStory = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        maxWidth: 420,
      }}
    >
      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-two" value="1" label="Radio" defaultChecked />
        <Radio name="all-two" value="2" label="Radio" />
      </RadioGroup>

      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-three" value="1" label="Radio" defaultChecked />
        <Radio name="all-three" value="2" label="Radio" />
        <Radio name="all-three" value="3" label="Radio" />
      </RadioGroup>

      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-four" value="1" label="Radio" defaultChecked />
        <Radio name="all-four" value="2" label="Radio" />
        <Radio name="all-four" value="3" label="Radio" />
        <Radio name="all-four" value="4" label="Radio" />
      </RadioGroup>

      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-five" value="1" label="Radio" defaultChecked />
        <Radio name="all-five" value="2" label="Radio" />
        <Radio name="all-five" value="3" label="Radio" />
        <Radio name="all-five" value="4" label="Radio" />
        <Radio name="all-five" value="5" label="Radio" />
      </RadioGroup>
    </div>
  ),
};
