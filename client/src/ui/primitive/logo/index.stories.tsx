import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';

const meta: Meta<typeof Logo> = {
  title: 'ui/primitive/logo',
  component: Logo,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />,
};
