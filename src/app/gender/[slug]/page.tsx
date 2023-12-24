import Product from '@/app/products/Product'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import React from 'react'

import CustomBreadcrumb from '@/features/CustomBreadcrumb'
import { defaultBreadCrumbItems, getSubstring } from '@/helpers'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import { Category } from '@/model'
import { Box } from '@chakra-ui/react'

const categoryquery=groq`*[_type=='gender' && slug.current ==$slug]{
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
     gender->{
        name
     }
   }
}`;



type Props={
  params:{
    slug:string
  };
};

const GenderPage = async ({params:{slug}}:Props) => {
  const genderProducts:Category[]= await client.fetch(categoryquery,{slug});
  
  
  return (
    <>
   <Navbar />
   <CustomBreadcrumb 
    items={[
      ...defaultBreadCrumbItems,
      {
        name:'gender',
        link:"/",
      },
      {
        name:genderProducts[0]?genderProducts[0].name:"",
        link:"/categories",
      }
     

    ] } />
    
{
    genderProducts[0]?(<>{genderProducts[0].products? (<Product products={genderProducts[0].products} title={genderProducts[0].name}/>) : (<>No product available currently in this category</>)}
    </>):<>No such category available</>
}
    
   
   <Footer />
   </>
  )
}

export default GenderPage