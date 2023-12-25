'use client'

import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter,Input, IconButton ,Box} from '@chakra-ui/react'
import Link from 'next/link'
// import { Input } from 'postcss'
import React from 'react'
import {VscListFlat} from "react-icons/vsc"
import { NavItem } from '@/model'
import AppLogo from '../AppLogo'
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
          <DrawerHeader><AppLogo/></DrawerHeader>

          <DrawerBody>
            {
                 navItems.map((navItem,i)=>
                 <Link key={i} href={`/materials${navItem.href}`}  >
                     <Box p="0.5rem" _hover={{bgColor:"brand.primary"}} textColor={"brand.primaryDark"} fontFamily={"Baskervvile"} >
                        {navItem.label}
                     </Box>
                 </Link>
                 )
                
            }
             <Link  href={`/materials/franchise`}  >
                     <Box p="0.5rem" 
                     _hover={{bgColor:"brand.primary"}} 
                     textColor={"brand.primaryDark"} 
                     fontFamily={"Baskervvile"} 
                     textDecoration={"underline"}
                     textUnderlineOffset={"5px"}
                     textDecorationColor={"brand.primaryDark"}>
                        FRANCHISE
                     </Box>
                 </Link>
          
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNavMenu
