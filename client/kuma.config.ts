import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: { primary: '#638FFF', secondary: { main: '#638FFF', sub: '#FFED4D' } },
  fontSizes: { sm: '12px', md: '16px', lg: '24px', xl: '80px' },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
