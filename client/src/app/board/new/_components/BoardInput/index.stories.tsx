import { useOnChange } from '@/hooks/onChangeHook';
import { Meta, StoryObj } from '@storybook/react';
import { BoardInput } from '.';

const meta: Meta<typeof BoardInput> = {
  title: 'app/board/new/_components/BoardInput',
  component: BoardInput,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof BoardInput>;

export const Number: Story = {
  render: () => {
    const [state, onChange] = useOnChange({ initialValue: 0 });
    return <BoardInput type="number" name="人数" state={state} onChange={onChange} />;
  },
};

export const Text: Story = {
  render: () => {
    const [state, onChange] = useOnChange({ initialValue: '' });
    return <BoardInput type="text" name="タイトル" state={state} onChange={onChange} />;
  },
};

export const Time: Story = {
  render: () => {
    const [state, onChange] = useOnChange({ initialValue: '' });
    return <BoardInput type="time" name="開始時間" state={state} onChange={onChange} />;
  },
};
