import React,{useContext} from 'react'
import { Product } from '@/model';
import { AppContext } from '@/context/AppContext';
import { Button, IconButton } from '@chakra-ui/react';
import { BsFillSuitHeartFill, BsHeart, BsHeartFill } from 'react-icons/bs';

interface AddToWishlistProps{
    product:Product,
   
  }

const AddToWishlist = ({product}:AddToWishlistProps) => {
    const {state,addItem,removeItem,isAdded}=useContext(AppContext);
  return (
    <>
      {
      isAdded('wishlist',product.id)?(
        <IconButton ml={"15rem"} 
        icon={< BsHeartFill />} 
        bg={"brand.primary"} 
        textColor={"brand.dark"}
        aria-label={"wishlist"} 
        _hover={{backgroundColor:"white"}}
        onClick={()=>removeItem('wishlist',product.id)}
        >
      
        </IconButton>
      ):(  <IconButton ml={"15rem"} 
      icon={< BsHeart />} 
      bg={"brand.primary"} 
      textColor={"brand.dark"}
      aria-label={"wishlist"} 
      _hover={{backgroundColor:"white"}}
      onClick={()=>addItem('wishlist',product)}
      >
    
      </IconButton>
        
      )
    }
    </>
  )
}

export default AddToWishlist
