import { PropsWithChildren } from 'react';
import { SizeKey } from '../../theme/sizes';
import styled from '@emotion/styled';

type Variant = 'contain' | 'border' | 'text';

type ButtonProps = {
  variant: Variant;
  size: SizeKey;
};

type Props = PropsWithChildren<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, size, children, type = 'button', ...props }: Props) => {
  return (
    <Container variant={variant} size={size} type={type} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.button<Required<ButtonProps>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 6px;
  background-color: ${props => props.theme.colors.color.primary};
  height: ${props => props.theme.size[props.size]}px;
  ${props => props.variant === 'border' && `border: 1px solid ${props.theme.colors.border.primary}`};
`;
