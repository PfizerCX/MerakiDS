import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Button } from '../Button/Button';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple panels to be expanded at once',
    },
  },
  args: {
    allowMultiple: false,
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  {
    title: 'What is Meraki Design System?',
    content: (
      <p style={{ margin: 0 }}>
        Meraki Design System is Pfizer's global design system, providing a comprehensive library of
        reusable components, design tokens, and patterns for building consistent digital experiences.
      </p>
    ),
  },
  {
    title: 'How do I get started?',
    content: (
      <p style={{ margin: 0 }}>
        Enable the design system library from the Assets panel in Figma. Search for "Meraki Design System"
        and toggle the switch on. Then drag and drop components into your design file.
      </p>
    ),
  },
  {
    title: 'Which fonts does Meraki use?',
    content: (
      <p style={{ margin: 0 }}>
        We use two font families: Pfizer Diatype and Pfizer Tomorrow, to bring a focused and
        compassionate personality to our system. For Pfizer branded projects, use Noto Sans instead.
      </p>
    ),
  },
  {
    title: 'How do I customize colors?',
    content: (
      <>
        <p style={{ margin: 0 }}>
          Meraki's colors are pulled from Pfizer's branding. The Primary, Secondary, and Tertiary
          colors are independent from one another, supporting over 1,000 color combinations.
        </p>
        <Button size="sm">Learn More</Button>
      </>
    ),
  },
  {
    title: 'Where can I get help?',
    content: (
      <p style={{ margin: 0 }}>
        If you have feedback or need help with the Meraki Design System, please reach out to the
        CX Design team and we'll get back to you as soon as we can.
      </p>
    ),
  },
];

export const Default: Story = {
  args: { items: defaultItems },
};

export const WithDefaultExpanded: Story = {
  args: {
    items: defaultItems,
    defaultExpandedIndex: 0,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: defaultItems,
    allowMultiple: true,
    defaultExpandedIndex: [0, 3],
  },
};

export const TwoItems: Story = {
  args: {
    items: defaultItems.slice(0, 2),
  },
};
