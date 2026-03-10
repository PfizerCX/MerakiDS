import type { Meta, StoryObj } from '@storybook/react';
import { CardIcon } from './CardIcon';
import { Button } from '../Button/Button';
import { Medication } from '../../icons/Medication';
import { Doctor } from '../../icons/Doctor';
import { Calendar } from '../../icons/Calendar';
import { Heart } from '../../icons/Heart';
import { Hospital } from '../../icons/Hospital';
import { Vaccine } from '../../icons/Vaccine';
import { Stethoscope } from '../../icons/Stethoscope';
import { Prescription } from '../../icons/Prescription';
import { Search } from '../../icons/Search';
import { Settings } from '../../icons/Settings';
import { Home } from '../../icons/Home';
import { Star } from '../../icons/Star';
import { Globe } from '../../icons/Globe';
import { Idea } from '../../icons/Idea';

const iconMap: Record<string, React.ReactNode> = {
  Medication: <Medication size={48} />,
  Doctor: <Doctor size={48} />,
  Calendar: <Calendar size={48} />,
  Heart: <Heart size={48} />,
  Hospital: <Hospital size={48} />,
  Vaccine: <Vaccine size={48} />,
  Stethoscope: <Stethoscope size={48} />,
  Prescription: <Prescription size={48} />,
  Search: <Search size={48} />,
  Settings: <Settings size={48} />,
  Home: <Home size={48} />,
  Star: <Star size={48} />,
  Globe: <Globe size={48} />,
  Idea: <Idea size={48} />,
};

const meta: Meta<typeof CardIcon> = {
  title: 'Components/CardIcon',
  component: CardIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    children: { table: { disable: true } },
  },
  args: {
    icon: 'Medication' as unknown as React.ReactNode,
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
