import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HeroLegacyImage } from './HeroLegacyImage';
import { ChevronDownWide } from '../../icons/ChevronDownWide';

const sampleImage =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80';

const sectionLinks = ['Section Title 1', 'Section Title 2', 'Section Title 3'];

const SidebarNavDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',
        lineHeight: 1.2,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          all: 'unset',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: 'var(--font-size-title-s)',
          fontWeight: 'var(--font-weight-medium)' as unknown as number,
          color: 'var(--color-on-surface)',
          letterSpacing: 'var(--letter-spacing-regular)',
        }}
        aria-expanded={open}
      >
        On This Page:
        <ChevronDownWide
          size={24}
          style={{
            transition: 'transform 200ms ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {open && (
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
          {sectionLinks.map((title) => (
            <p key={title} style={{ margin: 0 }}>
              {title}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};

const SidebarNavExpanded = () => (
  <nav
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
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
      {sectionLinks.map((title) => (
        <p key={title} style={{ margin: 0 }}>
          {title}
        </p>
      ))}
    </div>
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
    sidebar: <SidebarNavDropdown />,
    style: { maxWidth: 375 },
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
    sidebar: <SidebarNavExpanded />,
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
          sidebar={<SidebarNavDropdown />}
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
          sidebar={<SidebarNavExpanded />}
          style={{ maxWidth: 767 }}
        />
      </div>
    </div>
  ),
};
