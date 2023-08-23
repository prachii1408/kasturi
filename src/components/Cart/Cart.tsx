import { AppContext } from '@/context/AppContext'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Link, useDisclosure,Text } from '@chakra-ui/react';
import React, { useContext, useRef } from 'react'
import { BsCart4, BsCartCheckFill } from 'react-icons/bs';
import CartItem from './CartItem';
import { calculateItemsTotal } from '@/helpers';

const Cart = () => {
    const {
       state:{cart},
       resetItem,
       addItem
    }=useContext(AppContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const handleCheckout = () => {
    resetItem('checkout');
    cart.forEach((cartItem) => {
      addItem('checkout', cartItem, cartItem.count);
      
    });

    onClose();
  };
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="brand.primary"
        _hover={{
          bgColor: 'transparent',
        }}
        // pos="relative"
      >
        <BsCart4  color="#562204"/> 
        {cart.length !== 0 && (
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
           {cart.length}
          </Flex>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.primaryDark" fontFamily={"Baskervvile"}>
            Cart ( {cart.length} Items )
          </DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text textColor={"brand.primaryDark"} fontFamily={"Baskervvile"} fontSize={"1.5rem"}>Your Cart is Empty</Text>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </DrawerBody>
          {cart.length !== 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={() => resetItem('cart')}
                  textColor={"brand.primaryDark"}
                  fontFamily={"Playfair Display"}
                  borderColor={"brand.primaryDark"}
                  _hover={{backgroundColor:"brand.primaryMedium"}}
                >
                  Clear Cart
                </Button>
                <Link href="/checkout">
                  <Button
                  variant={"outline"}
                    bgColor="brand.primaryMedium"
                    color="brand.primaryDark"
                    
                    _hover={{
                      bgColor: 'brand.primary',
                    }}
                    _active={{
                      bgColor: 'brand.primaryMedium',
                    }}
                    fontFamily={"Playfair Display"}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold" textColor={"brand.primaryDark"} fontFamily={"Bakervvile"}>Total Items: {calculateItemsTotal(cart)}</Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
