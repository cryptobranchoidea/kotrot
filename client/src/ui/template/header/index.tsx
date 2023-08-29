'use client';
import { AppLink } from '@/ui/primitive/appLink';
import { Logo } from '@/ui/primitive/logo';
import { space } from '@/ui/token';
import { Flex, Text } from '@kuma-ui/core';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Flex justifyContent="center">
      <AppLink href="/">
        <Flex gap={space.lg} justifyContent="center" alignItems="center">
          <Logo />
          <Text as="h1" fontFamily="Londrina Solid" children="Fisap" fontSize="fontSizes.lg" />
        </Flex>
      </AppLink>
    </Flex>
  );
};
