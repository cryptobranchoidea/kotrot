import { Meta, StoryObj } from '@storybook/react';
import { AppLink } from '.';

const meta: Meta<typeof AppLink> = {
  title: 'ui/primitive/appLink',
  component: AppLink,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
  render: () => <AppLink href="/sigunp" text="新規登録" />,
};
