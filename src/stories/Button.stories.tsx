import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/buttons';
import { AddIcon } from '../icons/AddIcon';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: 'number',
    },
    endIcon: {
      control: 'boolean',
      mapping: {
        false: '',
        true: <AddIcon />,
      },
    },
    startIcon: {
      control: 'boolean',
      mapping: {
        false: '',
        true: <AddIcon />,
      },
    },
    variant: {
      control: 'radio',
      options: ['contain', 'outline', 'text'],
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
    startIcon: false,
    endIcon: false,
    radius: 6,
  },
};
