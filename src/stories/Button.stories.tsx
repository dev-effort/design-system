import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/buttons';
import { AddIcon } from '../icons/AddIcon';
import { ThemeProvider } from '../theme';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
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
          <Button {...args} />
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
          <Button {...args} />
        </div>
      </ThemeProvider>
    </div>
  ),
};
