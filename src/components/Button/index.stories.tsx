import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '입력 완료',
    variant: 'primary',
  },
};

export const Back: Story = {
  args: {
    children: '이전',
    variant: 'back',
  },
};

export const Cancel: Story = {
  args: {
    children: '취소',
    variant: 'cancel',
  },
};

export const Outline: Story = {
  args: {
    children: '새 가계부 만들기',
    variant: 'outline',
  },
};

export const Text: Story = {
  args: {
    children: '건너뛰기',
    variant: 'text',
  },
};

export const Underline: Story = {
  args: {
    children: '건너뛰기',
    variant: 'underline',
  },
};

export const SizeXS: Story = {
  args: {
    children: 'XS',
    size: 'xs',
  },
};

export const SizeSM: Story = {
  args: {
    children: '다음',
    size: 'sm',
  },
};

export const SizeMD: Story = {
  args: {
    children: '확인',
    size: 'md',
  },
};

export const SizeLG: Story = {
  args: {
    children: '확인',
    size: 'lg',
  },
};

export const SizeXL: Story = {
  args: {
    children: '입력 완료',
    size: 'xl',
  },
};

export const Loading: Story = {
  args: {
    children: '입력 완료',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: '입력 완료',
    disabled: true,
  },
};
