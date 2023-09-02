import { useOnChange } from '@/hooks/onChangeHook';
import { Meta, StoryObj } from '@storybook/react';
import { BoardTimeInput } from '.';

const meta: Meta<typeof BoardTimeInput> = {
  title: 'app/board/new/_components/BoardTimeInput',
  component: BoardTimeInput,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof BoardTimeInput>;

export const Default: Story = {
  render: () => {
    const [startTime, onChangeStartTime] = useOnChange({ initialValue: '' });
    const [endTime, onChangeEndTime] = useOnChange({ initialValue: '' });
    return (
      <BoardTimeInput
        startTime={startTime}
        endTime={endTime}
        onChangeStartTime={onChangeStartTime}
        onChangeEndTime={onChangeEndTime}
      />
    );
  },
};
