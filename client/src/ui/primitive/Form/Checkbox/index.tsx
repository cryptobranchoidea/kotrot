import { Box, Input, Text } from '@kuma-ui/core';
import { ChangeEventHandler, FC } from 'react';
import { Label } from '../Label';

type TProps = {
  name: string;
  state: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox: FC<TProps> = ({ name, state, onChange }) => {
  return (
    <Box>
      <Text>{name}</Text>
      <Label name={name} isLabelUnShow forCheckbox>
        <Input id={name} name={name} type="checkbox" onChange={onChange} checked={state} display="none" />
        <Box
          backgroundColor={state ? 'colors.bg.strong' : 'gray'}
          position="relative"
          borderRadius="2rem"
          width={60}
          height={30}
          transition="all 0.5s"
        >
          <Box
            position="absolute"
            left={state ? '90%' : '10%'}
            top="50%"
            transform={state ? 'translate(-90%, -50%)' : 'translate(-10%, -50%)'}
            width={25}
            height={25}
            borderRadius="100%"
            transition="all 0.5s"
            backgroundColor="white"
          />
        </Box>
      </Label>
    </Box>
  );
};
