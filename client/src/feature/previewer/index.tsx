'use client';
import { space } from '@/ui/token';
import { Box, Flex, Text } from '@kuma-ui/core';
import Image from 'next/image';
import { FC } from 'react';
import { extractServiceName, validUrlChecker } from './utils';

type TProps = { url: string; title?: string; isPreview?: boolean };

export const Previewer: FC<TProps> = ({ url, title, isPreview }) => {
  const isValidUrl = validUrlChecker(url);
  const siteName = extractServiceName(url);

  if (url === '') return <PreviewerMock />;

  if (!isValidUrl) return <Text marginY={space.md}>許可されたURLではありません</Text>;

  if (!siteName) return <Text marginY={space.md}>サイトの名前を取得できませんでした</Text>;

  return <>{isPreview ? <PreviewerWithData url={url} title={title} siteName={siteName} /> : <PreviewerMock />}</>;
};

const PreviewerWithData = ({ title, siteName }: TProps & { siteName: string }) => {
  return (
    <Flex alignItems="center" border="solid 1px black" gap={space.md} padding={space.md} borderRadius="5px">
      <Image
        src="/pin.png"
        alt="サービスロゴ"
        width={60}
        height={60}
        style={{
          objectFit: 'contain',
          borderRadius: '50%',
          padding: 4,
          boxShadow: 'inset 0px 1px 5px 0px rgba(17, 17, 26, 0.18)',
        }}
      />
      <Box>
        <Text>{title}</Text>
        <Text fontSize="fontSizes.sm" color="colors.text.sub" paddingTop={space.md}>
          {siteName}
        </Text>
      </Box>
    </Flex>
  );
};

const PreviewerMock = () => {
  return (
    <Flex alignItems="center" border="solid 1px black" gap={space.md} padding={space.md} borderRadius="5px">
      <Image
        src="/pin.png"
        alt="サービスロゴ"
        width={60}
        height={60}
        style={{
          objectFit: 'contain',
          borderRadius: '50%',
          padding: 4,
          boxShadow: 'inset 0px 1px 5px 0px rgba(17, 17, 26, 0.18)',
        }}
      />
      <Box>
        <Text>ピンの名前</Text>
        <Text fontSize="fontSizes.sm" color="colors.text.sub" paddingTop={space.md}>
          サイトの名前
        </Text>
      </Box>
    </Flex>
  );
};
