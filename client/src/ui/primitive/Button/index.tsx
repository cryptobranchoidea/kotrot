import { Button as StyledButton } from '@kuma-ui/core';
import { ComponentProps, FC, ReactNode } from 'react';

type TProps = { onClick: () => void; children: ReactNode; style?: ComponentProps<typeof StyledButton> };

export const Button: FC<TProps> = ({ onClick, children, style }) => {
  return (
    <StyledButton onClick={onClick} {...style} border="none" backgroundColor="inherit" _hover={{ opacity: '0.6' }}>
      {children}
    </StyledButton>
  );
};
