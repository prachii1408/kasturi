'use client'

import { Box, Flex, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import AppLogo from '../AppLogo'
import { mobileCartStyles, mobileNavStyles, mobileSearchWrapper } from './style'
import Search from '../Search/Search'
import MobileNavMenu from './MobileNavMenu'
import { navItems } from '@/helpers'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'

const MobileNav = () => {
  return (
    <>
     <Flex {...mobileNavStyles}>
        <Box><MobileNavMenu navItems={navItems}/></Box>
        <AppLogo />
        <Stack {...mobileCartStyles}>
            <Text><Wishlist /></Text>
            <Text><Cart /></Text>
        </Stack>
      
    </Flex>
    <Box {...mobileSearchWrapper} >
        <Search />
    </Box>
    </>
   
  )
}

export default MobileNav
