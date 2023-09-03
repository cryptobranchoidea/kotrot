'use client';
import { useOnChange } from '@/hooks/onChangeHook';
import { Button } from '@/ui/primitive/Button';
import { Input } from '@/ui/primitive/Form/Input';
import { space } from '@/ui/token';
import { Box, Flex } from '@kuma-ui/core';
import GoogleMapReact from 'google-map-react';
import { FC } from 'react';
import { BoardInput } from '../BoardInput';
import { BoardPlaceInput } from '../BoardPlaceInput';
import { BoardTimeInput } from '../BoardTimeInput';

export const BoardNewForm: FC = () => {
  const [title, onChangeTitle] = useOnChange<string>({ initialValue: '' });
  const [participantCount, onChangeParticipantCount] = useOnChange<number>({ initialValue: 0 });
  const [comment, onChangeComment] = useOnChange<string>({ initialValue: '' });
  const [place, onChangePlace] = useOnChange<string>({ initialValue: '' });
  const [startTime, onChangeStartTime] = useOnChange({ initialValue: '' });
  const [endTime, onChangeEndTime] = useOnChange({ initialValue: '' });

  const defaultProps = { center: { lat: 10.99835602, lng: 77.01502627 }, zoom: 11 };

  return (
    <Box>
      <Flex gap={space.xl} flexDirection="column" paddingY={space.xl}>
        <BoardInput type="text" name="Board名" state={title} onChange={onChangeTitle} />
        <BoardInput type="number" name="人数" state={participantCount} onChange={onChangeParticipantCount} />
        <BoardInput type="text" name="ひとこと" state={comment} onChange={onChangeComment} />
        <BoardPlaceInput
          tabs={[
            {
              head: 'テキスト',
              content: <Input type="text" name="集合場所/目的地" state={place} onChange={onChangePlace} />,
            },
            {
              head: 'マップ',
              content: (
                <Box minHeight="400px" width="100%">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  ></GoogleMapReact>
                </Box>
              ),
            },
          ]}
        />
        <BoardTimeInput
          startTime={startTime}
          endTime={endTime}
          onChangeStartTime={onChangeStartTime}
          onChangeEndTime={onChangeEndTime}
        />
      </Flex>
      <Flex justifyContent="center" marginY={space.xl}>
        <Button onClick={() => {}} styled kuma={{ paddingX: space.lg, width: '50%' }}>
          募集する
        </Button>
      </Flex>
    </Box>
  );
};