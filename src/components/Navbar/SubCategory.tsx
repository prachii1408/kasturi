import { NavItem, subcat } from '@/model'
import { Box, StackDivider, VStack ,Text} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'

// const list=[
// {
//     name:"Engagement Ring"
// },{
//     name:"Hoop Ring"
// },{
//     name:"Wedding Ring"
// },
// {
//     name:"Engagement Ring"
// },{
//     name:"Hoop Ring"
// },{
//     name:"Wedding Ring"
// }
// ]
interface NavProps{
  list:NavItem
}

const SubCategory = ({list}:NavProps) => {
  const [isVisible,setIsVisible]=useState(false);
  
  return (
    <>
    <Box  onMouseEnter={()=>setIsVisible(true)}
    onMouseLeave={()=>setIsVisible(false)}>
            <Link  href={`/materials${list.href}`}> 
        <Text 
    >{list.label}</Text>
    </Link></Box>
    
    { isVisible?(<VStack
    zIndex={1}
    w="10rem"
    divider={<StackDivider borderColor='brand.primaryMedium' />}
    spacing={3}
    align='stretch'
    bg={"brand.primary"}
    position={"absolute"}
    onMouseEnter={()=>setIsVisible(true)}
    onMouseLeave={()=>setIsVisible(false)}
    transition="all ease 0.5s"
    
  >
    {  
        list.submenu.map((item,index)=>(
            <Box key={index} h='40px' _hover={{bg:"brand.primaryMedium"}} p={"1rem"} display={"flex"} alignItems={"center"}>
                <Link href={`/materials${list.href}${item.href}`}>
                {item.title}
                </Link>
           </Box>
        ))}
    
    
  </VStack>):<></>}
    </>
  
  )
}

export default SubCategory
