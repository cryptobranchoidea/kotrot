import { Flex } from '@kuma-ui/core';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';
import 'modern-css-reset/dist/reset.min.css';
import type { Metadata } from 'next';
import './global.css';
export const metadata: Metadata = { title: 'Fisap', description: "fill someone's gap" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <KumaRegistry>
          <Flex as="main" justifyContent="center" alignItems="center" height="100vh" backgroundColor="#F3F3F3">
            {children}
          </Flex>
        </KumaRegistry>
      </body>
    </html>
  );
}
