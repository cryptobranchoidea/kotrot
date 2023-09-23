'use client';
import { Previewer } from '@/feature/previewer';
import { extractServiceName, validUrlChecker } from '@/feature/previewer/utils';
import { Button } from '@/ui/primitive/Button';
import { Checkbox } from '@/ui/primitive/Form/Checkbox';
import { Input } from '@/ui/primitive/Form/Input';
import { space } from '@/ui/token';
import { fetcher } from '@/util/fetcher';
import { bp } from '@/util/setBreakPoint';
import { Box, Flex, Text } from '@kuma-ui/core';
import { ChangeEventHandler, useState } from 'react';
import useSWRMutation from 'swr/mutation';

export const PinForm = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [isVisit, setIsVisit] = useState(false);

  const { trigger } = useSWRMutation(
    `/api/preview`,
    async (url: string, { arg }: { arg: string }) => await fetcher(url + `?url=${arg}`),
  );

  const onChangeUrl: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const targetUrl = event.target.value;
    const isValidUrl = validUrlChecker(targetUrl);
    const isGetSiteName = extractServiceName(targetUrl);
    setUrl(targetUrl);
    if (isValidUrl && isGetSiteName)
      await trigger(event.target.value).then((res: { title: string }) => setTitle(res.title));
  };

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => setTitle(event.target.value);
  const onChangeIsVist: ChangeEventHandler<HTMLInputElement> = (event) => setIsVisit(event.target.checked);

  return (
    <Flex
      width={bp({ sm: '90%', md: '60%' })}
      margin="auto"
      justifyContent="center"
      flexDirection="column"
      gap={space.lg}
    >
      <Input type="text" name="URL" state={url} onChange={onChangeUrl} />
      <Input type="text" name="タイトル" state={title} onChange={onChangeTitle} />
      <Checkbox name="行ったことがあるか" state={isVisit} onChange={onChangeIsVist} />
      <Box>
        <Text>プレビュー</Text>
        <Previewer title={title} url={url} isPreview />
      </Box>

      <Flex justifyContent="flex-end">
        <Button onClick={() => {}}>作成</Button>
      </Flex>
    </Flex>
  );
};
