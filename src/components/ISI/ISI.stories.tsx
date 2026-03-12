import type { Meta, StoryObj } from '@storybook/react';
import { ISI, ISICard } from './ISI';

const meta: Meta<typeof ISI> = {
  title: 'Components/ISI',
  component: ISI,
  tags: ['autodocs'],
  argTypes: {
    inset: {
      control: 'boolean',
      description: 'Adds horizontal margins for inset layout',
    },
    headerTitle: {
      control: 'text',
      description: 'Title displayed in the header bar',
    },
    defaultState: {
      control: 'select',
      options: ['default', 'expanded', 'collapsed'],
      description: 'Initial display state',
    },
    regulatoryLinks: { table: { disable: true } },
    children: { table: { disable: true } },
    aside: { table: { disable: true } },
  },
  args: {
    inset: false,
    headerTitle: 'Important Safety Information & Use(s)',
    defaultState: 'default',
    regulatoryLinks: [
      { label: 'Prescribing Information', href: '#prescribing' },
      { label: 'Patient Information', href: '#patient' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 600, paddingBottom: 300 }}>
        <p style={{ padding: 24 }}>
          Scroll down — the ISI is fixed to the bottom of the viewport.
        </p>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ISI>;

const sampleChildren = (
  <>
    <ISICard title="[PRODUCT] may cause serious side effects:">
      <p>Side effect (name)</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Call your doctor right away about any new or worsening signs of [issues].
        Signs may include:
      </p>
      <ul>
        <li>Issue #1</li>
        <li>Issue #2</li>
        <li>Issue #3</li>
        <li>Issue #4</li>
      </ul>
      <p>
        Your doctor may pause or stop treatment with [PRODUCT NAME] if your
        symptoms are severe.
      </p>
      <p>
        You should report negative side effects of prescription drugs to the FDA.
        Visit <a href="https://www.fda.gov/medwatch">www.fda.gov/medwatch</a> or
        call <a href="tel:1-800-332-1088">1-800-FDA-1088</a>.
      </p>
    </ISICard>
    <ISICard title="What are the other common side effects of [PRODUCT]?">
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
      <ul>
        <li>
          Call your doctor right away if you have any of these symptoms during
          treatment:
        </li>
      </ul>
      <ul>
        <li>Symptom #1</li>
        <li>Symptom #2</li>
        <li>Symptom #3</li>
        <li>Symptom #4</li>
      </ul>
      <p>
        These are not all the possible side effects of [PRODUCT NAME]. For more
        information, ask your doctor.
      </p>
    </ISICard>
    <ISICard title="What should I tell my doctor before taking [PRODUCT]?">
      <p>
        Before you take [PRODUCT NAME], tell your doctor about all of your
        medical conditions. This includes:
      </p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
        <li>
          amco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit.
        </li>
      </ul>
      <p>Tell your doctor about all the medicines you take. This includes:</p>
      <ul>
        <li>Prescription medicines</li>
        <li>Medicines you buy without a prescription</li>
        <li>Vitamins</li>
        <li>Health supplements</li>
        <li>Herbal medicines</li>
      </ul>
    </ISICard>
    <ISICard title="Is there anything else I should know about taking [PRODUCT]?">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Please see Full Prescribing Information and Patient Information.
      </p>
    </ISICard>
  </>
);

const sampleAside = (
  <ISICard title="What is [PRODUCT]?">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p>
      Excepteur sint occaecat cupidatat non proident. You may take [PRODUCT
      NAME] with:
    </p>
    <ul>
      <li>Item #1</li>
      <li>Item #2</li>
      <li>Item #3</li>
    </ul>
    <p>
      Please see Full Prescribing Information and Patient Information.
    </p>
  </ISICard>
);

export const Default: Story = {
  args: {
    children: sampleChildren,
    aside: sampleAside,
  },
};

export const Expanded: Story = {
  args: {
    children: sampleChildren,
    aside: sampleAside,
    defaultState: 'expanded',
  },
};

export const Collapsed: Story = {
  args: {
    children: sampleChildren,
    aside: sampleAside,
    defaultState: 'collapsed',
  },
};

export const Inset: Story = {
  args: {
    children: sampleChildren,
    aside: sampleAside,
    inset: true,
  },
};

export const WithBlackboxWarning: Story = {
  args: {
    aside: sampleAside,
    children: (
      <>
        <ISICard title="Warning: [ADVERSE EFFECT]" variant="blackbox">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </ISICard>
        {sampleChildren}
      </>
    ),
  },
};

export const NoRegulatoryLinks: Story = {
  args: {
    children: sampleChildren,
    aside: sampleAside,
    regulatoryLinks: [],
  },
};
