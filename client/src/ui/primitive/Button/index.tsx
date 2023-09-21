import { space } from '@/ui/token';
import { Button as InternalButton } from '@kuma-ui/core';
import { ComponentProps, FC, ReactNode } from 'react';

type TProps = {
  onClick: () => void;
  children: ReactNode;
  kuma?: ComponentProps<typeof InternalButton>;
  styled?: boolean;
};

export const Button: FC<TProps> = ({ onClick, children, kuma, styled }) => {
  return (
    <InternalButton
      onClick={onClick}
      {...kuma}
      backgroundColor="inherit"
      border="2px solid"
      _hover={{ opacity: 0.8, backgroundColor: 'colors.primary' }}
      fontSize="fontSizes.md"
      paddingX={space.xl}
      paddingY={space.sm}
      borderRadius={3}
      wordBreak="keep-all"
    >
      {children}
    </InternalButton>
  );
};
