import { Header } from '@/ui/template/header';
import { space } from '@/ui/token';
import { Box } from '@kuma-ui/core';
import 'modern-css-reset/dist/reset.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box marginY={space.md}>
      <Header />
      {children}
    </Box>
  );
}
