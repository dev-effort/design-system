import { ReactNode } from 'react';
import { Size, fonts, styled } from '../../theme';

type TextFieldProps = {
  label?: string;
  isRequired?: boolean;
  size?: keyof Size;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  radius?: number;
  isError?: boolean;
  helpText?: string;
};

type Props = TextFieldProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

type StyledProps = Omit<TextFieldProps, 'size'> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & { scale: keyof Size };

export const TextField = ({
  label,
  isRequired = false,
  size = 'medium',
  fullWidth = false,
  startIcon = false,
  endIcon = false,
  radius = 6,
  isError = false,
  helpText,
  ...props
}: Props) => {
  return (
    <Container fullWidth={fullWidth}>
      {label && (
        <Label>
          {label} {isRequired && <span className="star">*</span>}
        </Label>
      )}

      <TextFieldInput
        scale={size}
        radius={radius}
        fullWidth={fullWidth}
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      />
    </Container>
  );
};

const Container = styled.div<{ fullWidth: boolean }>`
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Label = styled.div`
  display: flex;
  gap: 4px;
  ${fonts(15, 'medium')};
  color: ${props => props.theme.colors.text.primary};
  & .star {
    color: ${props => props.theme.colors.error.primary};
  }
`;

const TextFieldInput = styled.input<StyledProps>`
  height: ${props => props.theme.size.common[props.scale]}px;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  box-sizing: border-box;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${props => (props.scale === 'xlarge' ? '6px' : '4px')};
  text-indent: 16px;
  border-radius: ${props => props.radius}px;
  outline: none;

  :disabled {
    background-color: ${props => props.theme.colors.bg.dim};
  }
`;
