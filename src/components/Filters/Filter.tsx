'use client'
import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import FilterItem from "@/components/Filters/FilterItem"
import FilterSubCategory from './FilterSubCategory'

const types=[
    {
        name:"gender",
        id:"null"
    },
    {
        name:"material",
        id:"null"
    }
    
]
interface Props{
    defined:string
}

const Filter = ({defined}:Props) => {
  return (
    <Box
    bg="brand.primary"
    h="4rem">
    <HStack 
    gap={"2rem"}
    display={"flex"}
    justifyContent={"center"}
    p={"0.5rem"}

   >
        {types.map((type,index)=>(
         <FilterItem item={type} key={index}/>
        ))}
        <FilterSubCategory val={defined}/>
    </HStack>
    </Box>
  )
}

export default Filter
