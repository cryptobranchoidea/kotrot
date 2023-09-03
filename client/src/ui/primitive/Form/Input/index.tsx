import { space } from '@/ui/token';
import { Input as StyledInput } from '@kuma-ui/core';
import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';

type TProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  state: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<TProps> = ({ type, name, state, onChange }) => {
  return (
    <StyledInput
      id={name}
      name={name}
      type={type}
      borderRadius={3}
      width="100%"
      padding={space.sm}
      value={state}
      onChange={onChange}
    />
  );
};
