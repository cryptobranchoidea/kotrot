import { Meta, StoryObj } from '@storybook/react';
import { WithHeaderWrapper } from '.';

const meta: Meta<typeof WithHeaderWrapper> = {
  title: 'ui/template/withHeaderWrapper',
  component: WithHeaderWrapper,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof WithHeaderWrapper>;

export const Default: Story = {
  render: () => (
    <WithHeaderWrapper title="タイトル">
      <p>コンテンツ</p>
    </WithHeaderWrapper>
  ),
};
