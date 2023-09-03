import { useOnChange } from '@/hooks/onChangeHook';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'ui/primitive/Form/Input',
  component: Input,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Number: Story = {
  render: () => {
    const [state, onChange] = useOnChange({ initialValue: 0 });
    return <Input type="number" name="人数" state={state} onChange={onChange} />;
  },
};

export const Text: Story = {
  render: () => {
    const [state, onChange] = useOnChange({ initialValue: '' });
    return <Input type="text" name="タイトル" state={state} onChange={onChange} />;
  },
};

export const Time: Story = {
  render: () => {
    const [state, onChange] = useOnChange({ initialValue: '' });
    return <Input type="time" name="開始時間" state={state} onChange={onChange} />;
  },
};
