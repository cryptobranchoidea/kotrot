import { Box, Input as InternalInput } from '@kuma-ui/core';
import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';
import { Label } from '../Label';

type TProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  state: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<TProps> = ({ type, name, state, onChange }) => {
  return (
    <Box>
      <Label name={name} />
      <InternalInput
        id={name}
        name={name}
        type={type}
        borderRadius={3}
        width="100%"
        border="solid 1px"
        value={state}
        onChange={onChange}
      />
    </Box>
  );
};
