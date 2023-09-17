import { space } from '@/ui/token';
import { Button as StyledButton } from '@kuma-ui/core';
import { ComponentProps, FC, ReactNode } from 'react';

type TProps = {
  onClick: () => void;
  children: ReactNode;
  kuma?: ComponentProps<typeof StyledButton>;
  styled?: boolean;
};

export const Button: FC<TProps> = ({ onClick, children, kuma, styled }) => {
  return (
    <>
      {styled ? (
        <StyledButton
          onClick={onClick}
          {...kuma}
          backgroundColor="inherit"
          border="2px solid"
          _hover={{ opacity: 0.8, backgroundColor: 'colors.primary' }}
          fontSize="fontSizes.md"
          padding={space.sm}
          borderRadius={3}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton onClick={onClick} {...kuma} border="none" backgroundColor="inherit" _hover={{ opacity: '0.6' }}>
          {children}
        </StyledButton>
      )}
    </>
  );
};
