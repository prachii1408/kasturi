import { AppContext } from '@/context/AppContext';
import { getSubstring } from '@/helpers';
import { IItem } from '@/model';
import { Grid, GridItem, Button,Image,Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BsCartX, BsCart, BsTrash } from 'react-icons/bs';

interface WishlistItemProps {
    item: IItem;
  }

const WishlistItem = ({item}:WishlistItemProps) => {
    const { addItem, removeItem, isAdded } = useContext(AppContext);
  return (
    <Grid
      alignItems="center"
      templateColumns="repeat(7, 1fr)"
      borderBottomWidth="1px"
      borderBottomColor="brand.primaryMedium"
      my="2"
      py="1"
    >
      <GridItem>
        <Link href={item.slug}>
          <Image
            src={item.mainImg}
            boxSize="20px"
            rounded="full"
            borderWidth="1px"
            borderColor="gray.300"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={4}>
        <Link href={item.slug}>
          <Text fontSize="sm" title={item.name} textColor={"brand.primaryDark"} fontFamily={"Playfair Display"}> 
            {getSubstring(item.name, 17)}
          </Text>
        </Link>
      </GridItem>


      <GridItem textAlign="right">
        {isAdded('cart', item.id) ? (
          <Button
            size="xs"
            variant="ghost"
            bgColor="white"
            
            
            color="gray.500"
            title="Remove from Cart"
            onClick={() => removeItem('cart', item.id)}
            _hover={{backgroundColor:"brand.primaryMedium"}}
          
          >
            <BsCartX color='#562204' />
          </Button>
        ) : (
          <Button
            size="xs"
           variant={"ghost"}
            bgColor="white"
          
          
            color="brand.primary"
            title="Add to Cart"
            onClick={() => addItem('cart', item)}
            _hover={{backgroundColor:"brand.primaryMedium"}}
           
          >
            <BsCart color='#562204' />
          </Button>
        )}
      </GridItem>

      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          size="xs"
          onClick={() => removeItem('wishlist', item.id)}
          _hover={{backgroundColor:"brand.primaryMedium"}}
          borderColor={"brand.primaryDark"}
        >
          <BsTrash color='#562204' />
        </Button>
      </GridItem>
    </Grid>
  )
}

export default WishlistItem
