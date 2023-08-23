'use client'


import React from 'react'
import {Box,IconButton,Text,Grid, GridItem,Image,Heading,Divider, HStack,Button} from "@chakra-ui/react"
import { AiOutlineRight } from 'react-icons/ai'
import { CustomBreadCrumbItem, Product } from '@/model'
import Quantity from '@/components/Quantity'
import AddToCart from '@/components/AddToCart'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import CustomBreadcrumb from '../CustomBreadcrumb'
import { defaultBreadCrumbItems, getSubstring } from '@/helpers'


interface detailsProps{
    product:Product
}


const Details = ({product}:detailsProps) => {
  return (
    <>
    <CustomBreadcrumb 
    items={[
      ...defaultBreadCrumbItems,
      {
        name:product.category!.name,
        link:`/categories/${product.category?.id}`,
      },
      {
        name:getSubstring(product.name,20),
        link:`/products/${product.slug}`,
      },

    ]}   >

    </CustomBreadcrumb>
   <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"} }
   w={{base:'100%' ,lg:'90%'}}
   mx="auto"
   p="0.5rem"
   gap="20">
    <GridItem p="0.8rem">
    <Image
      src={product.mainImg}
      alt={product.name}
      w={{base:"10rem",md:"10rem",lg:"12rem"}}
      h={{base:"12rem",md:"12rem",lg:"14rem"}}
    />
    </GridItem>
    <GridItem p={{base:"0rem" ,lg:"1rem"}}>
        <Heading fontFamily={"Baskervvile"} textColor={"brand.primaryDark"} fontWeight={"normal"}>{product.name}</Heading>
        <Text my="1rem" textColor={"brand.primaryDark"} fontFamily={"Playfair Display"}>{product.description}</Text>
        <Divider my="1rem" borderBottomColor={"brand.primaryDark"}/>
        <Quantity />
        <Divider my="1rem"  borderBottomColor={"brand.primaryDark"}/>
        <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)"}} w={"100%"} mx={"auto"}>
          <GridItem mt={"1rem"} mx="auto">
          <AddToCart product={product}/>
          </GridItem>
          <GridItem mt={"1rem"}  mx="auto">
          <Button  variant="outline" w="150px" backgroundColor={"brand.primaryMedium"} borderColor={"brand.primary"} rounded="full" size="sm" fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"}>
          WhatsApp Now
          </Button> 
          </GridItem>
          <GridItem mt={"1rem"}  mx="auto">
          <Button variant="outline" w="150px" backgroundColor={"brand.primaryMedium"} borderColor={"brand.primary"} rounded="full" size="sm" fontFamily={"Playfair Display"} textColor={"brand.primaryDark"} mx={"auto"} p={"1rem"}>
          Add to Wishlist 
           </Button>
          </GridItem> 
           </Grid >
        
    </GridItem>
    </Grid>
    <Box p={"1rem"}>
    <Divider my="1rem"  borderBottomColor={"brand.primaryDark"}/>
    <Heading fontSize={{base :"1.5rem",lg:"2rem"}} fontWeight={"normal"} textColor={"brand.primaryDark"} fontFamily={"Baskervvile"}>Product Details</Heading>
    </Box>
    
   </>
  
  )
}

export default Details
