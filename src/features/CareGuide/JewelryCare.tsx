'use client'
import { Box, Flex, Stack,Heading,Text,Image, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const JewelryCare = () => {
  return (
    <Box bg={"brand.primary"} p="1rem">
      
        < Flex display="flex" justifyContent={"space-between"} >
          <Box>
            <Heading as="h5" textColor={"brand.primaryDark"} mt="3rem" ml="6vw"fontFamily={"Baskervville"} fontWeight={"medium"} fontSize={{base:"1.4rem",md:"1.6rem",lg:"2.2rem"}}>JEWELLERY CARE GUIDE</Heading>
            <Text ml="6vw" w="30vw" textColor="brand.primaryDark" fontFamily={"Baskervville"} fontStyle={"italic"} fontSize={{base:"0.8rem",md:"1.2rem",lg:"1.7rem"}}>is your secret weapon to keeping your precious gems and metals shining bright for years to come.....</Text>
          </Box>
          <Box>
          <Image src="guide_model.png" w={{base:"13rem",md:"15rem",lg:"18rem"}} mr="10vw" mt="3rem" alt="model1"></Image>
          </Box>
     </Flex>
     < Flex display="flex" justifyContent={"space-between"} mt="1rem">
     <Image src="guide_model2.png" w={{base:"9rem",md:"14rem",lg:"20rem"}} h={{base:"14rem",md:"16rem",lg:"22rem"}}ml="6vw" alt="model2" mr="0.5rem" ></Image>
          <Box>

            <Text w="30vw" textColor="brand.primaryDark" fontFamily={"Baskervville"} fontStyle={"italic"} fontSize={{base:"1.2rem",md:"2rem",lg:"2.5rem"}} mt={{base:"1rem",md:"1.2rem",lg:"1.7rem"}}>Your Jewellery Collection deserves 
          the best care possible</Text>
          <Button variant="outline" backgroundColor={"brand.primaryMedium"}  size="md" w={{base:"6.5rem",md:"10rem",lg:"18rem"}} fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"}>
            <Link href="/care-guide">Explore</Link>
    
    </Button>
          </Box>
          <Box>
          
          </Box>
     </Flex>
    </Box>
  )
}

export default JewelryCare
