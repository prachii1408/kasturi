import { Box, Flex, Stack,Heading,Text,Image, Button } from '@chakra-ui/react'
import React from 'react'

const JewelryCare = () => {
  return (
    <Box bg={"brand.primary"} p="1rem">
      
        < Flex display="flex" justifyContent={"space-between"} >
          <Box>
            <Heading as="h5" textColor={"brand.primaryDark"} mt="3rem" ml="10vw"fontFamily={"Baskervville"} fontWeight={"medium"} fontSize={{base:"1.4rem",md:"1.6rem",lg:"2.2rem"}}>JEWELRY CARE GUIDE</Heading>
            <Text ml="10vw" w="30vw" textColor="brand.primaryDark" fontFamily={"Baskervville"} fontStyle={"italic"} fontSize={{base:"0.8rem",md:"1.2rem",lg:"1.7rem"}}>is your secret weapon to keeping your precious gems and metals shining bright for years to come.....</Text>
          </Box>
          <Box>
          <Image src="guide_model.png" w={{base:"13rem",md:"15rem",lg:"18rem"}} mr="10vw" mt="3rem"></Image>
          </Box>
     </Flex>
     < Flex display="flex" justifyContent={"space-between"} >
     <Image src="guide_model2.png" w={{base:"10rem",md:"14rem",lg:"20rem"}} h={{base:"14rem",md:"16rem",lg:"22rem"}}ml="10vw" ></Image>
          <Box>

            <Text w="30vw" textColor="brand.primaryDark" fontFamily={"Baskervville"} fontStyle={"italic"} fontSize={{base:"1.3rem",md:"2rem",lg:"2.5rem"}} mt={{base:"1rem",md:"1.2rem",lg:"1.7rem"}}>Your Jewelry Collection deserves 
          the best care possible</Text>
          <Button variant="outline" backgroundColor={"brand.primaryMedium"}  size="md" w={{base:"7rem",md:"10rem",lg:"18rem"}} fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"}>
    Explore Now
    </Button>
          </Box>
          <Box>
          
          </Box>
     </Flex>
    </Box>
  )
}

export default JewelryCare
