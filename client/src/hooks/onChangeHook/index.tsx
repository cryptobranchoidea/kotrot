import { ChangeEventHandler, useState } from 'react';

type TProps<T> = { initialValue: T };
type TResults<T> = [T, (event: React.ChangeEvent<HTMLInputElement>) => void];

export const useOnChange = <T,>({ initialValue }: TProps<T>): TResults<T> => {
  const [state, setState] = useState<T>(initialValue);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log('state', state, typeof state);
    setState(event.target.value as T);
  };
  return [state, onChange];
};
