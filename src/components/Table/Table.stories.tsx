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

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function generateRandomTableData(count = 8): TableRow[] {
  const names = [
    'Sara',
    'Alex',
    'Mina',
    'Jordan',
    'Taylor',
    'Priya',
    'Lucas',
    'Elena',
    'Noah',
    'Zoe',
  ];
  const roles = ['Designer', 'Engineer', 'Product Manager', 'Researcher', 'QA Analyst'];
  const statuses = ['Active', 'Pending', 'Blocked', 'Reviewing', 'Offline'];
  const cities = ['San Francisco', 'Austin', 'Seattle', 'Boston', 'Chicago', 'New York'];

  return Array.from({ length: count }, (_, index) => {
    const name = randomItem(names);
    const role = randomItem(roles);
    const status = randomItem(statuses);
    const city = randomItem(cities);
    const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
    const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
    const year = 2022 + Math.floor(Math.random() * 5);

    return {
      name: { name, avatar: avatarUrl },
      role,
      status,
      address: `${100 + Math.floor(Math.random() * 900)} ${city}`,
      date: `${month}-${day}-${year}`,
    };
  });
}

const defaultData: TableRow[] = generateRandomTableData();

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: false,
      table: { disable: true },
    },
    data: {
      control: false,
      table: { disable: true },
    },
    onRowAction: {
      control: false,
      table: { disable: true },
    },
    onSelectionChange: {
      control: false,
      table: { disable: true },
    },
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
