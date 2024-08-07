import { Black, White } from './AlphaColors';
import { Blue } from './Blue';
import { CoolGray } from './CoolGray';
import { Green } from './Green';
import { Navy } from './Navy';
import { Orange } from './Orange';
import { Red } from './Red';
import { Violet } from './Violet';
import { Yellow } from './Yellow';

export type ThemeColorSetType = {
  color: {
    primary: string;
    primaryOpacity: string;
    secondary: string;
    tertiary: string;
    teritaryOpacity: string;
    dim: string;
    border: string;
    bg: string;
    bgOpacity: string;
  };
  positive: {
    primary: string;
    secondary: string;
    secondaryOpacity: string;
    border: string;
    bg: string;
    bgOpacity: string;
  };
  informative: {
    primary: string;
    secondary: string;
    secondaryOpacity: string;
    border: string;
    bg: string;
    bgOpacity: string;
  };
  error: {
    primary: string;
    secondary: string;
    secondaryOpacity: string;
    border: string;
    dim: string;
    bg: string;
    bgOpacity: string;
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
    secondaryOpacity: string;
    border: string;
    bg: string;
    bgOpacity: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    hint: string;
    dim: string;
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
    'custom-primary': string;
    'custom-secondary': string;
    'custom-opacity70': string;
    'custom-opacity20': string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
    active: string;
    dim: string;
    inverse: string;
    opacity10: string;
  };
  icon: {
    primary: string;
    secondary: string;
    tertiary: string;
    dim: string;
    emphize: string;
    inverse: string;
    'custom-primary': string;
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
      primary: Violet[mode][500],
      primaryOpacity: `${Violet[mode][500]}33`,
      secondary: Violet[mode][600],
      tertiary: Violet[mode][700],
      dim: Violet[mode][400],
      border: Violet[mode][200],
      bg: Violet[mode][50],
      bgOpacity: `${Violet[mode][50]}59`,
      teritaryOpacity: `${Violet[mode][700]}66`,
    },

    positive: {
      primary: Green[mode][500],
      secondary: Green[mode][700],
      secondaryOpacity: `${Green[mode][700]}33`,
      border: Green[mode][100],
      bg: Green[mode][50],
      bgOpacity: `${Green[mode][50]}59`,
    },
    informative: {
      primary: Blue[mode][500],
      secondary: Blue[mode][700],
      secondaryOpacity: `${Blue[mode][700]}33`,
      border: Blue[mode][200],
      bg: Blue[mode][50],
      bgOpacity: `${Blue[mode][50]}59`,
    },
    error: {
      primary: Red[mode][500],
      secondary: Red[mode][700],
      secondaryOpacity: `${Red[mode][700]}33`,
      border: Red[mode][100],
      dim: Red[mode][0],
      bg: Red[mode][50],
      bgOpacity: `${Red[mode][50]}59`,
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
      secondaryOpacity: `${Yellow[mode][700]}33`,
      border: Yellow[mode][200],
      bg: Yellow[mode][50],
      bgOpacity: `${Yellow[mode][50]}59`,
    },

    text: {
      primary: CoolGray[mode][900],
      secondary: CoolGray[mode][700],
      tertiary: CoolGray[mode][500],
      hint: CoolGray[mode][400],
      dim: CoolGray[mode][300],
      inverse: White[100],
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
      'custom-primary': Navy.light[900],
      'custom-secondary': Navy.light[800],
      'custom-opacity70': `${CoolGray.light[900]}B2`,
      'custom-opacity20': `${CoolGray.light[900]}33`,
    },
    border: {
      primary: CoolGray[mode][200],
      secondary: CoolGray[mode][300],
      tertiary: CoolGray[mode][400],
      active: CoolGray[mode][900],
      dim: CoolGray[mode][100],
      inverse: White[100],
      opacity10: Black[10],
    },
    icon: {
      primary: CoolGray[mode][900],
      secondary: CoolGray[mode][500],
      tertiary: CoolGray[mode][400],
      dim: CoolGray[mode][200],
      emphize: CoolGray[mode][100],
      inverse: White[100],
      'custom-primary': Navy[mode][500],
    },
  };
};
