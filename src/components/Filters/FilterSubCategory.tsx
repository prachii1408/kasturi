import { Box, Select } from '@chakra-ui/react'
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../sanity/lib/client';

interface Prop{
    val:string,
}
interface YourProp{
    name:string,
    id:string
  }

const getSubCat=groq`*[_type=="category" && slug.current==$val]{
    subcategory[]->{
      name,
      "id":_id  }
  }`
  
  interface catProp{
    subcategory:YourProp[];
  }
  const revalidate=60;

export default async function FilterSubCategory ({val}:Prop)  {

    const sub:catProp[]=await client.fetch(getSubCat,{val});
  return (
    <Box display={"flex"} alignItems={"center"} h="3rem">
     <Select 
      placeholder={"subcategory"}
      focusBorderColor='brand.primaryDark'
      _placeholder={ {opacity: 0.4,color: 'inherit'}}
      bg="brand.primaryMedium"
      color="brand.primaryDark"
     >
        {sub[0].subcategory.map((element,index)=>(
        <option value={element.id} key={index}>
          <Box>{element.name}</Box></option>
        ))}
    </Select></Box>
   
  )
}


