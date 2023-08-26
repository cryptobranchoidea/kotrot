'use client';
import { space } from '@/ui/token';
import { Box, Flex } from '@kuma-ui/core';
import { FC, useState } from 'react';

const Atom: FC<{ row: number; column: number }> = ({ row, column }) => {
  const [style, setStyle] = useState({ backgroundColor: 'colors.primary' });
  const onMouseEnter = () => setStyle({ backgroundColor: 'colors.secondary.sub' });
  const onMouseLeave = () => setStyle({ backgroundColor: 'colors.primary' });
  const isLight = (row === 4 && column !== 2) || (row === 3 && column === 2);
  return (
    <Box
      width="15px"
      height="15px"
      borderRadius="3px"
      backgroundColor={isLight ? 'colors.secondary.sub' : style.backgroundColor}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
