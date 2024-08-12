import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme/theme';
import React from 'react';

const preview: Preview = {
  decorators: [
    Story => (
      <>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
