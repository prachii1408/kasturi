'use client'
import { Box, Flex, Heading, Stack,Image,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { GenderStyle } from './shopGen'
import { headStyles, topTextStyles } from '../TopCategories/CategoryStyle'
import Link from 'next/link'

const ShopGender = () => {
  return (
    <Box {...GenderStyle}>
    <Flex display="flex" justifyContent={"center"}>
            <Stack  direction="row" alignItems="center">
            <Image src="redDiamond.png" w={{base:"1.5rem",md:"2rem",lg:"3rem"}} alt="diamond"></Image>
            <Heading   {...headStyles} fontSize={{base:"1.5rem",md:"2.5rem",lg:"2.7rem"}} ml={{base:"0.5rem",md:"0.7rem",lg:"1rem"}} mr={{base:"0.5rem",md:"0.7rem",lg:"1rem"}} mb={"1rem"}>
              DISCOVER BY GENDER
         </Heading>
        <Image src="redDiamond.png"  w={{base:"1.5rem",md:"2rem",lg:"3rem"}} alt="diamond"></Image>
            </Stack>
     </Flex>
     <Text {...topTextStyles} fontSize={{base:"1rem",md:"1.4rem",lg:"2rem"}} w={"75vw"} mx={"auto"}> Unleash the elegance and style that matches your gender with our exquisite collection, as
                you discover the perfect jewellery pieces that speak to your individuality.</Text>
    <Stack textAlign={"center"} direction={"column"} mb="2rem">
        <Image src="Men.png" w={{base:"7.6rem",md:"14rem",lg:"18rem"}} mx={"auto"} alt="gender"></Image>
        <Link href='/gender/men'>
        <Button variant="outline" backgroundColor={"brand.primaryMedium"} borderColor={"brand.primaryDark"}  size="md" w={{base:"7.6rem",md:"14rem",lg:"18rem"}} fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"}>
    Explore Now
    </Button>
        </Link>
       
    </Stack>
    <Flex display={"flex"} justifyContent={"space-evenly"} mb="2rem">
    <Stack textAlign={"center"} direction={"column"} >
        <Image src="Women.png" w={{base:"7.6rem",md:"14rem",lg:"18rem"}} mx={"auto"} alt="gender"></Image>
        <Link href="/gender/women">
        <Button variant="outline" backgroundColor={"brand.primaryMedium"} borderColor={"brand.primaryDark"}  size="md" w={{base:"7.6rem",md:"14rem",lg:"18rem"}} fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"}>
    Explore Now
    </Button>
        </Link>
      
    </Stack >
    <Stack textAlign={"center"} direction={"column"}>
        <Image src="Kid.png" w={{base:"7.6rem",md:"14rem",lg:"18rem"}} mx={"auto"} alt="gender"></Image>
        <Link href="/gender/kids">
        <Button variant="outline" backgroundColor={"brand.primaryMedium"} borderColor={"brand.primaryDark"}  size="md" w={{base:"7.6rem",md:"14rem",lg:"18rem"}} fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"}>
    Explore Now
    </Button>
        </Link>
      
    </Stack>

    </Flex>
    </Box>
  )
}

export default ShopGender
