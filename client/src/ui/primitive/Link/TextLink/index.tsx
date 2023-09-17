import { space } from '@/ui/token';
import { Box } from '@kuma-ui/core';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type TProps = { href: string; children: ReactNode; style?: boolean };

export const TextLink: FC<TProps> = ({ href, children, style }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', padding: space.sm, color: '#232323' }}>
      {style ? (
        <Box
          fontSize="fontSizes.md"
          fontWeight="bold"
          borderBottom="3px solid"
          color="black"
          padding={space.sm}
          _hover={{ borderColor: 'colors.secondary.main', opacity: 0.8 }}
          borderRadius={3}
        >
          {children}
        </Box>
      ) : (
        <Box _hover={{ borderColor: 'colors.secondary.main', opacity: 0.8 }}>{children}</Box>
      )}
    </Link>
  );
};
