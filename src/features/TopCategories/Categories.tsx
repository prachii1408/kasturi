// 'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import DesktopCategories from './DesktopCategories'

import { groq } from 'next-sanity'
import { client } from '../../../sanity/lib/client'
import { Category } from '@/model'

const getCategories=groq`*[_type=='category']{
  "id":_id,
  name,
    "slug":slug.current,
    "image":image.asset->url,
    products
}
`
const getAllCategories=()=>{
  return client.fetch(getCategories)
}
const revalidate=60
export default async function Categories () {
  const category:Category[] =await getAllCategories();
  return (
    <DesktopCategories  categories={category}/>
  )
}


