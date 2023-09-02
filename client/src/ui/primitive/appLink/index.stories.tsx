import { Meta, StoryObj } from '@storybook/react';
import { AppLink } from '.';

const meta: Meta<typeof AppLink> = {
  title: 'ui/primitive/AppLink',
  component: AppLink,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
  render: () => <AppLink href="/sigunp" children="新規登録" />,
};

export const Styled: Story = {
  render: () => <AppLink href="/sigunp" children="新規登録" style />,
};
