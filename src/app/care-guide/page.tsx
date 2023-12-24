'use client'


import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/features/Contacts/Footer'
import React from 'react'
import { Box,Text,Divider,VStack, HStack,Image } from '@chakra-ui/react'

const Careguide = () => {
  return (
    <>
      <Navbar />
      <Box  m={"1rem"} bgColor={"brand.primary"} p={"1rem"}>
   <Text fontFamily={"Baskervville"} textColor={"brand.primaryDark"} fontSize={{base:"1.5rem",md:"1.7rem",lg:"2rem"}} textAlign={"center"}>Jewellery Care Guide</Text>
   <Text marginLeft={{lg:"5rem"}} 
   marginRight={{lg:"5rem"}} 
   marginTop={"1rem"}
   textColor={"brand.primaryDark"}
   fontSize={{base:"1rem",md:"1rem",lg:"1.1rem"}}
   textAlign={"center"}>
   A jewellery care guide is essential for maintaining the beauty, value, and longevity of your precious jewellery pieces. Proper care and maintenance are crucial because jewellery often holds sentimental and financial value.
   We are dedicated to ensuring the longevity and radiance of your jewellery, and as such, we have carefully crafted a set of guidelines to help you maintain the brilliance of your precious pieces.
   </Text>
   <Divider my="1rem"  borderBottomColor={"brand.primaryDark"}/>
    <Text fontFamily={"Baskervville"} 
    textColor={"brand.primaryDark"} 
    fontSize={{base:"1.2rem",md:"1.5rem",lg:"1.6rem"}}
    textAlign={"center"} >Gold</Text>
    <Box  p={'1rem'}>
    <Text mx={"0.5rem"}textColor={"brand.primaryDark"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.4rem"}} marginBottom={"1rem"}><b>Cleaning Gold Jewellery</b></Text>
    <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Gentle Cleaning:</b> To clean your gold jewellery, mix a few drops of mild dish soap with warm water. Soak your gold pieces for about 15 minutes to loosen dirt and oil.</Text>
     <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Brush Gently:</b> Use a soft-bristle toothbrush or a jewellery brush to gently scrub the jewellery, paying extra attention to intricate details and crevices.</Text>
     <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Rinse carefully:</b>Rinse the jewellery under lukewarm running water to remove soap residue. Be sure to close the drain or use a strainer to prevent accidental loss.</Text>
     <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Pat Dry:</b>Gently pat the jewellery dry with a clean, soft, and lint-free cloth. Avoid using paper towels, as they can scratch the metal.</Text>

    </Box>
   <Box  p={'1rem'}>
   <Text mx={"0.5rem"}textColor={"brand.primaryDark"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.4rem"}} marginBottom={"1rem"}><b>Storing Gold Jewellery</b></Text>
    <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Separate Storage:</b> Store gold pieces individually or in soft pouches to prevent scratches and tangling. If possible, separate them from other jewellery to minimize friction.</Text>
     <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Tarnish Prevention:</b>Consider using tarnish-resistant materials or anti-tarnish strips in your jewellery storage area.</Text>
   </Box>

   <Box  p={'1rem'} >
   <Text mx={"0.5rem"}textColor={"brand.primaryDark"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.4rem"}} marginBottom={"1rem"}><b>Avoiding Damage</b></Text>
    <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Chemicals:</b>Remove your gold jewellery before using household cleaning products, as exposure to chemicals can dull its shine over time.</Text>
     <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'}><b>Water Exposure:</b> Avoid prolonged exposure to water, especially hot water, as it can weaken soldered joints and damage certain gemstones. Remove gold jewelelry before swimming or showering.</Text>
   <Text  textColor={"brand.primaryDark"} 
    fontSize={{base:"0.8rem",md:"1rem",lg:"1.1rem"}} mx="1rem" my={'0.5rem'} ><b>Impact and Scratches:</b>Gold is a relatively soft metal. To prevent scratches and dents, store your jewellery carefully and avoid activities that may subject it to physical impact.</Text>
   </Box>

   </Box>
      <Footer/>
    </>
  )
}

export default Careguide
