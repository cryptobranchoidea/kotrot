import { space } from '@/ui/token';
import { Box, Flex, Text } from '@kuma-ui/core';

export const About = () => {
  return (
    <Flex gap={10} marginX="auto" marginTop={space.lg} justifyContent="center">
      <Box
        fontSize="fontSizes.md"
        fontWeight="bolder"
        color="colors.text.sub"
        marginY={space.md}
        padding={space.lg}
        borderTop="solid"
        borderBottom="solid"
        lineHeight={2}
      >
        <Text fontSize="fontSizes.lg" textAlign="center">
          About
        </Text>
        <Text>KotRotはあなたの行きたい場所を共有できるサービスです。</Text>
        <Text>みんなと自分の好みを共有しましょう！</Text>
      </Box>
    </Flex>
  );
};
