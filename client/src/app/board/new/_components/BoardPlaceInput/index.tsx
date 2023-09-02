'use client';
import { Button } from '@/ui/primitive/Button';
import { InputWrapper } from '@/ui/primitive/Form/InputWrapper';
import { Label } from '@/ui/primitive/Form/Label';
import { space, textColor } from '@/ui/token';
import { Box, Flex } from '@kuma-ui/core';
import { FC, ReactNode, useState } from 'react';

type TProps = { tabs: { head: string; content: ReactNode }[] };

export const BoardPlaceInput: FC<TProps> = ({ tabs }) => {
  const [currentHead, setCurrentHead] = useState<string>(tabs[0].head);

  return (
    <InputWrapper>
      <Label name="集合場所/目的地" />
      <Flex flexDirection="column" gap={space.md}>
        <Flex gap={space.md}>
          {tabs.map((tab) => {
            const isCurrent = currentHead === tab.head;
            return (
              <Button
                key={tab.head}
                onClick={() => setCurrentHead(tab.head)}
                style={{
                  fontSize: 'fontSizes.sm',
                  borderBottom: isCurrent ? '2px solid' : '',
                  color: isCurrent ? '' : textColor.middle,
                }}
              >
                {tab.head}
              </Button>
            );
          })}
        </Flex>

        <Box>
          {tabs.map((tab) => {
            const isCurrent = currentHead === tab.head;
            if (isCurrent) {
              return <Flex key={tab.head}>{tab.content}</Flex>;
            }
          })}
        </Box>
      </Flex>
    </InputWrapper>
  );
};
