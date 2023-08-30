'use client';
import { AppLink } from '@/ui/primitive/appLink';
import { Logo } from '@/ui/primitive/logo';
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
