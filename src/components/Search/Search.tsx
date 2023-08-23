import { Box, Input, InputGroup, InputLeftElement, background } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon} from "@chakra-ui/icons"
import { searchInputStyles } from './searchStyle'

const search = () => {
  return (
    <Box>
      <InputGroup size="sm" w={{base:"100%",lg:"10rem"}}>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='brand.primaryDark' />
    </InputLeftElement>
    <Input {...searchInputStyles}/>
  </InputGroup>

    </Box>
  )
}

export default search
