import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AddIcon } from '../icons/AddIcon';
import { ThemeProvider } from '../theme';
import { Label } from '../components/badge/Label';

const meta = {
  title: 'Components/Badge',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    color: {
      control: 'radio',
      options: ['primary', 'ghost', 'success', 'error', 'warning'],
    },
    radius: {
      control: 'number',
    },
    endIcon: {
      control: 'boolean',
      mapping: {
        false: '',
        true: <AddIcon size={16} />,
      },
    },
    startIcon: {
      control: 'boolean',
      mapping: {
        false: '',
        true: <AddIcon size={16} />,
      },
    },
    variant: {
      control: 'radio',
      options: ['contain', 'outline', 'complex'],
      description: '버튼의 모양',
    },
    size: {
      control: 'radio',
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall', 'tiny'],
      description: '버튼의 크기',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    variant: 'contain',
    color: 'primary',
    size: 'xlarge',
    fullWidth: false,
    children: '버튼',
    startIcon: false,
    endIcon: false,
    radius: 6,
    disabled: false,
  },
  render: args => (
    <div>
      <ThemeProvider>
        <div
          style={{
            width: '500px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            marginBottom: '10px',
          }}
        >
          <Label {...args} />
        </div>
      </ThemeProvider>
      <ThemeProvider mode="dark">
        <div
          style={{
            backgroundColor: 'black',
            width: '500px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Label {...args} />
        </div>
      </ThemeProvider>
    </div>
  ),
};
