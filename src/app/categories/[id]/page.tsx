

import Product from '@/app/products/Product'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import React from 'react'

import CustomBreadcrumb from '@/features/CustomBreadcrumb'
import { defaultBreadCrumbItems, getSubstring } from '@/helpers'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import { Category } from '@/model'
import Filter from '@/components/Filters/Filter'

const categoryquery=groq`*[_type=='category' && slug.current ==$id]{
  ...,
  "id":_id,
  "slug":slug.current,
   "image":image.asset->url,
   products[]->{
     "id":_id,
     name,
     "mainimage":mainimage.asset->url,
     "slug":slug.current,
     "wt":weight,
     category->{
      name
     }
   }
}`;



type Props={
  params:{
    id:string
  };
};

const CategoryPage = async ({params:{id}}:Props) => {
  const categoryProducts:Category[]= await client.fetch(categoryquery,{id});
  
  
  return (
    <>
   <Navbar />
   <CustomBreadcrumb 
    items={[
      ...defaultBreadCrumbItems,
      {
        name:'categories',
        link:"/"
      },
      {
        name:categoryProducts[0]?categoryProducts[0].name:"",
        link:`/categories/${categoryProducts[0]?categoryProducts[0].name:""}`,
      }
     

    ] } />
{categoryProducts[0]?(<>{categoryProducts[0].products? (<Product products={categoryProducts[0].products} title={categoryProducts[0].name}/>) : (<>No product available currently in this category</>)}
    </>):<>No such category available</>}
   <Footer />
   </>
  )
}

export default CategoryPage
