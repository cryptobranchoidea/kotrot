import { bgColor, space } from '@/ui/token';
import { Box } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';

type TProps = { children: ReactNode };

export const InputWrapper: FC<TProps> = ({ children }) => {
  return (
    <Box borderLeft={`4px solid ${bgColor.primary}`} padding={space.md}>
      {children}
    </Box>
  );
};
