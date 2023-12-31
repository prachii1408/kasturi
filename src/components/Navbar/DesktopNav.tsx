'use client'
import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { cartstyles, desktopNavStyles, franchiseStyles, liststyles, logostyles } from './style'
import AppLogo from '../AppLogo'
import { navItems } from '@/helpers'
import Link from 'next/link'
import Search from '../Search/Search'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import SubCategory from './SubCategory'


const DesktopNav = () => {
 
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logostyles}>
        <Box><AppLogo /></Box>
     </Stack>
      <Stack {...liststyles}>
      { 
                navItems.map((navItem) => (<Box key={navItem.label}>
             <SubCategory list={navItem} />
                    </Box>
                   ))
            }
             <Box  h='40px'  display={"flex"} alignItems={"center"} {...franchiseStyles}>
                <Link href={`/materials/franchise`}>
                  FRANCHISE
                </Link>
           </Box>
            
      </Stack>
      <Stack {...cartstyles}>
      <Box><Search /></Box>
        <Box><Wishlist /></Box>
        <Box><Cart /></Box>
      </Stack>
      
    </Flex>
  )
}

export default DesktopNav
