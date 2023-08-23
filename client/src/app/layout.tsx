import 'modern-css-reset/dist/reset.min.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Fisap', description: "fill someone's gap" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
