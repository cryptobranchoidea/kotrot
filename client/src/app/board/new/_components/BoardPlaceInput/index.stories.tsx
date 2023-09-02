import { Meta, StoryObj } from '@storybook/react';
import { BoardPlaceInput } from '.';

const meta: Meta<typeof BoardPlaceInput> = {
  title: 'app/board/new/_components/BoardPlaceInput',
  component: BoardPlaceInput,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof BoardPlaceInput>;

export const Number: Story = {
  render: () => {
    return (
      <BoardPlaceInput
        tabs={[
          { head: 'head1', content: <>content1</> },
          { head: 'head2', content: <>content2</> },
        ]}
      />
    );
  },
};
