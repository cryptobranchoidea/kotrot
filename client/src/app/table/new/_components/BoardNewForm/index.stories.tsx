import { Meta, StoryObj } from '@storybook/react';
import { BoardNewForm } from '.';

const meta: Meta<typeof BoardNewForm> = {
  title: 'app/board/new/_components/BoardNewForm',
  component: BoardNewForm,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof BoardNewForm>;

export const Default: Story = {
  render: () => <BoardNewForm />,
};
