import { Box, Flex } from '@kuma-ui/core';
import { FC } from 'react';

type TProps = { size: 'S' | 'L' };
export const Logo: FC<TProps> = ({ size }) => {
  const { width, height, borderWidth, borderHeight } =
    size === 'L'
      ? { width: '30px', height: '30px', borderWidth: '110px', borderHeight: '10px' }
      : { width: '20px', height: '20px', borderWidth: '80px', borderHeight: '7px' };
  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
      <Box position="relative" transform="rotate(-20deg)" width={70} height={70} margin="auto">
        <Flex gap={1} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1}>
          {[...Array(3)].map((idx) => (
            <Box
              key={idx}
              width={width}
              height={height}
              borderRadius="50%"
              background="linear-gradient(-45deg, #FF782C, #FE9E0F, #F19932)"
              backgroundSize="400%, 400%"
              animation="gradient 2s ease infinite"
            />
          ))}
        </Flex>
        <Box
          width={borderWidth}
          height={borderHeight}
          position="absolute"
          top="50%"
          left="50%"
          background="linear-gradient(-45deg, #FF782C, #FE9E0F, #F19932)"
          backgroundSize="400%, 400%"
          animation="gradient 2s ease infinite"
          borderRadius={10}
          transform="translate(-50%, -50%)"
          zIndex={0}
        />
      </Box>
    </>
  );
};
