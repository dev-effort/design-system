export type Size = {
  xlarge: number;
  large: number;
  medium: number;
  small: number;
  xsmall: number;
  tiny: number;
};

export type SizeKey = keyof Size;

export const size: Size = {
  xlarge: 52,
  large: 44,
  medium: 40,
  small: 36,
  xsmall: 32,
  tiny: 28,
};
