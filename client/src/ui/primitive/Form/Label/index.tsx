import { Text } from '@kuma-ui/core';
import { FC } from 'react';

type TProps = { name: string };

export const Label: FC<TProps> = ({ name }) => {
  return (
    <Text as="label" fontSize="fontSizes.md">
      {name}
    </Text>
  );
};
