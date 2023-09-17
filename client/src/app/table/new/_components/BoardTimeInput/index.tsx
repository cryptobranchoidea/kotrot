import { Input } from '@/ui/primitive/Form/Input';
import { InputWrapper } from '@/ui/primitive/Form/InputWrapper';
import { Label } from '@/ui/primitive/Form/Label';
import { space } from '@/ui/token';
import { Flex, Text } from '@kuma-ui/core';
import { ChangeEventHandler, FC } from 'react';

type TProps = {
  startTime: string;
  endTime: string;
  onChangeStartTime: ChangeEventHandler<HTMLInputElement>;
  onChangeEndTime: ChangeEventHandler<HTMLInputElement>;
};

export const BoardTimeInput: FC<TProps> = ({ startTime, endTime, onChangeStartTime, onChangeEndTime }) => {
  return (
    <InputWrapper>
      <Label name="時間" />
      <Flex gap={space.md} alignItems="center">
        <Input type="time" name="時間" state={startTime} onChange={onChangeStartTime} />
        <Text as="span" children="~" />
        <Input type="time" name="時間" state={endTime} onChange={onChangeEndTime} />
      </Flex>
    </InputWrapper>
  );
};
