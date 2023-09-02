import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'ui/common/Header',
  component: Header,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Header title="タイトル">
      <p>コンテンツ</p>
    </Header>
  ),
};
