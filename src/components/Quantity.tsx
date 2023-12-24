import { Button, HStack, Input, VStack, useNumberInput,Text } from '@chakra-ui/react'
import React from 'react'

interface QuantityProps{
    step?:number,
    defaultValue?:number,
    min?:number,
    max?:number,
    precision?:number
}
const Quantity = ({
    step=1,
    defaultValue=1,
    min=1,
    max=20,
    precision=1

}:QuantityProps) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
      precision
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <VStack>
      <Text fontFamily={"Baskervville"} textColor={"brand.primaryDark"} fontSize={{base:"1rem",md:"1.1rem",lg:"1.2rem"}} >Quantity</Text>
       <HStack maxW='320px'>
      <Button {...inc} bgColor={"brand.primaryMedium"} textColor={"brand.primaryDark"}>+</Button>
      <Input {...input} textColor={"brand.primaryDark"} bgColor={"brand.primary"} w={{base:"4rem",lg:"4rem"}}/>
      <Button {...dec} bgColor={"brand.primaryMedium"} textColor={"brand.primaryDark"}>-</Button>
    </HStack>
    </VStack>
   
  )

}

export default Quantity

