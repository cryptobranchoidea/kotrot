'use client';
import { space } from '@/ui/token';
import { fetcher } from '@/util/fetcher';
import { Box, Flex, Text } from '@kuma-ui/core';
import Image from 'next/image';
import { FC } from 'react';
import useSWR from 'swr';
import { extractServiceName, validUrlChecker } from './utils';

type TProps = { url: string; isPreview?: boolean };

export const Previewer: FC<TProps> = ({ url, isPreview }) => {
  const isValidUrl = validUrlChecker(url);
  const siteName = extractServiceName(url);

  if (url === '')
    return (
      <Box marginY={space.lg}>
        <PreviewerMock />
      </Box>
    );

  if (!isValidUrl)
    return (
      <Box marginY={space.lg}>
        <Text marginY={space.md}>許可されたURLではありません</Text>
        <PreviewerMock />
      </Box>
    );

  if (!siteName)
    return (
      <Box marginY={space.lg}>
        <Text marginY={space.md}>サイトの名前を取得できませんでした</Text>
        <PreviewerMock />
      </Box>
    );

  return (
    <Box marginY={space.lg}>
      <Text>PREVIEW</Text>
      {isPreview ? <PreviewerWithData url={url} siteName={siteName} /> : <PreviewerMock />}
    </Box>
  );
};

const PreviewerWithData = ({ url, siteName }: TProps & { siteName: string }) => {
  const { data } = useSWR<{ title: string }>(`/api/preview?url=${url}`, fetcher);

  if (!data) return <Box>ローディング中</Box>;
  if (data.title === '') return <Box>ogp情報が取得できていない</Box>;

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
        <Text>{data.title}</Text>
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
