import { space } from '@/ui/token';
import { Box, Text } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';

type TProps = { name: string; isLabelUnShow?: boolean; children?: ReactNode; forCheckbox?: boolean };

// TODO:forCheckbox,isLabelShowなどはcheckboxのためにつけてしまってるので後から分ける
export const Label: FC<TProps> = ({ name, isLabelUnShow, children, forCheckbox }) => {
  return (
    <Text
      as="label"
      fontSize="fontSizes.md"
      htmlFor={name}
      display="inline-block"
      width={forCheckbox ? '60px' : '100%'}
    >
      {isLabelUnShow ? '' : name}
      {children ? <Box paddingY={space.sm}>{children}</Box> : <></>}
    </Text>
  );
};
