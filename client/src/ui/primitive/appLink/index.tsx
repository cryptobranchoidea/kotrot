import { space } from '@/ui/token';
import { Box } from '@kuma-ui/core';
import Link from 'next/link';
import { FC } from 'react';

type TProps = { href: string; text: string };

export const AppLink: FC<TProps> = ({ href, text }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', padding: space.sm }}>
      <Box
        fontSize="fontSizes.md"
        fontWeight="bold"
        border="3px solid"
        color="black"
        padding={space.sm}
        _hover={{ borderColor: 'colors.secondary.main', opacity: 0.8 }}
        borderRadius={3}
      >
        {text}
      </Box>
    </Link>
  );
};
