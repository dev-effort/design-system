import { Black, White } from './AlphaColors';
import { Blue } from './Blue';
import { CoolGray } from './CoolGray';
import { Green } from './Green';
import { Navy } from './Navy';
import { Orange } from './Orange';
import { Red } from './Red';
import { Yellow } from './Yellow';

export type ThemeColorSetType = {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    dim: string;
    border: string;
    bg: string;
  };
  positive: {
    primary: string;
    secondary: string;
    border: string;
    bg: string;
  };
  informative: {
    primary: string;
    secondary: string;
    border: string;
    bg: string;
  };
  error: {
    primary: string;
    secondary: string;
    border: string;
    dim: string;
    bg: string;
  };
  stop: {
    primary: string;
    secondary: string;
    border: string;
    bg: string;
  };
  delay: {
    primary: string;
    secondary: string;
    border: string;
    bg: string;
  };
  warning: {
    primary: string;
    secondary: string;
    border: string;
    bg: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    hint: string;
    dim: string;
    white: string;
    black: string;
    inverse: string;
  };
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    dim: string;
    emphize: string;
    hint: string;
    inverse: string;
    overlay: string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
    active: string;
    dim: string;
    inverse: string;
  };
  icon: {
    primary: string;
    secondary: string;
    tertiary: string;
    dim: string;
    emphize: string;
    inverse: string;
  };
};

export const themeColorSet = (mode: 'light' | 'dark'): ThemeColorSetType => {
  return {
    stop: {
      bg: Navy[mode][50],
      border: Navy[mode][200],
      secondary: Navy[mode][700],
      primary: Navy[mode][500],
    },
    color: {
      primary: Blue[mode][500],
      secondary: Blue[mode][600],
      tertiary: Blue[mode][700],
      dim: Blue[mode][400],
      border: Blue[mode][200],
      bg: Blue[mode][50],
    },

    positive: {
      primary: Green[mode][500],
      secondary: Green[mode][700],
      border: Green[mode][100],
      bg: Green[mode][50],
    },
    informative: {
      primary: Blue[mode][500],
      secondary: Blue[mode][700],
      border: Blue[mode][200],
      bg: Blue[mode][50],
    },
    error: {
      primary: Red[mode][500],
      secondary: Red[mode][700],
      border: Red[mode][100],
      dim: Red[mode][0],
      bg: Red[mode][50],
    },
    delay: {
      primary: Orange[mode][500],
      secondary: Orange[mode][700],
      border: Orange[mode][200],
      bg: Orange[mode][50],
    },
    warning: {
      primary: Yellow[mode][500],
      secondary: Yellow[mode][700],
      border: Yellow[mode][200],
      bg: Yellow[mode][50],
    },

    text: {
      primary: CoolGray[mode][900],
      secondary: CoolGray[mode][700],
      tertiary: CoolGray[mode][500],
      hint: CoolGray[mode][400],
      dim: CoolGray[mode][300],
      white: White[100],
      black: Black[0],
      inverse: mode === 'light' ? Black[0] : White[100],
    },
    bg: {
      primary: mode === 'light' ? White[100] : Black[0],
      secondary: CoolGray[mode][0],
      tertiary: CoolGray[mode][50],
      dim: CoolGray[mode][100],
      emphize: CoolGray[mode][300],
      hint: CoolGray[mode][700],
      inverse: CoolGray[mode][900],
      overlay: Black[20],
    },
    border: {
      primary: CoolGray[mode][200],
      secondary: CoolGray[mode][300],
      tertiary: CoolGray[mode][400],
      active: CoolGray[mode][900],
      dim: CoolGray[mode][100],
      inverse: White[100],
    },
    icon: {
      primary: CoolGray[mode][900],
      secondary: CoolGray[mode][500],
      tertiary: CoolGray[mode][400],
      dim: CoolGray[mode][200],
      emphize: CoolGray[mode][100],
      inverse: White[100],
    },
  };
};
