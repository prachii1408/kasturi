import React from 'react'
import { Image} from "@chakra-ui/react"
import Link from "next/link"

const AppLogo = () => {
  return (
    <Link href="/">
     <Image src="/logo.svg" width={"3.5rem"} alt="logo">
    </Image></Link>
   
  )
}

export default AppLogo
