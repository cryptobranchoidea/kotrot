import { space } from '@/ui/token';
import { Box, Text } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';
import { Header } from '../../header';

type TProps = { children: ReactNode; title: string };

export const WithHeaderWrapper: FC<TProps> = ({ children, title }) => {
  return (
    <Box marginY={space.xl} flexBasis="90%">
      <Header />
      <Text as="h2" children={title} textAlign="center" marginY={space.xl} fontSize="fontSizes.lg" />
      {children}
    </Box>
  );
};
