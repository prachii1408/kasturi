"use client"

import { AppContext } from '@/context/AppContext'
import { getSubstring } from '@/helpers';
import { Box, Stack,Card, CardHeader, Heading, CardBody,Flex,Image,Text,Divider } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Link from 'next/link';

export const CheckOut = () => {
    const{
        state:{checkout},
      }=useContext(AppContext)
  return (
    <Box w={{base:'100%',lg:'90%'}} mx={"auto"} my="2rem" px={"1rem"}>
      <Stack spacing={10} w="100%">
        <Card borderWidth={"1px"} borderColor={"brand.primaryDark"} shadow="none">
        <CardHeader>
            <Heading size="lg" textColor={"brand.primaryDark"} fontFamily={"Baskervvile"} textAlign={'center'}>Review Items</Heading>
        </CardHeader>
        <CardBody>
            { 
                checkout.map((item)=>(
                    <>
                    <Link href={`/products/${item.slug}`}>
                    <Flex key={item.id} align={"center"} justify="space-between" m={'1rem'}>
                        <Flex align="center">
                            <Image src={item.mainimage} boxSize={"100px"} bgSize={"contain"} alt={item.name}></Image>
                            <Box mx="1rem">
                                {/* <Text textColor="brand.priamryDark" fontWeight={"bold"}>
                                    {item.name}
                                </Text> */}
                                {/* <Text textColor="brand.priamryMedium">
                                    {getSubstring(item.description,50)}
                                </Text> */}
                            </Box>
                            <Box textAlign={"right"}>
                                <Text fontWeight={"bold"} fontSize={{base:"sm",lg:"md"}} textColor={"brand.primaryDark"}>
                                    Quantity:{item.count}
                                </Text>
                            </Box>
                           
                        </Flex>
                    </Flex>
                     <Divider my="1rem"  borderBottomColor={"brand.primaryDark"}/>
                    </Link>
                     
                    </>
                  
                ))
            }
        </CardBody>
        </Card>
      </Stack>
    </Box>
  )
}

export default CheckOut
