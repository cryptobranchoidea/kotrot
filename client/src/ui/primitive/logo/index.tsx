'use client';
import { space } from '@/ui/token';
import { Box, Flex } from '@kuma-ui/core';
import { FC } from 'react';

const Atom: FC<{ row: number; column: number }> = ({ row, column }) => {
  const isLight = (row === 4 && column !== 2) || (row === 3 && column === 2);
  return (
    <Box
      width="4px"
      height="4px"
      borderRadius="1px"
      backgroundColor={`${isLight ? 'colors.secondary.sub' : 'colors.primary'}`}
      _hover={{ backgroundColor: 'colors.secondary.sub' }}
    />
  );
};

const LogoLow: FC<{ row: number; rowSize: number }> = ({ row, rowSize }) => {
  return (
    <Flex gap={space.xs} justifyContent="right">
      {[...Array(rowSize)].map((_, column) => (
        <Atom row={row} column={column} key={column} />
      ))}
    </Flex>
  );
};

export const Logo: FC = () => {
  const rowSizes = [5, 5, 5, 5, 5, 5, 6, 7];
  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" gap={space.xs}>
        {rowSizes.map((rowSize, index) => {
          return <LogoLow row={index} rowSize={rowSize} key={index} />;
        })}
      </Flex>
    </Flex>
  );
};
