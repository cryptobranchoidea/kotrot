import { Header } from '@/ui/common/Header';
import { Box } from '@kuma-ui/core';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box backgroundColor="colors.bg.main" minHeight="100vh">
      <Header title="新しいPinを作る">{children}</Header>
    </Box>
  );
}
