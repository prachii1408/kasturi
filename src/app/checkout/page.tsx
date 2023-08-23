"use client"

import React from 'react'
import { NextPage } from 'next'
import CheckOut from '@/features/Checkout'
import Footer from '@/features/Contacts/Footer'
import Navbar from '@/components/Navbar/Navbar'

const CheckOutPage:NextPage = () => {
  return (
    <>
    <Navbar />
      <CheckOut />
      <Footer />
    </>
  )
}

export default CheckOutPage

