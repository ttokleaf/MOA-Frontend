import type { Meta, StoryObj } from '@storybook/nextjs';
import Header from './index';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
  args: {
    onSettingsClick: () => {
      console.log('Settings clicked');
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-full items-start">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithoutSettings: Story = {
  args: {
    showSettings: false,
  },
};
