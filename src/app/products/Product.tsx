'use client'
import ProductCard from '@/ProductCard'
import { Product } from '@/model'
import { Box ,IconButton,Text,Grid,GridItem, Flex, Button, styled} from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineRight} from "react-icons/ai"
import DisplayCard from '../../../DisplayCard'
import { usePagination } from '@mantine/hooks'
import Filter from '@/components/Filters/Filter'
import { gridStyles } from './style'

interface list{
  products:Product[],
  title:string
}

const itemsPerPage = 8;


const Product = ({products,title}:list) => {

  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsPerPage)
  );

  const total = Math.ceil(products.length / itemsPerPage);
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setVisibleProducts(products.slice(start, end));
    },
  });
  return (
    <>
    {/* <Filter defined={id}/> */}
   <Box textAlign={"center"}>
   <Text fontFamily={"Baskervville"} textColor={"brand.primaryDark"} fontSize={{base:"1.5rem",md:"1.7rem",lg:"2rem"}}  >{title} </Text>
   </Box>
   
   
    <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}} border={'none'} boxShadow={'none'}>
     { visibleProducts.map((product)=>(
        <GridItem key={product.id}>
      <DisplayCard product={product}/>
   </GridItem>
      ))}
   </Grid>

   {itemsPerPage < products.length && (
        <Flex
          justify="center"
          w={{ base: '100%', lg: '90%' }}
          mx="auto"
          py="2rem"
        >
          {pagination.range.map((range) =>
            range === 'dots' ? (
              <Button
                borderWidth="1px"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="white"
                mx="1"
                key={range}
              >
                ...
              </Button>
            ) : (
              <Button
                onClick={() => pagination.setPage(range)}
                borderWidth="1px"
                borderColor="brand.primaryMedium"
                color={pagination.active === range ? 'white' : 'brand.primaryDark'}
                bgColor={
                  pagination.active === range ? 'brand.primaryMedium' : 'white'
                }
                mx="1"
                key={range}
                _active={{ bgColor: 'none' }}
                _hover={{ bgColor: 'none' }}
              >
                {range}
              </Button>
            )
          )}
        </Flex>
      )}
    
   
  
   </>
  
  )
}

export default Product
