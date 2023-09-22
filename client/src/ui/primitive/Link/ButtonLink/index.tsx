import { colors, space } from '@/ui/token';
import { Text } from '@kuma-ui/core';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type TProps = { href: string; children: ReactNode };

export const ButtonLink: FC<TProps> = ({ href, children }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: '#232323' }}>
      <Text
        as="span"
        display="flex"
        justifyContent="center"
        borderRadius={3}
        fontWeight={'bold'}
        backgroundColor={colors.bg.strong}
        paddingX={space.xl}
        paddingY={space.sm}
        fontSize="fontSizes.md"
        color="colors.bg.main"
        _hover={{ opacity: 0.8 }}
      >
        {children}
      </Text>
    </Link>
  );
};
