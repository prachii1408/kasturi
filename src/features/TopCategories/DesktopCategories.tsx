import { Box, Flex,Image ,Heading, Grid, GridItem, Card, Stack,Text, background} from '@chakra-ui/react'
import React from 'react'
import { desktopCat, headStyles, topTextStyles } from './CategoryStyle'
import { Category } from '@/model'

interface topCategoryProps{
   categories:Category[]
}

const DesktopCategories = ({categories}:topCategoryProps) => {
  return (
    <Box {...desktopCat}>
        <Flex display="flex" justifyContent={"center"}>
            <Stack  direction="row" alignItems="center">
            <Image src="redDiamond.png" w={{base:"1.5rem",md:"2rem",lg:"3rem"}}></Image>
            <Heading   {...headStyles} fontSize={{base:"1.5rem",md:"2.5rem",lg:"2.7rem"}} ml={{base:"0.5rem",md:"0.7rem",lg:"1rem"}} mr={{base:"0.5rem",md:"0.7rem",lg:"1rem"}} mb={"1rem"}>
              JEWELRY BY CATEGORY
         </Heading>
        <Image src="redDiamond.png"  w={{base:"1.5rem",md:"2rem",lg:"3rem"}}></Image>
            </Stack>
     </Flex>
     <Text {...topTextStyles} fontSize={{base:"1rem",md:"1.4rem",lg:"2rem"}} w={"70vw"} mx={"auto"}> Explore our dazzling world of adornment, where every piece of shining star in its own right</Text>
        
       
        <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} border={'none'} boxShadow={'none'}>
         {categories.map((category)=>(
           <GridItem key={category.id}>
           <TopCategroryCard category={category}/>
        </GridItem>
         ))}
            
        </Grid>
      
    </Box>
  )
}
interface categoryCardProps{
   category:Category
}

export default DesktopCategories

const TopCategroryCard=({category}:categoryCardProps)=>{
   return(
    <Card direction="row" align="center" w="100%" h="100%" background={"brand.primary"} display={"flex"} justifyContent={"center"} alignItems={"center"} border={'none'} boxShadow={'none'}>
      <Stack>
      <Image src={category.image} w="12rem" h="12rem"  alt={category.slug}></Image>
        <Text fontFamily={"Baskervville"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.5rem"}} textColor={"brand.primaryDark"} mb={{base:"1rem",md:"1.4rem",lg:"2rem"}}>{category.name}</Text>
      </Stack>
       
    </Card>
   )
}