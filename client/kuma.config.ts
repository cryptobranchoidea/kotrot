import { color, fontSizes } from '@/ui/token';
import { createTheme } from '@kuma-ui/core';
import 'modern-css-reset/dist/reset.min.css';

const theme = createTheme({
  colors: { ...color },
  fontSizes: { ...fontSizes },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
