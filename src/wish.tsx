'use client'
import React,{useContext} from 'react'
import { Product } from '@/model';
import { AppContext } from '@/context/AppContext';
import { Button, IconButton } from '@chakra-ui/react';
import { BsFillSuitHeartFill, BsHeart, BsHeartFill } from 'react-icons/bs';

interface AddToWishlistProps{
    product:Product,
   
  }

const Wish = ({product}:AddToWishlistProps) => {
    const {state,addItem,removeItem,isAdded}=useContext(AppContext);
  return (
    <>
      {
      isAdded('wishlist',product.id)?(
        <IconButton 
        icon={< BsHeartFill />} 
        bg={"brand.dark"} 
        textColor={"brand.primary"}
        aria-label={"wishlist"} 
        _hover={{backgroundColor:"brand.dark"}}
        onClick={()=>removeItem('wishlist',product.id)}
        >
      
        </IconButton>
      ):(  <IconButton 
      icon={< BsHeart />} 
      bg={"brand.dark"} 
      textColor={"brand.primary"}
      aria-label={"wishlist"} 
      _hover={{backgroundColor:"brand.dark"}}
      onClick={()=>addItem('wishlist',product)}
      >
    
      </IconButton>
        
      )
    }
    </>
  )
}

export default Wish