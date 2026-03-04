import type { Meta, StoryObj } from '@storybook/react';
import { References } from './References';

const SAMPLE_ITEMS = [
  {
    number: 1,
    text: 'Anderson, Annaliesa Interview by The Beautiful Truth Group. March 4, 2022.',
  },
  {
    number: 2,
    text: 'Hammond, Jennifer. Interviewed by Kate Silver. April 11, 2022.',
  },
  {
    number: 3,
    text: 'Allerton, Charlotte. Interview by The Beautiful Truth Group. March 9, 2022.',
  },
  {
    number: 4,
    text: 'Drugs, Devices, and the FDA: Part 1: An Overview of Approval Processes for Drugs. JACC: Basic to Translational Science. Accessed via ScienceDirect, April 13, 2022.',
  },
];

const meta: Meta<typeof References> = {
  title: 'Components/References',
  component: References,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
  args: {
    title: 'References',
    items: SAMPLE_ITEMS,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 767, minWidth: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof References>;

export const Default: Story = {};

export const SingleReference: Story = {
  args: {
    items: [SAMPLE_ITEMS[0]],
  },
};

export const ManyReferences: Story = {
  args: {
    items: [
      ...SAMPLE_ITEMS,
      {
        number: 5,
        text: 'World Health Organization. Global Health Estimates 2020. Geneva: WHO; 2022.',
      },
      {
        number: 6,
        text: 'Smith, J. et al. "Advances in Drug Development." Nature Reviews Drug Discovery, vol. 21, 2022, pp. 45–62.',
      },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Sources & Citations',
  },
};
