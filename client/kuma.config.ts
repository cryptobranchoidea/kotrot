import { bgColor, fontSizes, textColor } from '@/ui/token';
import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: { ...bgColor, ...textColor },
  fontSizes: { ...fontSizes },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
