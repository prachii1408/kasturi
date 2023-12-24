'use client'


import React,{useContext} from 'react'
import {Box,Text,Grid, GridItem,Image,Heading,Divider, HStack,Button,VStack} from "@chakra-ui/react"
import { AiOutlineRight } from 'react-icons/ai'
import { CustomBreadCrumbItem, Product } from '@/model'
import Quantity from '@/components/Quantity'
import AddToCart from '@/components/AddToCart'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import CustomBreadcrumb from '../CustomBreadcrumb'
import { defaultBreadCrumbItems, getSubstring } from '@/helpers'

import { AppContext } from '@/context/AppContext';


interface detailsProps{
    product:Product
}




const Details = ({product}:detailsProps) => {
  const {state,addItem,removeItem,isAdded}=useContext(AppContext);
  const textMessage = `Can you please provide me details of this product %0A ${product.mainimage}`;
  const waMeLink = `https://wa.me/+917366003300?text=${textMessage}`

  return (
    <>
    <CustomBreadcrumb 
    items={[
      ...defaultBreadCrumbItems,
      
      {
        name:product.category!.name,
        link:`/categories/${product.category?.slug}`,
      },
      {
        name:getSubstring(product.name,20),
        link:`/products/${product.slug}`,
      },

    ] } />
   
   <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"} }
   w={{base:'100%' ,lg:'90%'}}
   mx="auto"
   p="0.5rem"
   gap="10">
     
    <GridItem p="0.5rem">
    <Image
      src={product.mainimage}
      alt={product.name}
      margin={"auto"}
      marginBottom={0}
      w={{base:"10rem",md:"10rem",lg:"12rem"}}
      h={{base:"12rem",md:"12rem",lg:"14rem"}}
    />
    </GridItem>
    <GridItem p={{base:"0rem" ,lg:"1rem"}}>
        {/* <Heading fontFamily={"Baskervvile"} textColor={"brand.primaryDark"} fontWeight={"normal"}>{product.name}</Heading>
        <Text my={{base:"0.5rem",md:"0.8rem",lg:"1rem"}} textColor={"brand.primaryDark"} fontFamily={"Playfair Display"}>{product.description}</Text>
        <Divider my="1rem" borderBottomColor={"brand.primaryDark"}/> */}
        <HStack display={"flex"} justifyContent={"space-around"}>
        <Quantity />
        <VStack>
        <Text fontFamily={"Baskervville"} textColor={"brand.primaryDark"} fontSize={{base:"1rem",md:"1.1rem",lg:"1.2rem"}} >Weight</Text>
        <Button textColor={"brand.primaryDark"} bgColor={"brand.primary"} w={{base:"4.2rem",lg:"4.4rem"}}>{product.wt}g</Button>
        </VStack>
        </HStack>
     
        <Divider my="1rem"  borderBottomColor={"brand.primaryDark"}/>
        <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)"}} w={"100%"} mx={"auto"}>
          <GridItem mt={"1rem"} mx="auto">
          <AddToCart product={product}/>
          </GridItem>
          <GridItem mt={"1rem"}  mx="auto">
          <Button  variant="outline"
           w="150px" backgroundColor={"brand.primaryMedium"} 
           borderColor={"brand.primary"} 
           rounded="full" 
           size="sm" 
           fontFamily={"Playfair Display"} 
           textColor={"brand.primaryDark"} 
           mx={"auto"}
          
           >      
            <a href={waMeLink}>
              <HStack>
                <Text>WhatsApp Now</Text>
                <Image width={"1.5rem"} src="/whatsapp2.png" alt="whatsapp"></Image>
              </HStack>
            
            </a>
        
          </Button> 
          </GridItem>
          <GridItem mt={"1rem"}  mx="auto">
          {
      isAdded('wishlist',product.id)?(
        <Button 
        variant="outline" 
        w="150px" 
        backgroundColor={"#fcf8f5"} 
        borderColor={"brand.primaryMedium"} 
        rounded="full" size="sm" 
        fontFamily={"Playfair Display"} 
        textColor={"brand.primaryDark"} 
        mx={"auto"} p={"1rem"}
        onClick={()=>removeItem('wishlist',product.id)}>
        Remove
         </Button>
      ):(  <Button 
      variant="outline" 
      w="150px" 
      backgroundColor={"brand.primaryMedium"} 
      borderColor={"brand.primary"} 
      rounded="full" size="sm" 
      fontFamily={"Playfair Display"} 
      textColor={"brand.primaryDark"} 
      mx={"auto"} p={"1rem"}
      onClick={()=>addItem('wishlist',product)}>
      Add to Wishlist
       </Button>
        
      )
    }
          
          </GridItem> 
           </Grid >
        
    </GridItem>
    </Grid>
    <Box p={"1rem"}>
    {/* <Divider my="1rem"  borderBottomColor={"brand.primaryDark"}/> */}
    {/* <Heading fontSize={{base :"1.5rem",lg:"2rem"}} fontWeight={"normal"} textColor={"brand.primaryDark"} fontFamily={"Baskervvile"}>Product Details</Heading> */}
    </Box>
    
   </>
  
  )
}

export default Details
