import { Box, Text } from '@kuma-ui/core';

export default function Home() {
  return (
    <Box as="main" padding={10} textAlign="center">
      <Text as="h1" fontSize={24} fontWeight="bold">
        Fisap
      </Text>
      <Text as="p" fontWeight="bold">
        fill someone gap
      </Text>
    </Box>
  );
}
