import type { Meta, StoryObj } from '@storybook/react';
import { CardIcon } from './CardIcon';
import { Button } from '../Button/Button';
import { Medication } from '../../icons/Medication';
import { Doctor } from '../../icons/Doctor';
import { Calendar } from '../../icons/Calendar';

const meta: Meta<typeof CardIcon> = {
  title: 'Components/CardIcon',
  component: CardIcon,
  tags: ['autodocs'],
  args: {
    icon: <Medication size={48} />,
    headline: 'Headline Here',
  },
};

export default meta;

type Story = StoryObj<typeof CardIcon>;

export const Default: Story = {
  args: {
    children: <Button>Button Label</Button>,
  },
};

export const WithMultipleButtons: Story = {
  args: {
    children: (
      <>
        <Button>Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
      </>
    ),
  },
};

export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <CardIcon
        icon={<Medication size={48} />}
        headline="Medications"
        style={{ width: 250 }}
      >
        <Button>View All</Button>
      </CardIcon>
      <CardIcon
        icon={<Doctor size={48} />}
        headline="Find a Doctor"
        style={{ width: 250 }}
      >
        <Button>Search</Button>
      </CardIcon>
      <CardIcon
        icon={<Calendar size={48} />}
        headline="Appointments"
        style={{ width: 250 }}
      >
        <Button>Schedule</Button>
      </CardIcon>
    </div>
  ),
};

export const WithoutButton: Story = {
  args: {
    children: undefined,
  },
};
