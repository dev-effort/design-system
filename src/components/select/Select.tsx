import { HTMLAttributes } from 'react';
import { Size } from '../../theme';

type SelectProps = {
  label?: string;
  size?: keyof Size;
  fullWidth?: boolean;
  radius?: number;
  isError?: boolean;
};

type Props = SelectProps & HTMLAttributes<HTMLDivElement>;

export const Select = () => {
  return <div>df</div>;
};
