'use client'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import React from 'react'
import Product from './Product'
import { products } from '../../../mocks/products'

const page = () => {
  return (
   <>
   <Navbar />
   <Product products={products} />
   <Footer />
   </>
  )
}

export default page
