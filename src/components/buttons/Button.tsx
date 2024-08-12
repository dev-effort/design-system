import { PropsWithChildren } from 'react';
import { Size, SizeKey } from '../../theme/sizes';
import styled from '@emotion/styled';

type Variant = 'contain' | 'border' | 'text';

type ButtonProps = {
  variant: Variant;
  size: SizeKey;
};

type Props = PropsWithChildren<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, size, ...props }: Props) => {
  console.log('size', size);
  return (
    <Container variant={variant} size={size}>
      하이7
    </Container>
  );
};

const Container = styled.div<Required<ButtonProps>>`
  height: ${props => props.theme.size[props.size]}px;
  border: 1px solid red;
`;
