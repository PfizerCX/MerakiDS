import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: { control: false },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    showFlag: { control: 'boolean' },
    showFlagOnDragOnly: {
      control: 'boolean',
      description: 'When true, flag is only visible while dragging the handle',
    },
    showRange: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    showFlag: true,
    showFlagOnDragOnly: true,
    showRange: true,
    orientation: 'horizontal',
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

const ContinuousControlled = (args: React.ComponentProps<typeof Slider>) => {
  const [value, setValue] = useState<number>((args.value as number) ?? 50);
  return (
    <div style={{ width: 400 }}>
      <Slider {...args} value={value} onChange={(v) => setValue(v as number)} />
    </div>
  );
};

const RangeControlled = (args: React.ComponentProps<typeof Slider>) => {
  const [value, setValue] = useState<[number, number]>(
    (args.value as [number, number]) ?? [20, 80]
  );
  return (
    <div style={{ width: 400 }}>
      <Slider
        {...args}
        value={value}
        onChange={(v) => setValue(v as [number, number])}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ContinuousControlled {...args} />,
  args: { value: 50 },
};

export const WithLabel: Story = {
  render: (args) => <ContinuousControlled {...args} />,
  args: { value: 50, label: 'Slider label' },
};

export const RangeSlider: Story = {
  render: (args) => <RangeControlled {...args} />,
  args: { value: [20, 80], label: 'Range slider' },
};

export const FlagOnDragOnly: Story = {
  render: (args) => <ContinuousControlled {...args} />,
  args: {
    value: 50,
    label: 'Flag visible only while dragging',
    showFlag: true,
    showFlagOnDragOnly: true,
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<number>(50);
    return (
      <div style={{ height: 400 }}>
        <Slider
          {...args}
          orientation="vertical"
          value={value}
          onChange={(v) => setValue(v as number)}
        />
      </div>
    );
  },
  args: { label: 'Vertical slider' },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: 400 }}>
      <Slider
        label="Disabled continuous"
        value={50}
        disabled
      />
      <Slider
        label="Disabled range"
        value={[20, 80]}
        disabled
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(25);
    const [v3, setV3] = useState(50);
    const [v4, setV4] = useState(75);
    const [v5, setV5] = useState(100);
    const [r1, setR1] = useState<[number, number]>([0, 30]);
    const [r2, setR2] = useState<[number, number]>([10, 60]);
    const [r3, setR3] = useState<[number, number]>([40, 60]);
    const [r4, setR4] = useState<[number, number]>([50, 100]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <h3 style={{ margin: 0 }}>Continuous Horizontal</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 400 }}>
          <Slider value={v1} onChange={(v) => setV1(v as number)} />
          <Slider value={v2} onChange={(v) => setV2(v as number)} />
          <Slider value={v3} onChange={(v) => setV3(v as number)} />
          <Slider value={v4} onChange={(v) => setV4(v as number)} />
          <Slider value={v5} onChange={(v) => setV5(v as number)} />
          <Slider value={50} disabled />
        </div>

        <h3 style={{ margin: 0 }}>Range Horizontal</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 400 }}>
          <Slider value={r1} onChange={(v) => setR1(v as [number, number])} />
          <Slider value={r2} onChange={(v) => setR2(v as [number, number])} />
          <Slider value={r3} onChange={(v) => setR3(v as [number, number])} />
          <Slider value={r4} onChange={(v) => setR4(v as [number, number])} />
          <Slider value={[20, 80] as [number, number]} disabled />
        </div>
      </div>
    );
  },
};
