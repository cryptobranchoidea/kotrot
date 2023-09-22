import { space } from '@/ui/token';
import { Box, Text } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';

type TProps = { children: ReactNode; title: string };

export const Header: FC<TProps> = ({ children, title }) => {
  return (
    <Box as="header" flexBasis="90%">
      <Text as="h2" children={title} textAlign="center" paddingY={space.xl} fontSize="fontSizes.lg" />
      {children}
    </Box>
  );
};
