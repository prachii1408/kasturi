'use client'
import React from 'react'
import {Box} from '@chakra-ui/react'
import {navbarStyles} from "./style"
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import Banner from '@/features/Home/DesktopBanner'

const Navbar = () => {
  return (
    <>
    <Box {...navbarStyles} >
      <DesktopNav />
      <MobileNav />
    </Box>
   
    </>
    
  )
}

export default Navbar
