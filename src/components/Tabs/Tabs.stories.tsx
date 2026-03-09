import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    showNavigation: {
      control: 'boolean',
      description:
        'Show prev/next navigation buttons when tabs overflow',
    },
  },
  args: {
    showNavigation: true,
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = ['Tab Label', 'Tab Label', 'Tab Label', 'Tab Label', 'Tab Label'];
    return (
      <div style={{ width: 600 }}>
        <Tabs {...args}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const WithNavigation: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = [
      'Overview',
      'Features',
      'Pricing',
      'Documentation',
      'Support',
      'Resources',
      'Blog',
      'Contact',
    ];
    return (
      <div style={{ width: 600 }}>
        <Tabs {...args}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const WithoutNavigation: Story = {
  args: { showNavigation: false },
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = ['Tab One', 'Tab Two', 'Tab Three'];
    return (
      <div style={{ width: 600 }}>
        <Tabs {...args}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const FewTabs: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = ['First', 'Second'];
    return (
      <div style={{ width: 600 }}>
        <Tabs {...args}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const ManyTabs: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = Array.from({ length: 15 }, (_, i) => `Tab ${i + 1}`);
    return (
      <div style={{ width: 600 }}>
        <Tabs {...args}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = [
      'Dashboard',
      'Analytics',
      'Reports',
      'Settings',
      'Users',
      'Billing',
      'Integrations',
      'Logs',
    ];
    return (
      <Tabs {...args}>
        {labels.map((label, i) => (
          <Tab
            key={i}
            selected={selected === i}
            onClick={() => setSelected(i)}
          >
            {label}
          </Tab>
        ))}
      </Tabs>
    );
  },
};

export const WithDisabledTab: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    const labels = ['Active', 'Also Active', 'Disabled', 'Active Too'];
    return (
      <div style={{ width: 600 }}>
        <Tabs {...args}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              selected={selected === i}
              disabled={i === 2}
              onClick={() => setSelected(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  },
};
