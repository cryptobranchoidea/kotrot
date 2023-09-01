import { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'ui/primitive/Form/Label',
  component: Label,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label name="人数" />,
};
