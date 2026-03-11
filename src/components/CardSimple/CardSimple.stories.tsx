import type { Meta, StoryObj } from '@storybook/react';
import { CardSimple, type CardSimpleProps } from './CardSimple';
import { ArrowRight } from '../../icons/ArrowRight';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { ArrowUp } from '../../icons/ArrowUp';
import { ArrowDown } from '../../icons/ArrowDown';
import { ChevronRight } from '../../icons/ChevronRight';
import { ChevronLeft } from '../../icons/ChevronLeft';
import { ChevronDown } from '../../icons/ChevronDown';
import { ChevronUp } from '../../icons/ChevronUp';
import { Launch } from '../../icons/Launch';
import { Link } from '../../icons/Link';
import { Download } from '../../icons/Download';
import { Share } from '../../icons/Share';
import { CheckCircle } from '../../icons/CheckCircle';
import { Close } from '../../icons/Close';
import { Add } from '../../icons/Add';
import { InformationCircle } from '../../icons/InformationCircle';

const ICON_SIZE = 36;
const ICON_STYLE = { color: 'inherit' } as const;

const iconMap: Record<string, React.ReactNode> = {
  ArrowRight: <ArrowRight size={ICON_SIZE} style={ICON_STYLE} />,
  ArrowLeft: <ArrowLeft size={ICON_SIZE} style={ICON_STYLE} />,
  ArrowUp: <ArrowUp size={ICON_SIZE} style={ICON_STYLE} />,
  ArrowDown: <ArrowDown size={ICON_SIZE} style={ICON_STYLE} />,
  ChevronRight: <ChevronRight size={ICON_SIZE} style={ICON_STYLE} />,
  ChevronLeft: <ChevronLeft size={ICON_SIZE} style={ICON_STYLE} />,
  ChevronDown: <ChevronDown size={ICON_SIZE} style={ICON_STYLE} />,
  ChevronUp: <ChevronUp size={ICON_SIZE} style={ICON_STYLE} />,
  Launch: <Launch size={ICON_SIZE} style={ICON_STYLE} />,
  Link: <Link size={ICON_SIZE} style={ICON_STYLE} />,
  Download: <Download size={ICON_SIZE} style={ICON_STYLE} />,
  Share: <Share size={ICON_SIZE} style={ICON_STYLE} />,
  CheckCircle: <CheckCircle size={ICON_SIZE} style={ICON_STYLE} />,
  Close: <Close size={ICON_SIZE} style={ICON_STYLE} />,
  Add: <Add size={ICON_SIZE} style={ICON_STYLE} />,
  Info: <InformationCircle size={ICON_SIZE} style={ICON_STYLE} />,
};

type StoryArgs = CardSimpleProps & { width: number };

const meta: Meta<StoryArgs> = {
  title: 'Components/CardSimple',
  component: CardSimple,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'solid', 'outline', 'outline-inverse'],
    },
    width: {
      control: { type: 'number' },
      description: 'Card width in pixels',
    },
    showBody: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    leftIcon: {
      control: 'select',
      options: ['None', ...Object.keys(iconMap)],
      mapping: { None: undefined, ...iconMap },
      description: 'Icon rendered in the left slot',
    },
    rightIcon: {
      control: 'select',
      options: ['Default', 'None', ...Object.keys(iconMap)],
      mapping: { Default: undefined, None: null, ...iconMap },
      description: 'Icon rendered in the right slot (Default uses the built-in ArrowRight)',
    },
    style: { table: { disable: true } },
  },
  args: {
    variant: 'base',
    width: 464,
    headline: 'Write a clear and eye-catching headline.',
    body: 'Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.',
    showBody: true,
    showRightIcon: true,
    leftIcon: undefined as unknown as React.ReactNode,
    rightIcon: undefined as unknown as React.ReactNode,
  },
  render: ({ width, ...args }) => (
    <CardSimple style={{ width }} {...args} />
  ),
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const OutlineInverse: Story = {
  args: {
    variant: 'outline-inverse',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#2e29ff', padding: 32, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutBody: Story = {
  args: {
    showBody: false,
  },
};

export const WithoutRightIcon: Story = {
  args: {
    showRightIcon: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardSimple
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardSimple
          variant="solid"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          variant="solid"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <CardSimple
          variant="outline"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          variant="outline"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>

      <div
        style={{
          backgroundColor: '#2e29ff',
          padding: 32,
          borderRadius: 16,
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <CardSimple
          variant="outline-inverse"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
        />
        <CardSimple
          variant="outline-inverse"
          style={{ width: 464 }}
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."
          showBody={false}
        />
      </div>
    </div>
  ),
};
