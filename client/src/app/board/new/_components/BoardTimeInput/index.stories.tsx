import { Meta, StoryObj } from '@storybook/react';
import { BoardTimeInput } from '.';

const meta: Meta<typeof BoardTimeInput> = {
  title: 'app/board/new/_components/BoardTimeInput',
  component: BoardTimeInput,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof BoardTimeInput>;

export const Number: Story = {
  render: () => {
    return <BoardTimeInput />;
  },
};
