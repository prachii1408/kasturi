import { Box, Button, Flex, Stack ,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg="#CEA988" w="100%" display={"flex"} justifyContent={"center"}>
      <Flex mt="3rem" p={"1rem"}>
        <Stack m={{base:"1.2rem",md:"1.6rem",lg:"2rem"}}>
         <Text textColor={"brand.primary"} fontSize={"1.8rem"}>KJ</Text>
         <Text textColor={"brand.primary"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}} mt="0.5rem">@2023 Kasturi-Jewelleres .All Rights Reserved</Text>
         <Stack direction="row" spacing={{base:"3",md:"5",lg:"7"}} mt="0.5rem">
         <Button w={"25px"} h={"37px"} rounded="full" backgroundColor={"brand.primaryMedium"}></Button>
         <Button w={"25px"} h={"37px"} rounded="full" backgroundColor={"brand.primaryMedium"}></Button>
         <Button w={"25px"} h={"37px"} rounded="full" backgroundColor={"brand.primaryMedium"}></Button>
         </Stack>
      
        </Stack>
        <Stack m={{base:"1.2rem",md:"1.6rem",lg:"2rem"}}>
         <Text textColor={"brand.primary" } fontSize={{base:"0.9rem",md:"1.1rem",lg:"1.3rem"}} fontWeight={"normal"}>Comapny</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>About Us</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Contact Us</Text>
        </Stack>
        <Stack m={{base:"1.2rem",md:"1.6rem",lg:"2rem"}}>
         <Text textColor={"brand.primary" } fontSize={{base:"0.9rem",md:"1.1rem",lg:"1.3rem"}} fontWeight={"normal"}>Support</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Help Center</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Terms and Services</Text>
        <Text textColor={"#FFFFFF"} fontSize={{base:"0.8rem",md:"1rem",lg:"1.2rem"}}>Privacy Policy</Text>
        </Stack>
        
      </Flex>
    </Box>
  )
}

export default Footer
