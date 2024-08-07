type FontStyle = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight?: string;
  textDecoration?: string;
};

export const fontStyles: { [key: number]: FontStyle } = {
  11: {
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.15px',
  },
  12: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.15px',
  },
  13: {
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
  },
  14: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
  },
  15: {
    fontSize: '15px',
    lineHeight: '22px',
    letterSpacing: '0.15px',
  },
  16: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  18: {
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '0.25px',
  },
  20: {
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0.25px',
  },
  24: {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.5px',
  },
  32: {
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '1px',
  },
  36: {
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '1px',
  },
  48: {
    fontSize: '48px',
    lineHeight: '60px',
    letterSpacing: '1px',
  },
  60: {
    fontSize: '60px',
    lineHeight: '80px',
    letterSpacing: '1.5px',
  },
} as const;

export type FontWeight = 'regular' | 'medium' | 'bold';

export const fonts = (size: keyof typeof fontStyles, weight: FontWeight, isUnderline?: boolean) => {
  const returnVal: FontStyle = { ...fontStyles[size] };
  if (weight) {
    Object.assign(returnVal, { fontWeight: weight === 'regular' ? '400' : weight === 'medium' ? '500' : '700' });
  }
  if (isUnderline) {
    Object.assign(returnVal, { textDecoration: 'underline' });
  }

  return returnVal;
};
