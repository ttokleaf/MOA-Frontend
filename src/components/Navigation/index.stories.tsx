import type { Meta, StoryObj } from '@storybook/nextjs';
import Navigation from './index';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
  args: {
    onItemClick: (id: string) => {
      console.log('Navigation item clicked:', id);
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-full items-end">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultActiveId: 'calendar',
  },
};

export const ActiveCalendar: Story = {
  args: {
    defaultActiveId: 'calendar',
  },
};

export const ActiveAnalysis: Story = {
  args: {
    defaultActiveId: 'analysis',
  },
};

export const ActiveChat: Story = {
  args: {
    defaultActiveId: 'chat',
  },
};

export const ActiveCalculator: Story = {
  args: {
    defaultActiveId: 'calculator',
  },
};

export const ActiveMy: Story = {
  args: {
    defaultActiveId: 'my',
  },
};
