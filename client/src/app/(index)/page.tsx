import { ButtonLink } from '@/ui/primitive/Link/ButtonLink';
import { Logo } from '@/ui/primitive/Logo';
import { space } from '@/ui/token';
import { Box, Spacer, Text } from '@kuma-ui/core';
import { About } from './components/About';

export default function Home() {
  return (
    <Box padding={space.lg}>
      <Box>
        <Logo size="L" />
      </Box>

      <Box>
        <Text
          as="h1"
          fontSize="fontSizes.xl"
          fontWeight="bold"
          children="KotRot"
          fontFamily="'Changa', sans-serif"
          textAlign="center"
          lineHeight={1}
          height={0}
        />
      </Box>
      <Spacer paddingY={space.md}>
        <ButtonLink href={'/table/new'} children="KotRotを始めよう" />
      </Spacer>
      <About />
    </Box>
  );
}
