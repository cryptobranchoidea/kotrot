'use client';
import { Previewer } from '@/feature/previewer';
import { useOnChange } from '@/hooks/onChangeHook';
import { Button } from '@/ui/primitive/Button';
import { Input } from '@/ui/primitive/Form/Input';
import { Box, Flex, Text } from '@kuma-ui/core';

export const TableNew = () => {
  const [url, onChangeUrl] = useOnChange({ initialValue: '' });
  const [pinInfo, setPinInfo] = useOnChange({ initialValue: { title: '', description: '', visited: false } });

  return (
    <Box width={['100%', '60%', '60%']} margin="auto">
      <Text>URL</Text>
      <Input type="text" name="URL_INPUT" state={url} onChange={onChangeUrl} />
      <Previewer url={url} isPreview />
      <Flex justifyContent="flex-end">
        <Button onClick={() => {}}>作成</Button>
      </Flex>
    </Box>
  );
};
