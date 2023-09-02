import { ChangeEventHandler, useState } from 'react';

type TProps<T> = { initialValue: T };
type TResults<T> = [T, (event: React.ChangeEvent<HTMLInputElement>) => void];

export const useOnChange = <T,>({ initialValue }: TProps<T>): TResults<T> => {
  const [state, setState] = useState<T>(initialValue);
  console.log(state);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => setState(event.target.value as T);
  return [state, onChange];
};
