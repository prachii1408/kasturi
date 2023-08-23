'use client'

import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter,Input, IconButton, Link ,Box} from '@chakra-ui/react'
// import { Input } from 'postcss'
import React from 'react'
import {VscListFlat} from "react-icons/vsc"
import { NavItem } from '@/model'
interface items{
    navItems:NavItem[]
}

const MobileNavMenu = ({navItems}:items) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()
  return (
    <>
     <Button ref={btnRef} colorScheme='brand.primaryMedium'  onClick={onOpen}>
       <IconButton textColor={"brand.primaryDark"} aria-label="hamburger" backgroundColor={"brand.primary"} _hover={{backgroundColor:"brand.primaryMedium"}}><VscListFlat /></IconButton> 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>KJ</DrawerHeader>

          <DrawerBody>
            {
                 navItems.map((navItem,i)=><Link key={i} href={navItem.href}  >
                     <Box p="0.5rem" _hover={{bgColor:"brand.primary"}} textColor={"brand.primaryDark"} fontFamily={"Baskervvile"} >
                        {navItem.label}
                     </Box>
                 </Link>)
                
            }
          
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNavMenu
