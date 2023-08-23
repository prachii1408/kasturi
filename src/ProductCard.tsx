import { Card, CardBody, Stack, Heading,Image,Text, IconButton } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import AddToCart from './components/AddToCart'

import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperOptions  from 'swiper'
import {Navigation,Autoplay} from 'swiper/modules'
import { Product } from './model'
import { products } from '../mocks/products'
import { getSubstring } from './helpers'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import AddToWishlist from './components/AddToWishlist'
import Wish from './wish'

interface productCardProps{
  product:Product;
}

const ProductCard = ({product}:productCardProps) => {
 
  return (
 
    <Card maxW='xs' m="0.5rem" background={"#CEA988"} _hover={{boxShadow:"xl"}} >
  <CardBody >
  
<Wish product={product} />
<Link href={`/products/${product.slug}`}>
    <Image
      src={product.mainImg}
      alt={product.name}
      data-swiper-parallax="-23"
      mx={"auto"}
      w={{base:"10rem",md:"10rem",lg:"12rem"}}
      h={{base:"12rem",md:"12rem",lg:"14rem"}}
    />
     </Link>
    <Stack mt='6' spacing='3' >
      <Heading size='md' color={"brand.primary"} fontFamily={"Playfair Display"}  data-swiper-parallax="-100">{getSubstring(product.name,20)}</Heading>
      <Text color={"brand.primary"} fontFamily={"Playfair Display"}  data-swiper-parallax="-200">
      {getSubstring(product.description,30)}
      </Text>
     <AddToCart product={product}/>
    </Stack>
   
  </CardBody>
 
</Card>
  )
}

export default ProductCard
