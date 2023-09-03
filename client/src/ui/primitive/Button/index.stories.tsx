import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'ui/primitive/Button',
  component: Button,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button onClick={() => {}}>ボタン</Button>,
};

export const Styled: Story = {
  render: () => (
    <Button onClick={() => {}} styled>
      ボタン
    </Button>
  ),
};
