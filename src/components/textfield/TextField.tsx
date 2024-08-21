import { ReactNode, forwardRef } from 'react';
import { Size, fonts, styled } from '../../theme';
import { css } from '@emotion/react';
import { Theme } from '@emotion/react';

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

export const TextField = forwardRef<HTMLDivElement, Props>(
  (
    {
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
    }: Props,
    ref,
  ) => {
    return (
      <Container ref={ref} fullWidth={fullWidth}>
        {label && (
          <Label size={size}>
            {label} {isRequired && <span className="star">*</span>}
          </Label>
        )}

        <TextFieldContainer>
          {startIcon && <span className="start-icon">{startIcon}</span>}
          <TextFieldInput
            scale={size}
            radius={radius}
            fullWidth={fullWidth}
            startIcon={startIcon}
            endIcon={endIcon}
            isError={isError}
            {...props}
          />

          {endIcon && <span className="end-icon">{endIcon}</span>}
        </TextFieldContainer>

        {isError && <HelpText size={size}>{helpText}</HelpText>}
      </Container>
    );
  },
);

const getFontSize = (size: keyof Size) => {
  switch (size) {
    case 'xlarge':
    case 'large':
      return fonts(15, 'medium');
    case 'medium':
    case 'small':
      return fonts(13, 'medium');
    case 'xsmall':
    case 'tiny':
      return fonts(11, 'medium');
  }
};

const getBorder = (isError: boolean, theme: Theme) => {
  return css`
    border: 1px solid ${isError ? theme.colors.error.primary : theme.colors.border.primary};
  `;
};

const Container = styled.div<{ fullWidth: boolean }>`
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.div<{ size: keyof Size }>`
  display: flex;
  gap: 4px;
  ${props => getFontSize(props.size)};
  color: ${props => props.theme.colors.text.primary};
  & .star {
    color: ${props => props.theme.colors.error.primary};
  }
`;

const HelpText = styled.div<{ size: keyof Size }>`
  ${props => getFontSize(props.size)};
  color: ${props => props.theme.colors.error.primary};
`;

const TextFieldContainer = styled.div`
  position: relative;
  width: inherit;

  & .start-icon {
    display: inline-flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }

  & .end-icon {
    display: inline-flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
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
  text-indent: ${props => (props.startIcon ? '30px' : '7px')};
  border-radius: ${props => props.radius}px;
  outline: none;

  ${props => getBorder(!!props.isError, props.theme)}

  :disabled {
    background-color: ${props => props.theme.colors.bg.secondary};
  }
`;
