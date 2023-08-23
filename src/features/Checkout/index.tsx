"use client"

import { AppContext } from '@/context/AppContext'
import { getSubstring } from '@/helpers';
import { Box, Stack,Card, CardHeader, Heading, CardBody,Flex,Image,Text } from '@chakra-ui/react'
import React, { useContext } from 'react'

export const CheckOut = () => {
    const{
        state:{checkout},
      }=useContext(AppContext)
      console.log(checkout)
  return (
    <Box w={{base:'100%',lg:'90%'}} mx={"auto"} my="2rem">
      <Stack spacing={10} w="100%">
        <Card borderWidth={"1px"} borderColor={"brand.primaryDark"} shadow="none">
        <CardHeader>
            <Heading size="md" textColor={"brand.primaryDark"} fontFamily={"Baskervvile"}>Review Items</Heading>
        </CardHeader>
        <CardBody>
            { 
                checkout.map((item)=>(
                    <Flex key={item.id} align={"center"} justify="space-between">
                        <Flex align="center">
                            <Image src={item.mainImg} boxSize={"100px"} bgSize={"contain"} alt={item.name}></Image>
                            <Box mx="1rem">
                                <Text textColor="brand.priamryDark" fontWeight={"bold"}>
                                    {item.name}
                                </Text>
                                <Text textColor="brand.priamryMedium">
                                    {getSubstring(item.description,50)}
                                </Text>
                            </Box>
                            <Box textAlign={"right"}>
                                <Text fontWeight={"bold"} fontSize={{base:"sm",lg:"md"}}>
                                    Quantity:{item.count}
                                </Text>
                            </Box>
                        </Flex>
                      <div>{item.name}</div>
                    </Flex>
                ))
            }
        </CardBody>
        </Card>
      </Stack>
    </Box>
  )
}

export default CheckOut
