import { Box,Image,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import { mobileView, spanMobileStyles, textBoxMobileStyles,  textMobileStyles } from './BannerStyle'

const mobileBanner = () => {
  return (
    <Flex w="100%" {...mobileView}>
       <Image src='model3.jpg' alt='Dan Abramov'  w="100vw" h="70vh" />
       <Box {...textBoxMobileStyles}>
        <Text {...textMobileStyles}><Text as="span" {...spanMobileStyles}>Elegance</Text> is when inside is as beautiful as outside</Text>
    </Box>
    </Flex>
  )
}

export default mobileBanner
