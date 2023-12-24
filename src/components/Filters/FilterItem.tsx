
import { Box,Select} from '@chakra-ui/react'
import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'



interface Prop{
  name:string,
  id:string
}
interface YourProps {
  item: Prop;
}

interface filterProp{

    gender:string,
    material:string,
    subcategory:string
  
}
const getTypes=groq`*[_type==$item.name]{
  "id":_id,
  name,
}
`
const getAllProducts = async (filters:filterProp) => {
  // Construct a Sanity query based on the filters
  var query = groq`*[_type == 'product'`;
  
  // if (filters.subcategory) {
  //   query += ` && category == "${filters.subcategory}"`;
  // }

  if (filters.material) {
    query += ` && material._ref == "${filters.material}"`;
  }

  if (filters.gender) {
    query += ` && gender._ref == "${filters.subcategory}"`;
  }

  query += ']';

  // Execute the query and return the results
  const products = await client.fetch(query);
  return products;
};


const revalidate=60;

const FilterItem = async ({item}:YourProps)=> {
   const [products, setProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
    gender: "null",
    material: "null",
    subcategory:"null",
  });
  
  // useEffect(() => {
  //   // Fetch products from Sanity based on selected filters
  //   const fetchProducts = async () => {
  //     const filteredProducts = await getAllProducts(selectedFilters);
  //     setProducts(filteredProducts);
  //   };
    
  //   fetchProducts();
  // }, [selectedFilters]);




  const handleFilterChange =(filterType:string, value:string) => {
   
    setSelectedFilters({ ...selectedFilters, [filterType]: value });
  };

   const category:Prop[] =await client.fetch(getTypes,{item});
   
  
  return (
    <Box display={"flex"} alignItems={"center"} h={"3rem"}>
      <Select 
      placeholder={item.name}
      focusBorderColor='brand.primaryDark'
      _placeholder={ {opacity: 0.4,color: 'inherit'}}
      bg="brand.primaryMedium"
      color="brand.primaryDark"
      onChange={(e)=>{handleFilterChange(item.name,e.target.value)}}
     >
        {category.map((element,index)=>(
        <option value={element.id} key={index}>
          <Box>{element.name}</Box></option>
        ))}
    </Select>
    </Box>
  )
}
export default FilterItem

