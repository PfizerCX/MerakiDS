import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Textarea Label',
    caption: 'Optional Caption Label',
    error: false,
    disabled: false,
    required: true,
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue:
      'This value label has a 4 line limit. If you go over 4 lines it will be truncated.',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: 'Optional Caption Label',
    defaultValue:
      'This value label has a 4 line limit. If you go over 4 lines it will be truncated.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const NotRequired: Story = {
  args: {
    required: false,
  },
};

export const WithoutCaption: Story = {
  args: {
    caption: undefined,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 496, padding: 24 }}>
      <TextArea label="Textarea Label" caption="Optional Caption Label" required />
      <TextArea
        label="Textarea Label"
        caption="Optional Caption Label"
        required
        defaultValue="This value label has a 4 line limit. If you go over 4 lines it will be truncated."
      />
      <TextArea label="Textarea Label" caption="Optional Caption Label" required disabled />
      <TextArea
        label="Textarea Label"
        caption="Optional Caption Label"
        required
        error
        errorText="Optional Caption Label"
        defaultValue="This value label has a 4 line limit. If you go over 4 lines it will be truncated."
      />
    </div>
  ),
};
