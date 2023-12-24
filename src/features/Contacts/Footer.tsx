'use client'
import AppLogo from '@/components/AppLogo'
import { Box, Button, Flex, Stack ,Text,Image, IconButton, GridItem,Grid} from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
   

    

   
    <Box bg="#CEA988" w="100%" display={"flex"} justifyContent={"center"} id="#footer" mt={"1rem"}>
      <Flex mt="3rem" p={"50px"}>
      <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"} }
   w={{base:'100%' ,lg:'90%'}}
   mx="auto"
   p="0.5rem"
   gap="10">
    <GridItem p="0.5rem">
    
       <Image src="/lightLogo.svg" width={{base:"5rem",md:"6rem",lg:"8rem"}} alt="logo"></Image>
         <Text textColor={"brand.primary"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.3rem"}} mt="0.5rem">@2023 Kasturi-Jewelleres .All Rights Reserved</Text>
         
          
          <Stack direction="row" spacing={{base:"3",md:"5",lg:"7"}} mt="0.5rem">
          <a href="https://instagram.com/kasturijewellersindia?igshid=MzRlODBiNWFlZA==">
         <Image src="/insta.png" w={{base:"30px",md:"25px",lg:"25px"}}alt="instagram" ></Image>
         </a>
         <a href="https://wa.me/+917366003300">
         <Image src="/whatsapp2.png"  w={{base:"30px",md:"25px",lg:"25px"}}alt="instagram" ></Image>
         </a>
         <a href="https://www.facebook.com/kasturijewellersindia?mibextid=ZbWKwL">
         <Image src="/facebook.png"  w={{base:"30px",md:"25px",lg:"25px"}}alt="instagram"></Image>
         </a>
         </Stack>
          
         
    </GridItem>
    <GridItem>
    
        <Stack m={{base:"1.2rem",md:"1.6rem",lg:"2rem"}}>
        <Text textColor={"#FFFFFF"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.3rem"}}>Contact Us</Text>
        
        {/* <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"0.9rem",lg:"1rem"}}><b>Address:</b>191/12 Shivaji Chowk Karhariya Road Banka Bihar,BANKA,813102</Text> */}
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.9rem",md:"1rem",lg:"1.1rem"}}><b>Email:</b><a href="mailto:kasturijewellersindia@gmail.com">kasturijewellersindia@gmail.com</a></Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.9rem",md:"1rem",lg:"1.1rem"}}><b>Mobile:</b>+917366003300</Text>
        </Stack>
    </GridItem>
    </Grid>
    
    
       
      
       
        {/* <Stack m={{base:"1.2rem",md:"1.6rem",lg:"2rem"}}>
         <Text textColor={"brand.primary" } fontSize={{base:"0.9rem",md:"1.1rem",lg:"1.3rem"}} fontWeight={"normal"}>Support</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Help Center</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Terms and Services</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Privacy Policy</Text>
        </Stack> */}
        
      </Flex>
    </Box>
  )
}

export default Footer
