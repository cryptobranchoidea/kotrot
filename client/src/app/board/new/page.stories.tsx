import { Meta, StoryObj } from '@storybook/react';

import BoardNewLayout from '@/app/board/new/layout';
import Layout from '@/app/layout';
import Page from './page';

const meta: Meta<typeof Page> = {
  title: 'app/board/new',
  component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => (
    <Layout>
      <BoardNewLayout>
        <Page />
      </BoardNewLayout>
    </Layout>
  ),
};
