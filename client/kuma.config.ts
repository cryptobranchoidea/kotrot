import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  fontSizes: { sm: '12px', md: '16px', lg: '24px', xl: '60px' },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
