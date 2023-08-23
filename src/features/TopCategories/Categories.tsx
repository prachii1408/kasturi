'ude client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import DesktopCategories from './DesktopCategories'
import { categories } from '../../../mocks/categories'

const Categories = () => {
  return (
    <DesktopCategories  categories={categories}/>
  )
}

export default Categories
