import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types (MIME or extension)',
    },
    acceptLabel: {
      control: 'text',
      description: 'Human-readable accepted file description',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    heading: {
      control: 'text',
      description: 'Heading text in the drop zone',
    },
    browseLabel: {
      control: 'text',
      description: 'Label for the browse button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error banner message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the component',
    },
  },
  args: {
    accept: '.jpg,.gif,.pdf',
    acceptLabel: 'jpg, gif, pdf accepted, 1GB max',
    heading: 'Drag & Drop files here',
    browseLabel: 'Browse Files Instead',
    loading: false,
    error: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {};

export const Hovered: Story = {
  name: 'Drag Over',
  render: (args) => (
    <FileUpload {...args} data-drag-over="" />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shown when a file is dragged over the drop zone.',
      },
    },
  },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'File size exceeds allowable maximum',
  },
};

export const Success: Story = {
  args: {
    file: { name: 'Filename.jpeg' },
  },
};

export const Interactive: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const MAX = 1_073_741_824;

    const handleSelect = (f: File) => {
      if (f.size > MAX) {
        setError(true);
        return;
      }
      setError(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFile(f);
      }, 2000);
    };

    const handleRemove = () => {
      setFile(null);
      setError(false);
    };

    return (
      <FileUpload
        file={file}
        loading={loading}
        error={error}
        errorMessage="File size exceeds allowable maximum"
        onFileSelect={handleSelect}
        onFileRemove={handleRemove}
      />
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <FileUpload />
      <FileUpload loading />
      <FileUpload error errorMessage="File size exceeds allowable maximum" />
      <FileUpload file={{ name: 'Filename.jpeg' }} />
    </div>
  ),
};
