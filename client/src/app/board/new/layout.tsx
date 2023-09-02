import { Header } from '../../../ui/template/Header';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <Header title="Board作成">{children}</Header>;
}
