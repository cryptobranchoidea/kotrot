import { Input } from '@/ui/primitive/Form/Input';
import { InputWrapper } from '@/ui/primitive/Form/InputWrapper';
import { Label } from '@/ui/primitive/Form/Label';
import { ComponentProps, FC } from 'react';

type TProps = ComponentProps<typeof Input>;

export const BoardInput: FC<TProps> = ({ type, name, state, onChange }) => {
  return (
    <InputWrapper>
      <Label name={name} />
      <Input type={type} name={name} state={state} onChange={onChange} />
    </InputWrapper>
  );
};
