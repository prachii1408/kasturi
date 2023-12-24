'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Swiper from 'swiper';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { AppContextProvider } from '@/context/AppContext';






export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Kasturi Jewellers</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Playfair+Display&display=swap" rel="stylesheet"></link>
      
      <meta title='description'  name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <style>{`
          html,body{
            width:100%;
            height:100%;
            padding: 0px;
            margin:0px;
            overflow-x:hidden;
          }
        `}</style>
      
      </head>
     
      <body >
      <CacheProvider>
      <ChakraProvider theme={theme}>
      <AppContextProvider>
      {children}
      </AppContextProvider>
       
      </ChakraProvider>
      </CacheProvider>
      </body>
    </html>
  )
}
