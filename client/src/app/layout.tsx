import { Flex } from '@kuma-ui/core';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';
import './global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <KumaRegistry>
          <Flex
            as="main"
            minHeight="100vh"
            width="100vw"
            justifyContent="center"
            alignItems="center"
            backgroundColor="colors.bg.main"
          >
            {children}
          </Flex>
        </KumaRegistry>
      </body>
    </html>
  );
}
