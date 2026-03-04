import type { Meta, StoryObj } from '@storybook/react';
import { HeroLegacyImage } from './HeroLegacyImage';

const sampleImage =
  'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1200&q=80';

const SidebarNav = ({ collapsed }: { collapsed?: boolean }) => (
  <nav
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: collapsed ? 4 : 8,
      width: '100%',
      lineHeight: 1.2,
    }}
  >
    <p
      style={{
        margin: 0,
        fontSize: 'var(--font-size-title-s)',
        fontWeight: 'var(--font-weight-medium)' as unknown as number,
        color: 'var(--color-on-surface)',
        letterSpacing: 'var(--letter-spacing-regular)',
      }}
    >
      On This Page:
    </p>
    {!collapsed && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          fontSize: 'var(--font-size-body-lg)',
          fontWeight: 'var(--font-weight-regular)' as unknown as number,
          color: 'var(--ref-color-blue-80)',
        }}
      >
        <p style={{ margin: 0 }}>Section Title 1</p>
        <p style={{ margin: 0 }}>Section Title 2</p>
        <p style={{ margin: 0 }}>Section Title 3</p>
      </div>
    )}
  </nav>
);

const meta: Meta<typeof HeroLegacyImage> = {
  title: 'Components/HeroLegacyImage',
  component: HeroLegacyImage,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    headline: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    imageSrc: sampleImage,
    imageAlt: 'Hero image',
    headline: 'Write a clear and eye-catching headline.',
    body: "Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of breakthroughs.",
  },
};

export default meta;

type Story = StoryObj<typeof HeroLegacyImage>;

export const Vertical: Story = {
  args: {
    layout: 'vertical',
    sidebar: <SidebarNav collapsed />,
    style: { maxWidth: 375 },
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
    sidebar: <SidebarNav />,
    style: { maxWidth: 767 },
  },
};

export const WithoutSidebar: Story = {
  args: {
    layout: 'horizontal',
    style: { maxWidth: 767 },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        <h3 style={{ marginBottom: 16 }}>Vertical (mobile)</h3>
        <HeroLegacyImage
          layout="vertical"
          imageSrc={sampleImage}
          imageAlt="Hero image"
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of."
          sidebar={<SidebarNav collapsed />}
          style={{ maxWidth: 375 }}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>Horizontal (desktop)</h3>
        <HeroLegacyImage
          layout="horizontal"
          imageSrc={sampleImage}
          imageAlt="Hero image"
          headline="Write a clear and eye-catching headline."
          body="Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of breakthroughs."
          sidebar={<SidebarNav />}
          style={{ maxWidth: 767 }}
        />
      </div>
    </div>
  ),
};
