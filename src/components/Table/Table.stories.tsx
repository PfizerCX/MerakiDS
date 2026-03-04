import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableColumn, TableRow } from './Table';

const avatarUrl =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face';

const defaultColumns: TableColumn[] = [
  { key: 'name', header: 'Name', type: 'profile', showSortIcon: true },
  { key: 'role', header: 'Role', showSortIcon: true },
  { key: 'status', header: 'Status', type: 'chip', showSortIcon: true },
  { key: 'address', header: 'Address', showSortIcon: true },
  { key: 'date', header: 'Date', type: 'date', showSortIcon: true },
];

const defaultData: TableRow[] = [
  { name: { name: 'Sara', avatar: avatarUrl }, role: 'Designer', status: 'Active', address: '000 San Francis...', date: 'MM-DD-YYYY' },
  { name: { name: 'Sara', avatar: avatarUrl }, role: 'Designer', status: 'Active', address: '000 San Francis...', date: 'MM-DD-YYYY' },
  { name: { name: 'Sara', avatar: avatarUrl }, role: 'Designer', status: 'Active', address: '000 San Francis...', date: 'MM-DD-YYYY' },
  { name: { name: 'Sara', avatar: avatarUrl }, role: 'Designer', status: 'Active', address: '000 San Francis...', date: 'MM-DD-YYYY' },
  { name: { name: 'Sara', avatar: avatarUrl }, role: 'Designer', status: 'Active', address: '000 San Francis...', date: 'MM-DD-YYYY' },
  { name: { name: 'Sara', avatar: avatarUrl }, role: 'Designer', status: 'Active', address: '000 San Francis...', date: 'MM-DD-YYYY' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    showSelectionColumn: {
      control: 'boolean',
      description: 'Show a checkbox column for row selection',
    },
    showActionColumn: {
      control: 'boolean',
      description: 'Show an action (overflow menu) column',
    },
    showInlineHeader: {
      control: 'boolean',
      description: 'Show the inline header bar above the table',
    },
    inlineHeaderTitle: {
      control: 'text',
      description: 'Title text for the inline header',
    },
    zebraStriped: {
      control: 'boolean',
      description: 'Alternate row background colors',
    },
  },
  args: {
    columns: defaultColumns,
    data: defaultData,
    showSelectionColumn: false,
    showActionColumn: false,
    showInlineHeader: false,
    inlineHeaderTitle: 'Inline Table Header',
    zebraStriped: true,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const WithSelectionColumn: Story = {
  args: {
    showSelectionColumn: true,
  },
};

export const WithActionColumn: Story = {
  args: {
    showActionColumn: true,
  },
};

export const WithInlineHeader: Story = {
  args: {
    showInlineHeader: true,
    inlineHeaderTitle: 'Team Members',
  },
};

export const MinimalColumns: Story = {
  args: {
    columns: [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
    ],
    data: [
      { id: '001', name: 'Alice Johnson', email: 'alice@example.com' },
      { id: '002', name: 'Bob Smith', email: 'bob@example.com' },
      { id: '003', name: 'Carol Williams', email: 'carol@example.com' },
    ],
  },
};

export const AllFeatures: Story = {
  args: {
    showSelectionColumn: true,
    showActionColumn: true,
    showInlineHeader: true,
    inlineHeaderTitle: 'Team Directory',
    zebraStriped: true,
  },
};

export const NoZebraStriping: Story = {
  args: {
    zebraStriped: false,
  },
};
