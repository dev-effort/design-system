import { PropsWithChildren, ReactNode } from 'react';
import { Size } from '../../theme/sizes';
import styled from '@emotion/styled';
import { fonts } from '../../theme';
import { css } from '@emotion/react';
import { Theme } from '@emotion/react';

type Variant = 'contain' | 'outline' | 'text';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

type ButtonProps = {
  variant?: Variant;
  size?: keyof Size;
  color?: Color;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  radius?: number;
  fullWidth?: boolean;
};

type Props = PropsWithChildren<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'contain',
  size = 'medium',
  fullWidth = false,
  color = 'primary',
  startIcon = false,
  endIcon = false,
  radius = 6,
  type = 'button',
  disabled = false,
  ...props
}: Props) => {
  return (
    <Container
      variant={variant}
      size={size}
      color={color}
      radius={radius}
      type={type}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </Container>
  );
};

const Container = styled.button<Required<ButtonProps>>`
  height: ${props => props.theme.size[props.size]}px;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${props => (props.size === 'xlarge' ? '6px' : '4px')};
  padding: ${props => getPadding(props.size, !!props.startIcon, !!props.endIcon)};
  border-radius: ${props => props.radius}px;
  ${props => getFontSize(props.size)};

  ${props => getColor(props.variant, props.color ?? 'primary', props.theme)};
  ${props => getBackgroundColor(props.variant, props.color, props.theme)};
  ${props => getBorder(props.variant, props.color, props.theme)};

  :disabled {
    background-color: ${props => props.theme.colors.bg.dim};
  }
`;

const getFontSize = (size: keyof Size) => {
  switch (size) {
    case 'xlarge':
      return fonts(18, 'bold');
    case 'large':
      return fonts(16, 'bold');
    case 'medium':
    case 'small':
      return fonts(14, 'bold');
    case 'xsmall':
    case 'tiny':
      return fonts(13, 'bold');
  }
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

const getColor = (variant: Variant, color: Color, theme: Theme) => {
  if (variant === 'contain') {
    switch (color) {
      case 'primary':
      case 'success':
      case 'error':
      case 'warning':
        return css`
          color: ${theme.colors.text.white};
        `;
      case 'secondary':
        return css`
          color: ${theme.colors.text.inverse};
        `;
    }
  } else if (variant === 'outline') {
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.colors.color.primary};
        `;
      case 'secondary':
        return css`
          color: ${theme.colors.text.black};
        `;
      case 'success':
        return css`
          color: ${theme.colors.positive.primary};
        `;
      case 'error':
        return css`
          color: ${theme.colors.error.primary};
        `;
      case 'warning':
        return css`
          color: ${theme.colors.warning.primary};
        `;
    }
  } else {
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.colors.color.primary};
        `;
      case 'secondary':
        return css`
          color: ${theme.colors.text.inverse};
        `;
      case 'success':
        return css`
          color: ${theme.colors.positive.primary};
        `;
      case 'error':
        return css`
          color: ${theme.colors.error.primary};
        `;
      case 'warning':
        return css`
          color: ${theme.colors.warning.primary};
        `;
    }
  }
};

const getBackgroundColor = (variant: Variant, color: Color, theme: Theme) => {
  if (variant === 'contain') {
    switch (color) {
      case 'primary':
        return css`
          background-color: ${theme.colors.color.primary};
          :hover {
            background-color: ${theme.colors.color.secondary};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.bg.tertiary};
          :hover {
            background-color: ${theme.colors.bg.emphize};
          }
        `;
      case 'success':
        return css`
          background-color: ${theme.colors.positive.primary};
          :hover {
            background-color: ${theme.colors.positive.secondary};
          }
        `;
      case 'error':
        return css`
          background-color: ${theme.colors.error.primary};
          :hover {
            background-color: ${theme.colors.error.secondary};
          }
        `;
      case 'warning':
        return css`
          background-color: ${theme.colors.warning.primary};
          :hover {
            background-color: ${theme.colors.warning.secondary};
          }
        `;
    }
  } else if (variant === 'outline') {
    return css`
      background-color: #fff;
    `;
  }
  return css`
    background-color: transparent;
  `;
};

const getBorder = (variant: Variant, color: Color, theme: Theme) => {
  if (variant === 'contain') {
    return css`
      border: none;
    `;
  } else if (variant === 'outline') {
    switch (color) {
      case 'primary':
        return css`
          border: 1px solid ${theme.colors.color.primary};
        `;
      case 'secondary':
        return css`
          border: 1px solid ${theme.colors.bg.tertiary};
        `;
      case 'success':
        return css`
          border: 1px solid ${theme.colors.positive.primary};
        `;
      case 'error':
        return css`
          border: 1px solid ${theme.colors.error.primary};
        `;
      case 'warning':
        return css`
          border: 1px solid ${theme.colors.warning.primary};
        `;
    }
  }
  return css`
    border: none;
  `;
};
