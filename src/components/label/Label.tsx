import { ReactNode, forwardRef } from 'react';
import { Size, fonts } from '../../theme';
import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';
import { getOpacity } from '../../theme/colors/ThemeColorSet';

type Variant = 'contain' | 'outline' | 'complex';
type Color = 'primary' | 'ghost' | 'error' | 'warning' | 'success';

type LabelProps = {
  label: string;
  variant?: Variant;
  size?: keyof Size;
  color?: Color;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  radius?: number;
  fullWidth?: boolean;
};

type Props = LabelProps & React.HTMLAttributes<HTMLDivElement>;

export const Label = forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      variant = 'complex',
      size = 'small',
      color = 'primary',
      startIcon = false,
      endIcon = false,
      radius = 4,
      fullWidth = false,
      ...props
    }: Props,
    ref,
  ) => {
    return (
      <Container
        ref={ref}
        variant={variant}
        size={size}
        color={color}
        radius={radius}
        fullWidth={fullWidth}
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      >
        {startIcon}
        {label}
        {endIcon}
      </Container>
    );
  },
);

const Container = styled.div<Required<Omit<LabelProps, 'label'>>>`
  height: ${props => props.theme.size.smaller[props.size]}px;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${props => getPadding(props.size, !!props.startIcon, !!props.endIcon)};
  border-radius: ${props => props.radius}px;
  gap: 2px;
  ${props => getFontSize(props.size)};

  ${props => getColor(props.variant, props.color, props.theme)};
  ${props => getBackgroundColor(props.variant, props.color, props.theme)};
  ${props => getBorder(props.variant, props.color, props.theme)};
`;

const getPadding = (size: keyof Size, startIcon: boolean, endIcon: boolean) => {
  const paddingMap: Record<keyof Size, { base: number; offset: number }> = {
    xlarge: { base: 8, offset: 2 },
    large: { base: 8, offset: 2 },
    medium: { base: 6, offset: 2 },
    small: { base: 6, offset: 2 },
    xsmall: { base: 4, offset: 2 },
    tiny: { base: 4, offset: 2 },
  };

  const { base, offset } = paddingMap[size];
  const rightPadding = endIcon ? base - offset : base;
  const leftPadding = startIcon ? base - offset : base;

  return `0px ${rightPadding}px 0px ${leftPadding}px`;
};

const getFontSize = (size: keyof Size) => {
  switch (size) {
    case 'xlarge':
      return fonts(18, 'bold');
    case 'large':
      return fonts(15, 'bold');
    case 'medium':
      return fonts(14, 'bold');
    case 'small':
      return fonts(13, 'bold');
    case 'xsmall':
      return fonts(12, 'bold');
    case 'tiny':
      return fonts(11, 'bold');
  }
};

const getBackgroundColor = (variant: Variant, color: Color, theme: Theme) => {
  if (variant === 'contain') {
    switch (color) {
      case 'primary':
        return css`
          background-color: ${theme.colors.color.primary};
        `;
      case 'ghost':
        return css`
          background-color: ${theme.colors.bg.hint};
        `;
      case 'success':
        return css`
          background-color: ${theme.colors.positive.primary};
        `;
      case 'error':
        return css`
          background-color: ${theme.colors.error.primary};
        `;
      case 'warning':
        return css`
          background-color: ${theme.colors.warning.primary};
        `;
    }
  } else if (variant === 'outline') {
    return css`
      background-color: ${theme.colors.bg.primary};
    `;
  } else {
    switch (color) {
      case 'primary':
        return css`
          background-color: ${theme.colors.color.bg}${getOpacity(35)};
        `;
      case 'ghost':
        return css`
          background-color: ${theme.colors.bg.primary};
        `;
      case 'success':
        return css`
          background-color: ${theme.colors.positive.bg}${getOpacity(35)};
        `;
      case 'error':
        return css`
          background-color: ${theme.colors.error.bg}${getOpacity(35)};
        `;
      case 'warning':
        return css`
          background-color: ${theme.colors.warning.bg}${getOpacity(35)};
        `;
    }
  }
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
      case 'ghost':
        return css`
          border: 1px solid ${theme.colors.border.active};
        `;
      case 'success':
        return css`
          border: 1px solid ${theme.colors.positive.secondary};
        `;
      case 'error':
        return css`
          border: 1px solid ${theme.colors.error.secondary};
        `;
      case 'warning':
        return css`
          border: 1px solid ${theme.colors.warning.secondary};
        `;
    }
  } else {
    switch (color) {
      case 'primary':
        return css`
          border: 1px solid ${theme.colors.color.primary}${getOpacity(20)};
        `;
      case 'ghost':
        return css`
          border: 1px solid ${theme.colors.border.active}${getOpacity(20)};
        `;
      case 'success':
        return css`
          border: 1px solid ${theme.colors.positive.secondary}${getOpacity(20)};
        `;
      case 'error':
        return css`
          border: 1px solid ${theme.colors.error.secondary}${getOpacity(20)};
        `;
      case 'warning':
        return css`
          border: 1px solid ${theme.colors.warning.secondary}${getOpacity(20)};
        `;
    }
  }
};

const getColor = (variant: Variant, color: Color, theme: Theme) => {
  if (variant === 'contain') {
    return css`
      color: ${theme.colors.text.white};
    `;
  } else if (variant === 'outline') {
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.colors.color.primary};
        `;
      case 'ghost':
        return css`
          color: ${theme.colors.text.secondary};
        `;
      case 'success':
        return css`
          color: ${theme.colors.positive.secondary};
        `;
      case 'error':
        return css`
          color: ${theme.colors.error.secondary};
        `;
      case 'warning':
        return css`
          color: ${theme.colors.warning.secondary};
        `;
    }
  } else {
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.colors.color.primary};
        `;
      case 'ghost':
        return css`
          color: ${theme.colors.text.secondary};
        `;
      case 'success':
        return css`
          color: ${theme.colors.positive.secondary};
        `;
      case 'error':
        return css`
          color: ${theme.colors.error.secondary};
        `;
      case 'warning':
        return css`
          color: ${theme.colors.warning.secondary};
        `;
    }
  }
};
