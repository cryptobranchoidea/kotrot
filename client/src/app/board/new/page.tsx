import { Header } from '@/ui/template/Header';
import { BoardNewForm } from './_components/BoardNewForm';

export default function BoardNew() {
  return (
    <Header title="Board作成">
      <BoardNewForm />
    </Header>
  );
}
