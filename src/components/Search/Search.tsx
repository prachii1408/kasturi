
import { Box, Flex, Input, InputGroup, InputLeftElement, background,useOutsideClick ,Image,Text,Tag} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import {SearchIcon} from "@chakra-ui/icons"
import { dropdownStyle, searchInputStyles, wrappercontainerStyle } from './searchStyle'
import { groq } from 'next-sanity';
import { Product } from '@/model';
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';

const query: string = groq`
    *[_type == "product" && (name match $searchText || description match $searchText) ] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainimage": mainimage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

const Search = () => {
  const ref=useRef <any>(); 
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [searchText,setSearchText]=useState('');
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  useOutsideClick({
    ref,
    handler: ()=>{
      setIsModalOpen(false);
      setItems([]);
      setSearchText("");
    },
  });

  

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        const fetchProducts = async () => {
          setIsLoading(true);
          const products: Product[] = await client.fetch(query, {
            searchText: `*${searchText}*`,
          });
          setItems(products);
          setIsLoading(false);
        };
        fetchProducts();
      }
    }, 1000);
    

    return () => clearTimeout(timeout);
  }, [searchText]);


  return (
    <Box {...wrappercontainerStyle} ref={ref}>
      <InputGroup size="sm" w={{base:"100%",lg:"12rem"}}>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='brand.primaryDark' />
    </InputLeftElement>
    <Input 
    value={searchText}
    onChange={(e)=>setSearchText(e.target.value)}
    onClick={()=>setIsModalOpen(true)}
    {...searchInputStyles}/>
  </InputGroup>
  {
    isModalOpen && (<Box {...dropdownStyle}>
    {items.length === 0 ?(
            isLoading ? (
              <>Loading...</>
            ) : (
              <> No Products Found</>
            )
          ) : (
            <SearchedProductList products={items} />
          )}
   </Box>)
  }
     
    </Box>
  )
}

interface SearchedProductListProps {
  products: Product[];
}

const SearchedProductList = ({ products }: SearchedProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Box
            borderBottomWidth="1px"
            borderBottomColor="brand.primaryMedium"
            p="2"
            _hover={{ bgColor: 'gray.100' }}
          >
            <Flex align="center">
              <Image
                alt={product.name}
                src={product.mainimage}
                boxSize="30px"
                w="30px"
                mr="10px"
              />
              <Tag size="sm" color={"brand.primaryDark"} bg={"brand.primaryMedium"}>{product.category && product.category.name}</Tag>
              {/* <Text>{product.name}</Text> */}
            </Flex>
            <Flex justify="flex-end">

            </Flex>
          </Box>
        </Link>
      ))}
    </>
  );
};

export default Search
