import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import Details from '@/features/details/ProductDetails'
import React from 'react'

import { groq } from 'next-sanity'
import { Category } from '@/model'
import { client } from '../../../../sanity/lib/client'
import Product from '@/app/products/Product'
import { defaultBreadCrumbItems } from '@/helpers'
import CustomBreadcrumb from '@/features/CustomBreadcrumb'

const query:string=groq`*[_type=='material' && slug.current ==$slug]{
  ...,
  "id":_id,
  "slug":slug.current,
   products[]->{
    name,
    "id":_id,
    "mainimage":mainimage.asset->url,
     "slug":slug.current,
     'wt':weight
   }
}`;
type Props={
    params:{
      slug:string
    };
  };
  
  const CategoryPage = async ({params:{slug}}:Props) => {
    const categoryProducts:Category[]= await client.fetch(query,{slug});
    
    
    return (
      <>
     <Navbar />
     <CustomBreadcrumb 
      items={[
        ...defaultBreadCrumbItems,
        {
          name:'materials',
          link:"/",
        },
        {
          name:categoryProducts[0]?categoryProducts[0].name:"",
          link:"/categories",
        }
       
  
      ] } />
  {categoryProducts[0]?(<>{categoryProducts[0].products? (<Product products={categoryProducts[0].products} title={categoryProducts[0].name}/>) : (<>No product available currently in this category</>)}
      </>):<>No such category available</>}
     <Footer />
     </>
    )
  }
  
  export default CategoryPage