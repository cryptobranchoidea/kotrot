import { AppLink } from '@/ui/primitive/AppLink';
import { Logo } from '@/ui/primitive/Logo';
import { Flex } from '@kuma-ui/core';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Flex justifyContent="center">
      <AppLink href="/">
        <Logo />
      </AppLink>
    </Flex>
  );
};
