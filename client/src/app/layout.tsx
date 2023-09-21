import { Box } from '@kuma-ui/core';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';
import 'modern-css-reset/dist/reset.min.css';
import './global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <KumaRegistry>
          <Box fontFamily="'Noto Sans JP', sans-serif;">{children}</Box>
        </KumaRegistry>
      </body>
    </html>
  );
}
