import { PropsWithChildren, ReactNode } from 'react';
import { Size } from '../../theme/sizes';
import styled from '@emotion/styled';
import { fonts } from '../../theme';

type Variant = 'contain' | 'outline' | 'text';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

type ButtonProps = {
  variant: Variant;
  size: keyof Size;
  color?: Color;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  radius?: number;
};

type Props = PropsWithChildren<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant,
  size,
  children,
  color = 'primary',
  startIcon,
  endIcon,
  radius = 6,
  type = 'button',
  ...props
}: Props) => {
  return (
    <Container
      variant={variant}
      size={size}
      color={color}
      radius={radius}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </Container>
  );
};

const getFontSize = (size: keyof Size) => {
  switch (size) {
    case 'xlarge':
      return fonts(18, 'bold');
    case 'large':
      return fonts(16, 'bold');
    case 'medium':
      return fonts(14, 'bold');
    case 'small':
      return fonts(14, 'bold');
    case 'xsmall':
      return fonts(13, 'bold');
    case 'tiny':
      return fonts(13, 'bold');
  }
};

const getBorder = (variant: Variant, color: string) => {
  if (variant === 'outline') return `1px solid ${color}`;
  return 'none';
};

const getBackgroundColor = (variant: Variant, color: string) => {
  if (variant === 'contain') return color;
  else if (variant === 'outline') return '#fff';
  else return 'transparent';
};

const getPadding = (size: keyof Size, startIcon: boolean, endIcon: boolean) => {
  const paddingMap: Record<keyof Size, { base: number; offset: number }> = {
    xlarge: { base: 16, offset: 4 },
    large: { base: 16, offset: 4 },
    medium: { base: 16, offset: 4 },
    small: { base: 12, offset: 4 },
    xsmall: { base: 10, offset: 4 },
    tiny: { base: 10, offset: 4 },
  };

  const { base, offset } = paddingMap[size];
  const rightPadding = endIcon ? base - offset : base;
  const leftPadding = startIcon ? base - offset : base;

  return `0px ${rightPadding}px 0px ${leftPadding}px`;
};

const Container = styled.button<ButtonProps>`
  height: ${props => props.theme.size[props.size]}px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${props => (props.size === 'xlarge' ? '6px' : '4px')};
  padding: ${props => getPadding(props.size, !!props.startIcon, !!props.endIcon)};
  border-radius: ${props => props.radius}px;
  ${props => getFontSize(props.size)};

  color: ${props => (props.variant === 'contain' ? props.theme.colors.text.white : props.theme.colors.text.black)};
  background-color: ${props => getBackgroundColor(props.variant, props.theme.colors.color.primary)};
  border: ${props => getBorder(props.variant, props.theme.colors.color.border)};
`;
