'use client'
import { AppContext } from '@/context/AppContext';
import { Popover, PopoverTrigger, Button, Flex, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter,Text, Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { BsHeart } from 'react-icons/bs';
import WishlistItem from './WishlistItem';

const Wishlist = () => {
  const { state, resetItem } = useContext(AppContext);
  const { wishlist } = state;
   
  return (
    <Popover>
    <PopoverTrigger>
      <Button
        color="brand.primary"
        variant="ghost"
        _hover={{
          bgColor: 'transparent',
        }}
        pos="relative"
      >
        <BsHeart size="0.9rem" color='#562204' /> 
        {wishlist.length !== 0 && (
          <Flex
            pos="absolute"
            top="0px"
            right="5px"
            bgColor="brand.primary"
            boxSize="15px"
            rounded="full"
            color="brand.primaryDark"
            fontSize="0.6rem"
            align="center"
            justify="center"
          >
            {wishlist.length}
          </Flex>
        )}
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton color={"brand.primaryDark"}/>
      <PopoverHeader color="brand.primaryDark" fontWeight="bold" fontFamily={"Baskervvile"} >
        Wishlist
      </PopoverHeader>
      <PopoverBody p="1rem" color="brand.primaryDark" fontFamily={"Baskervvile"}>
       
        {wishlist.length === 0 ? (
         <>Your Wishlist is Empty</> 
        ) : (
          wishlist.map((item) => <WishlistItem key={item.id} item={item} />)
        )}
        
        
      </PopoverBody>
      <PopoverFooter>
        {wishlist.length !== 0 && (
          <Button
            variant="outline"
            mr={3}
            onClick={() => resetItem('wishlist')}
            textColor={"brand.primaryDark"}
            fontFamily={"Playfair Display"}
            borderColor={"brand.primaryDark"}
            _hover={{backgroundColor:"brand.primaryMedium"}}
            size="sm"
          >
            Clear Wishlist
          </Button>
        )}
      </PopoverFooter>
    </PopoverContent>
  </Popover>
  )
}

export default Wishlist
