import { Box, IconButton } from '@chakra-ui/react'
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"
import {useSwiper} from "swiper/react"

import React from 'react'

const SwiperNavButtons = () => {
    const swiper=useSwiper();
  return (
    <Box m="1.5rem">
      <IconButton rounded="lg"
       icon={<FaChevronLeft />} 
       borderColor="brand.primary"
       aria-label={'Prev'}
       borderWidth={"1px"}
       color="brand.primaryDark"
       bgColor={"brand.primary"}
       onClick={()=>{
        swiper.slidePrev()
       }}
       mx="1">  
      </IconButton>

      <IconButton rounded="lg"
       icon={<FaChevronRight />} 
       borderColor="brand.primary"
       aria-label={'Next'}
       borderWidth={"1px"}
       color="brand.primaryDark"
       bgColor={"brand.primary"}
       onClick={()=>{
        swiper.slideNext()
       }}
       mx="1">  
      </IconButton>
    </Box>
  )
}

export default SwiperNavButtons
