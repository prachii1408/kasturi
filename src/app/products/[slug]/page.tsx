

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import Details from '@/features/details/ProductDetails'
import React from 'react'

import { groq } from 'next-sanity'
import { Product } from '@/model'
import { client } from '../../../../sanity/lib/client'

const query:string=groq`*[_type=='product' && slug.current ==$slug][0]{
  ...,
  "id":_id,
  "slug":slug.current,
   "mainimage":mainimage.asset->url,
   'wt':weight,
   category->{
    name,
    "id":_id,
    "image":image.asset->url,
     "slug":slug.current
   }
}`;
type Props={
  params:{
    slug:string
  };
};

const productDetails =async ({params:{slug}}:Props) => {
  const product:Product=await client.fetch(query,{slug});

  
  return (
    <>
    <Navbar />
   <Details product={product} />
    <Footer />
    </>
  )
}

export default productDetails
