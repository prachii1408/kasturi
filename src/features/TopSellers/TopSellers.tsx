'use client'

import { Box, Flex, Heading, Stack,Image ,Text, Button, ButtonGroup, Card, CardBody, CardFooter, Divider} from '@chakra-ui/react'
import React, { CSSProperties,useEffect,useRef } from 'react'
import { headingStyles, topSell, topSellerStyles } from './sellerStyle'
import ProductCard from '@/ProductCard'
import SwiperCore from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperOptions  from 'swiper'
import {Navigation,Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperNavButtons from '@/components/SwiperNavButtons'
import { Product } from '@/model'

interface topSellerProps{
  title:string,
  content:string,
  products:Product[],
}
SwiperCore.use([Autoplay]);

const TopSellers = ({title,content,products}:topSellerProps) => {
    const slideStyles:CSSProperties={
        boxSizing:'border-box',
        maxWidth:'350px',
    }

    // const sliderSettings:SwiperOptions={
    //     modules:[Navigation,Autoplay],
    //     spaceBetween:10,
    //     slidesPerView:'auto',
    //     speed:1000,
    //     autoplay:{
    //         delay:4000,
    //         disableOnInteraction:false,
    //         pauseOnMouseEnter:true
    //     }
    // }
  return (
    <Box {...topSell}>
      <Flex display="flex" justifyContent={"center"} textAlign={"center"}>
            <Stack  direction="row" alignItems="center">
            <Image src="whiteDiamond.png" w={{base:"1.5rem",md:"2rem",lg:"3rem"}} alt="diamond" ></Image>
            <Heading   {...headingStyles} fontSize={{base:"1.5rem",md:"2.5rem",lg:"2.7rem"}} ml={{base:"0.5rem",md:"0.7rem",lg:"1rem"}} mr={{base:"0.5rem",md:"0.7rem",lg:"1rem"}} mb="1rem">
              {title}
         </Heading>
        <Image src="whiteDiamond.png"  w={{base:"1.5rem",md:"2rem",lg:"3rem"}} alt="diamond"></Image>
            </Stack>
     </Flex>
     <Text {...topSellerStyles} fontSize={{base:"1rem",md:"1.4rem",lg:"2rem"}} w={"70vw"} mx={"auto"}> {content}</Text>
<div>
<Swiper 
 modules={[Navigation,Autoplay]}
 spaceBetween={10}
 slidesPerView={'auto'}
 speed={1000}
 autoplay={{
     delay:4000,
     disableOnInteraction:false,
     pauseOnMouseEnter:true
 }}

 style={{width:"100%",height:"100%"}}
  >
<SwiperNavButtons />
  {products.map((product,index)=>(
     <SwiperSlide key={index} style={slideStyles}>
     <ProductCard product={product} />
     </SwiperSlide >
  ))}
   
     </Swiper>
</div>  
    </Box>
    
  )
}

export default TopSellers
