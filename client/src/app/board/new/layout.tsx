import { Header } from '@/ui/template/Header';
import 'modern-css-reset/dist/reset.min.css';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <Header title="Board作成">{children}</Header>;
}
