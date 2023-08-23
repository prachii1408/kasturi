'use client'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import Details from '@/features/details/ProductDetails'
import React from 'react'
import { products } from '../../../../mocks/products'


const productDetails = () => {
  return (
    <>
    <Navbar />
   <Details product={products[0]} />
    <Footer />
    </>
  )
}

export default productDetails
