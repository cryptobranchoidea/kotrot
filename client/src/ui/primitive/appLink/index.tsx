import { createClientLink } from '@/util/createLink';
import { Box } from '@kuma-ui/core';
import Link from 'next/link';
import { FC } from 'react';
type TProps = { href: string; text: string };

export const AppLink: FC<TProps> = ({ href, text }) => {
  return (
    <Box fontSize="fontSizes.md" fontWeight="bold">
      <Link href={createClientLink(href)} children={text} />
    </Box>
  );
};
