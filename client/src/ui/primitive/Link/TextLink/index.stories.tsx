import { Meta, StoryObj } from '@storybook/react';
import { TextLink } from '.';

const meta: Meta<typeof TextLink> = {
  title: 'ui/primitive/TextLink',
  component: TextLink,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  render: () => <TextLink href="/sigunp" children="新規登録" />,
};

export const Styled: Story = {
  render: () => <TextLink href="/sigunp" children="新規登録" style />,
};
