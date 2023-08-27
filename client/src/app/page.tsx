import { AppLink } from '@/ui/primitive/appLink';
import { space } from '@/ui/token';
import { Box, Text, VStack } from '@kuma-ui/core';
import { DynamicLogo } from './_components/dynamicLogo';

export default function Home() {
  return (
    <Box textAlign="center" padding={space.lg}>
      <DynamicLogo />
      <Text
        as="h1"
        fontSize="fontSizes.xl"
        fontWeight="bold"
        children="Fisap"
        paddingY={space.xl}
        fontFamily="Londrina Solid"
      />
      <VStack gap={space.md}>
        <AppLink href="/signup" text="新規登録" />
        <AppLink href="/board/new" text="募集する" />
      </VStack>
    </Box>
  );
}
