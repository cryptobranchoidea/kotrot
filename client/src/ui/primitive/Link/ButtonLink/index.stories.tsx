import { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '.';

const meta: Meta<typeof ButtonLink> = {
  title: 'ui/primitive/ButtonLink',
  component: ButtonLink,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  render: () => <ButtonLink href="/sigunp" children="新規登録" />,
};
