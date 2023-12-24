"use client"

import { CustomBreadCrumbItem } from '@/model'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink,Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
interface customBreadCrumbProps{
    items?:CustomBreadCrumbItem[]
}

const CustomBreadcrumb = ({items=[]}:customBreadCrumbProps) => {
  return (
    <>
    {
        items.length>0 &&(
           <Breadcrumb bg={"brand.dark"} p={"1rem"} textColor={"white"} spacing="8px" separator={<ChevronRightIcon color="white"/>}>
           {
            items.map((item,index)=> index!=items.length-1? (<BreadcrumbItem key={index}>
              <Link href={item.link}>{item.name}</Link>
            </BreadcrumbItem>):(
             <BreadcrumbItem key={index}>
              <Text textColor={"brand.primaryMedium"}>{item.name}</Text>
             </BreadcrumbItem>
            ))
           }
          </Breadcrumb>
        )
    }
    </>
  )
}

export default CustomBreadcrumb
