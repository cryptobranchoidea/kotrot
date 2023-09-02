'use client';
import { bgColor, space } from '@/ui/token';
import { Box, Flex } from '@kuma-ui/core';
import { FC } from 'react';

const Atom: FC<{ row: number; column: number }> = ({ row, column }) => {
  const isLight = (row === 4 && column !== 2) || (row === 3 && column === 2);
  return (
    <Box
      width="15px"
      height="15px"
      borderRadius="3px"
      backgroundColor={`${isLight ? bgColor.secondary.accent : bgColor.primary}`}
      _hover={{ backgroundColor: bgColor.secondary.accent }}
    />
  );
};

const LogoLow: FC<{ row: number; rowSize: number }> = ({ row, rowSize }) => {
  return (
    <Flex gap={space.sm} justifyContent="right">
      {[...Array(rowSize)].map((_, column) => (
        <Atom row={row} column={column} key={column} />
      ))}
    </Flex>
  );
};

export const DynamicLogo: FC = () => {
  const rowSizes = [5, 5, 5, 5, 5, 5, 6, 7];
  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" gap={space.sm}>
        {rowSizes.map((rowSize, index) => {
          return <LogoLow row={index} rowSize={rowSize} key={index} />;
        })}
      </Flex>
    </Flex>
  );
};
