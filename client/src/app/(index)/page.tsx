import { ButtonLink } from '@/ui/primitive/Link/ButtonLink';
import { Logo } from '@/ui/primitive/Logo';
import { space } from '@/ui/token';
import { bp } from '@/util/setBreakPoint';
import { Box, Flex, Grid, Text } from '@kuma-ui/core';
import { About } from './components/About';

export default function Home() {
  return (
    <Grid gridTemplateColumns={bp({ sm: 'repeat(1, minmax(0, 1fr))', lg: 'repeat(2, minmax(0, 1fr))' })} width="100vw">
      <Flex backgroundColor="colors.bg.strong" minHeight="100vh" alignItems="center" justifyContent="center">
        <Box>
          <Logo size="L" />
          <Text
            as="h1"
            fontSize="fontSizes.xl"
            children="KotRot"
            fontFamily="'Changa', sans-serif"
            textAlign="center"
            lineHeight={0.8}
          />
          <Box flexDirection="column" gap={space.md} display={bp({ sm: 'flex', lg: 'none' })}>
            <About />
            <ButtonLink href="/table/new" children="KotRotを始めよう" />
          </Box>
        </Box>
      </Flex>
      <Box
        display={bp({ sm: 'none', lg: 'flex' })}
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        paddingX={space.md}
      >
        <Flex flexDirection="column" gap={space.md}>
          <About />
          <ButtonLink href="/table/new" children="KotRotを始めよう" />
        </Flex>
      </Box>
    </Grid>
  );
}
