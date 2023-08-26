'use client';
import { Box } from '@kuma-ui/core';
import { useState } from 'react';

export const DynamicLogo = () => {
  const [rotate, setRotate] = useState('rotate(10deg)');
  const onMouseEnter = () => setRotate('rotate(20deg)');
  const onMouseLeave = () => setRotate('rotate(10deg)');
  return (
    <Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Box
        height="20px"
        width="160px"
        backgroundColor="#FFED4D"
        transform={rotate}
        borderRadius={10}
        marginBottom={10}
        borderColor="black"
        borderWidth={2}
        border={'solid'}
        transition="all 0.4s ease-in"
      />
      <Box
        height="80px"
        width="160px"
        backgroundColor="#638FFF"
        borderRadius={10}
        borderColor="black"
        borderWidth={2}
        border={'solid'}
      />
    </Box>
  );
};
