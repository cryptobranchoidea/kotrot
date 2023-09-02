import { Header } from '@/ui/common/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Header title="Board作成">{children}</Header>;
}
