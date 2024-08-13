import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/buttons';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['contain', 'border', 'text'],
      description: '버튼의 모양',
    },
    size: {
      control: 'radio',
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall', 'tiny'],
      description: '버튼의 크기',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contain',
    size: 'xlarge',
    children: '버튼',
  },
};
