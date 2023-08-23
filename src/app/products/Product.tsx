import ProductCard from '@/ProductCard'
import { Product } from '@/model'
import { Box ,IconButton,Text,Grid,GridItem} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import DisplayCard from '../../../DisplayCard'
interface list{
  products:Product[]
}

const Product = ({products}:list) => {
  return (
    <>
    
   <Box textAlign={"center"}>
   <Text fontFamily={"Baskervville"} textColor={"brand.primaryDark"} fontSize={{base:"1rem",md:"1.7rem",lg:"2rem"}}  >{products[0].category?products[0].category.name:""} </Text>
   </Box>
   
   
    <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} border={'none'} boxShadow={'none'}>
     { products.map((product)=>(
        <GridItem key={product.id}>
      <DisplayCard product={product}/>
   </GridItem>
      ))}
      
   </Grid>
    
     
  
   </>
  
  )
}

export default Product
