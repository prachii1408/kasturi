import { AppContext } from '@/context/AppContext'
import { Button } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { products } from '../../mocks/products';
import { Product } from '@/model';

interface AddToCartProps{
  product:Product,
  count?:number,
}

const AddToCart = ({product,count}:AddToCartProps) => {
  const {state,addItem,removeItem,isAdded}=useContext(AppContext);

  return (
    <>
    {
      isAdded('cart',product.id)?(
        <Button 
        variant="outline" 
        backgroundColor={"white"} 
        borderColor={"brand.primary"} 
        rounded="full" 
        size="sm" w="150px" 
        fontFamily={"Playfair Display"} 
        textColor={"brand.primaryDark"} 
        mx={"auto"} onClick={()=>removeItem('cart',product.id)}>
        Remove from Cart
      </Button>
      ):(
        <Button 
        variant="outline" 
        backgroundColor={"brand.primaryMedium"} 
        borderColor={"brand.primary"} 
        rounded="full" 
        size="sm" w="150px" 
        fontFamily={"Playfair Display"} 
        textColor={"brand.primaryDark"} 
        mx={"auto"} onClick={()=>addItem('cart',product,count)}>
        Add to Cart
      </Button>
      )
    }
    
    </>
  )
}

export default AddToCart
