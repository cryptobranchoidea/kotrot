import { Meta, StoryObj } from '@storybook/react';
import { InputWrapper } from '.';

const meta: Meta<typeof InputWrapper> = {
  title: 'ui/primitive/Form/InputWrapper',
  component: InputWrapper,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof InputWrapper>;

export const Default: Story = {
  render: () => (
    <InputWrapper>
      <p>コンテンツ</p>
    </InputWrapper>
  ),
};
