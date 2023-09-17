import { space } from '@/ui/token';
import { Box, Flex, Text } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';

type TProps = { children: ReactNode; title: string };

export const Header: FC<TProps> = ({ children, title }) => {
  return (
    <Box as="header" marginY={space.xl} flexBasis="90%">
      <Flex justifyContent="center"></Flex>
      <Text as="h2" children={title} textAlign="center" marginY={space.xl} fontSize="fontSizes.lg" />
      {children}
    </Box>
  );
};
