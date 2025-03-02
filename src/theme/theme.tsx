import createCache from '@emotion/cache';
import { ThemeColorSetType, themeColorSet } from './colors/ThemeColorSet';
import { size, Size, smallerSize } from './sizes';
import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';
import emotionStyled from '@emotion/styled';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColorSetType;
    size: {
      common: Size;
      smaller: Size;
    };
  }
}

export interface CustomTheme {
  colors: {
    light: ThemeColorSetType;
    dark: ThemeColorSetType;
  };
  size: {
    common: Size;
    smaller: Size;
  };
}

const defaultTheme = {
  colors: themeColorSet,
  size: {
    common: size,
    smaller: smallerSize,
  },
};

const myCache = createCache({
  key: 'gds',
  prepend: true,
});

type Props = PropsWithChildren<{
  theme?: CustomTheme;
  mode?: 'light' | 'dark';
}>;

export const styled = emotionStyled;

export const ThemeProvider = ({ theme, children, mode = 'light' }: Props) => {
  return (
    <CacheProvider value={myCache}>
      <EmotionThemeProvider
        theme={
          theme
            ? { ...theme, colors: theme.colors[mode], size: theme.size }
            : { colors: defaultTheme.colors(mode), size: defaultTheme.size }
        }
      >
        {children}
      </EmotionThemeProvider>
    </CacheProvider>
  );
};
