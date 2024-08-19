import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AddIcon } from '../icons/AddIcon';
import { ThemeProvider } from '../theme';
import { TextField } from '../components/textfield/TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    isRequired: {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall', 'tiny'],
      description: '버튼의 크기',
    },
    fullWidth: {
      control: 'boolean',
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
    radius: {
      control: 'number',
    },
    isError: {
      control: 'boolean',
    },
    helpText: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    size: 'xlarge',
    fullWidth: false,
    startIcon: false,
    endIcon: false,
    radius: 6,
    disabled: false,
    isRequired: false,
  },
  render: args => (
    <div>
      <ThemeProvider>
        <div
          style={{
            width: '500px',
            height: '130px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            marginBottom: '10px',
          }}
        >
          <TextField {...args} />
        </div>
      </ThemeProvider>
      <ThemeProvider mode="dark">
        <div
          style={{
            backgroundColor: 'black',
            width: '500px',
            height: '130px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField {...args} />
        </div>
      </ThemeProvider>
    </div>
  ),
};
