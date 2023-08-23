'use client'

import Product from '@/app/products/Product'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import React from 'react'
import { products } from '../../../../mocks/products'
import CustomBreadcrumb from '@/features/CustomBreadcrumb'
import { defaultBreadCrumbItems, getSubstring } from '@/helpers'

const CategoryPage = () => {
  return (
    <>
   <Navbar />
   <CustomBreadcrumb 
    items={[
      ...defaultBreadCrumbItems,
      {
        name:products[0].category!.name,
        link:"#",
      }
     

    ]}   >

    </CustomBreadcrumb>
   <Product products={products} />
   <Footer />
   </>
  )
}

export default CategoryPage
