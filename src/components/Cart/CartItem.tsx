import { AppContext } from '@/context/AppContext';
import { IItem } from '@/model';
import { Grid, GridItem, HStack, Button,Image,Text,Input } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BsTrash } from 'react-icons/bs';
interface CartItemProps {
    item: IItem;
  }

const CartItem = ({item}:CartItemProps) => {
    const { increaseCount, decreaseCount, removeItem } = useContext(AppContext);
  return (
    <Grid
    alignItems="center"
    templateColumns={{ base: 'repeat(6, 1fr)', lg: 'repeat(7, 1fr)' }}
    borderBottomWidth="1px"
    borderBottomColor={"brand.primaryMedium"}
    my="2"
  >
    <GridItem>
      <Link href={`/products/${item.slug}`}>
        <Image
          src={item.mainImg}
          boxSize="40px"
          rounded="full"
          borderWidth="1px"
          borderColor="gray.300"
        />
      </Link>
    </GridItem>
    <GridItem colSpan={{ base: 5, lg: 3 }}>
      <Link href={`/products/${item.slug}`}>
        <Text textColor={"brand.primaryDark"} fontFamily={"Playfair Display"} textDecoration={'none'}>{item.name}</Text>
      </Link>
    </GridItem>
    <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent="flex-end">
      <HStack my="0.5rem" justifyContent="flex-end">
        <Button onClick={() => decreaseCount('cart', item.id)} bg={"brand.primaryMedium"} _hover={{backgroundColor:"brand.primary"}} textColor={"brand.primaryDark"}>-</Button>
        <Input
          type="number"
          value={item.count}
          readOnly={true}
          minW="52px"
          maxW="55px"
          min="1"
          max="20"
          borderColor={"brand.primaryDark"}
          textColor={"brand.primaryDark"}
        />
        <Button onClick={() => increaseCount('cart', item.id)} bg={"brand.primaryMedium"} _hover={{backgroundColor:"brand.primary"}}>+</Button>
      </HStack>
    </GridItem>
  
    <GridItem textAlign="right">
      <Button
        variant="ghost"
        colorScheme="#562204"
        onClick={() => removeItem('cart', item.id)}
      >
        <BsTrash color='#562204'/>
      </Button>
    </GridItem>
  </Grid>
  )
}

export default CartItem
