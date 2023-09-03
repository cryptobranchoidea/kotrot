import { Meta, StoryObj } from '@storybook/react';
import { ServiceLogo } from '.';

const meta: Meta<typeof ServiceLogo> = {
  title: 'ui/primitive/ServiceLogo',
  component: ServiceLogo,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof ServiceLogo>;

export const Default: Story = {
  render: () => <ServiceLogo />,
};
