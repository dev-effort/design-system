import createCache from '@emotion/cache';
import { ThemeColorSetType, themeColorSet } from './colors/ThemeColorSet';
import { size, Size } from './sizes';
import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColorSetType;
    size: Size;
  }
}

export interface CustomTheme {
  colors: {
    light: ThemeColorSetType;
    dark: ThemeColorSetType;
  };
  size: Size;
}

const defaultTheme = {
  colors: themeColorSet,
  size: size,
};

const myCache = createCache({
  key: 'pdc',
  prepend: true,
});

type Props = PropsWithChildren<{
  theme?: CustomTheme;
  mode?: 'light' | 'dark';
}>;

export const ThemeProvider = ({ theme, children, mode = 'light' }: Props) => {
  return (
    <CacheProvider value={myCache}>
      <EmotionThemeProvider
        theme={
          theme ? { ...theme, colors: theme.colors[mode] } : { ...defaultTheme, colors: defaultTheme.colors(mode) }
        }
      >
        {children}
      </EmotionThemeProvider>
    </CacheProvider>
  );
};
