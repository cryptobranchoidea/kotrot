import { space } from '@/ui/token';
import { Box } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';

type TProps = { children: ReactNode };

export const InputWrapper: FC<TProps> = ({ children }) => {
  return (
    <Box borderLeft="4px solid #638FFF" padding={space.md}>
      {children}
    </Box>
  );
};
