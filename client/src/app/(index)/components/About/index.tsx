import { space } from '@/ui/token';
import { bp } from '@/util/createBreakPoints';
import { Box, Text } from '@kuma-ui/core';

export const About = () => {
  return (
    <Box color="colors.text.sub" marginY={space.md} padding={space.lg}>
      <Text fontSize={bp({ sm: 'fontSizes.md', md: 'fontSizes.lg' })} marginBottom={space.md}>
        KotRotとは？
      </Text>
      <Text fontSize={bp({ sm: 'fontSizes.sm', md: 'fontSizes.md' })}>
        KotRotはあなたの行きたい場所を共有できるサービスです。
      </Text>
      <Text fontSize={bp({ sm: 'fontSizes.sm', md: 'fontSizes.md' })}>みんなと自分の好みを共有しましょう！</Text>
    </Box>
  );
};
