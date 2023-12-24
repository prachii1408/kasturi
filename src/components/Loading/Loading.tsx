'use client';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const Loading = () => {
  return (
    <Flex
      minH="calc(100vh - 150px)"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Image
        src="/cart2.gif"
        alt="loading cart"
        width={150}
        height={150}
      />
      <Text color={"brand.primaryDark"}>Loading...</Text>
    </Flex>
  );
};