import { space } from '@/ui/token';
import { Link } from '@kuma-ui/core';
import { FC } from 'react';
type TProps = { href: string; text: string };

export const AppLink: FC<TProps> = ({ href, text }) => {
  return (
    <Link
      fontSize="fontSizes.md"
      fontWeight="bold"
      border="3px solid"
      color="black"
      padding={space.sm}
      _hover={{ borderColor: 'colors.secondary.main', opacity: 0.8 }}
      borderRadius={3}
      textDecoration="none"
      href={href}
    >
      {text}
    </Link>
  );
};
