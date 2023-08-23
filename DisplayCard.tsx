import AddToCart from '@/components/AddToCart';
import Link from 'next/link';
import AddToWishlist from '@/components/AddToWishlist';
import { getSubstring } from '@/helpers';
import { Product } from '@/model'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack,Image,Text, IconButton, background } from '@chakra-ui/react'
import React from 'react'
import {BsFillSuitHeartFill} from "react-icons/bs"

interface display{
   product:Product;
}

const DisplayCard = ({product}:display) => {
  return (
    <Card maxW='xs' m="0.5rem"  cursor={"pointer"} _hover={{boxShadow:"xl"}} bg={"brand.primary"} mx="auto" mt="1rem">
    <CardBody>
   
      <AddToWishlist product={product} />
      <Link  href={`/products/${product.slug}`}>
      <Image
        src={product.mainImg}
        alt={product.name}
        borderRadius='lg'
        mx={"auto"}
        w={{base:"10rem",md:"10rem",lg:"12rem"}}
        h={{base:"10rem",md:"10rem",lg:"12rem"}}
       
      />
      </Link>
      <Stack mt='6' spacing='3' textAlign={"center"}>
        <Heading size='md' color={"brand.primaryDark"} fontFamily={"Playfair Display"}>{getSubstring(product.name,20)}</Heading>
        <Text color={"brand.primaryDark"} fontFamily={"Playfair Display"} textDecor="none" >
        {getSubstring(product.description,30)}
        </Text>
        <AddToCart product={product}/>
      </Stack>
      
    </CardBody>
  </Card>
  )
}

export default DisplayCard
