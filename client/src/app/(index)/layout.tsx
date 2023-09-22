import { Flex } from '@kuma-ui/core';
import 'modern-css-reset/dist/reset.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="main" minHeight="100vh" justifyContent="center" alignItems="center">
      {children}
    </Flex>
  );
}
