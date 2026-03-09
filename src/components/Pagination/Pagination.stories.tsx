import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'mid', 'condensed'],
      description: 'Display variant — normal shows most pages, mid fewer, condensed only current/total',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Currently active page (1-indexed)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all interaction',
    },
  },
  args: {
    variant: 'normal',
    totalPages: 11,
    currentPage: 2,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Normal: Story = {};

export const Mid: Story = {
  args: { variant: 'mid' },
};

export const Condensed: Story = {
  args: { variant: 'condensed', totalPages: 3, currentPage: 2 },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FewPages: Story = {
  args: { totalPages: 4, currentPage: 1 },
};

export const Interactive: Story = {
  render: function InteractivePagination() {
    const [page, setPage] = useState(2);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Pagination
          variant="normal"
          totalPages={11}
          currentPage={page}
          onPageChange={setPage}
        />
        <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 14, color: 'var(--color-on-surface)' }}>
          Current page: {page}
        </p>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: function AllVariantsRender() {
    const [normalPage, setNormalPage] = useState(2);
    const [midPage, setMidPage] = useState(2);
    const [condensedPage, setCondensedPage] = useState(2);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 14, color: 'var(--color-on-surface)', marginBottom: 8 }}>
            Normal
          </p>
          <Pagination variant="normal" totalPages={11} currentPage={normalPage} onPageChange={setNormalPage} />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 14, color: 'var(--color-on-surface)', marginBottom: 8 }}>
            Mid
          </p>
          <Pagination variant="mid" totalPages={11} currentPage={midPage} onPageChange={setMidPage} />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 14, color: 'var(--color-on-surface)', marginBottom: 8 }}>
            Condensed
          </p>
          <Pagination variant="condensed" totalPages={3} currentPage={condensedPage} onPageChange={setCondensedPage} />
        </div>
      </div>
    );
  },
};
