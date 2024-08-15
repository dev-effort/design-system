import { SVGProps } from 'react';

export type SvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  width?: number;
  height?: number;
  rotateNum?: number;
  bgColor?: string;
  brColor?: string;
  className?: string;
  isFilled?: boolean;
};
