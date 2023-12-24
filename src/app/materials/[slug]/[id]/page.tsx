import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import Details from '@/features/details/ProductDetails'
import React from 'react'
import { materailList,categoryList } from '../../../../../ids';

import { groq } from 'next-sanity'


import Product from '@/app/products/Product'
import { client } from '../../../../../sanity/lib/client';



const query:string=groq`*[_type=='product' && material._ref ==$materialid && category._ref==$categoryid ]{
    name,
     "id":_id,
    "mainimage":mainimage.asset->url,
    "slug":slug.current,
     "wt":weight
}`;
type Props={
    params:{
      slug:string,
      id:string
    };
  };
  
  
  const MaterialPage = async ({params:{slug,id}}:Props) => {
  var materialid,categoryid;
  var categoryProducts:Product[]=[];
  
  
   materailList.forEach((item)=>{
         if(item.name===slug){
           materialid=item.id;
         }
     })
     
     categoryList.forEach((item)=>{
      if(item.name===id){
        categoryid=item.id;
      }
     })
     
     if(materialid!=null && categoryid!=null){
      categoryProducts= await client.fetch(query,{materialid,categoryid});
     }
    return (
      <>
     <Navbar />
     {/* <CustomBreadcrumb 
      items={[
        ...defaultBreadCrumbItems,
        {
          name:categoryProducts[0]?categoryProducts[0].name:"",
          link:"/categories",
        }
       
  
      ] } /> */}
      {materialid? categoryProducts?(<>{categoryProducts? (<Product products={categoryProducts} title={""}/>) : (<>No product available currently in this category</>)}
      </>):<>No such category available</>:<>No such material available</>}
      
 
     <Footer />
     </>
    )
  }
  
  export default MaterialPage