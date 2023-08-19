import { Box, Text } from '@kuma-ui/core';

export default function Home() {
  return (
    <Box as="main" backgroundColor="red">
      <Text as="h1" fontSize={24} fontWeight="bold">
        Welcome to Kuma 🐻‍❄️
      </Text>
    </Box>
  );
}
