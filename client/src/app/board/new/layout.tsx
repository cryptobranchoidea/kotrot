import { WithHeaderWrapper } from '@/ui/template/wrapper/withHeaderWrapper';
import 'modern-css-reset/dist/reset.min.css';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <WithHeaderWrapper title="Board作成">{children}</WithHeaderWrapper>;
}
