import { ButtonLink } from '@/ui/primitive/Link/ButtonLink';
import { Logo } from '@/ui/primitive/Logo';
import { space } from '@/ui/token';
import { Box, Flex, Grid, Spacer, Text } from '@kuma-ui/core';
import { About } from './components/About';

export default function Home() {
  return (
    <Grid
      gridTemplateColumns={['repeat(1, minmax(0, 1fr))', 'repeat(2, minmax(0, 1fr))', 'repeat(2, minmax(0, 1fr))']}
      justifyContent="center"
      width="100vw"
    >
      <Flex
        backgroundColor="colors.bg.strong"
        minHeight={['50vh', '100vh', '100vh']}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Logo size="L" />
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
      </Flex>
      <Flex minHeight={['50vh', '100vh', '100vh']} alignItems="center" justifyContent="center">
        <Box>
          <About />
          <Spacer paddingY={space.md}>
            <ButtonLink href={'/table/new'} children="KotRotを始めよう" />
          </Spacer>
        </Box>
      </Flex>
    </Grid>
  );
}
