import { Box, Link, Text, VStack } from '@kuma-ui/core';
import { DynamicLogo } from './_components/dynamicLogo';

export default function Home() {
  return (
    <Box textAlign="center">
      <DynamicLogo />
      <Text
        as="h1"
        fontSize="fontSizes.xl"
        fontWeight="bold"
        children="Fisap"
        paddingTop="5px"
        paddingBottom="20px"
        fontFamily="Londrina Solid"
      />
      <VStack gap="5px">
        <Link fontSize="fontSizes.md" children="新規登録" />
        <Link fontSize="fontSizes.md" children="募集する" />
      </VStack>
    </Box>
  );
}
