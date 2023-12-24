'use client'
import { Box,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import {  desktopView, spanStyles, textBoxStyles, textStyles } from './BannerStyle'

const Banner = () => {
  return (
    
    <Flex w="100%" {...desktopView}>
    <Image src='model3.jpg' alt='Dan Abramov'  w="100vw" h="120vh" />
    <Box {...textBoxStyles}>
        <Text {...textStyles}><Text as="span" {...spanStyles}>Elegance</Text> is when inside is as beautiful as outside</Text>
    </Box>
  </Flex>
  
  )
}

export default Banner
