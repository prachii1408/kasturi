

import Navbar from "@/components/Navbar/Navbar";
import JewelryCare from "@/features/CareGuide/JewelryCare";
import Footer from "@/features/Contacts/Footer";
import ShopGender from "@/features/Gender/ShopGender";
import DesktopBanner from "@/features/Home/DesktopBanner";
import MobileBanner from "@/features/Home/MobileBanner";
import Categories from "@/features/TopCategories/Categories";
import TopSellers from "@/features/TopSellers/TopSellers";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { featuredItems } from "@/model";


const getFeaturedProducts=groq`*[_type=='featuredProducts']{
  "bestSellers":bestSellers[]->{
    "id":_id,
    name,
    "mainimage":mainimage.asset->url,
    category->{
      name,
      "id":_id,
      "image":image.asset->url,
  
     }
     ,
     "slug":slug.current
  
  },
  "gifting":gifting[]->{
    "id":_id,
    name,
    "mainimage":mainimage.asset->url,
    category->{
      name,
      "id":_id,
      "image":image.asset->url,
      "slug":slug.current
  
     },
     "slug":slug.current
    
  },
  
}`
const getAllFeaturedProducts=()=>{
 
  return client.fetch(getFeaturedProducts)
}

export const revalidate=60;

export default async function Home() {
 const featuredProducts:featuredItems[]= await getAllFeaturedProducts();
  
  return (
    <><Navbar />
     <DesktopBanner />
      <MobileBanner />
    <Categories/>
    <TopSellers title="Top Sellers" content="Discover what's in vogue and in demand with our best sellers, handpicked to keep you ahead of the fashion curve" products={featuredProducts[0].bestSellers}/>
    <ShopGender />
    <TopSellers title="Gifting Range" content="Our jewellery gifting range boasts a stunning selection of handcrafted pieces, designed
                      to make your loved one feel truly special and cherished." products={featuredProducts[0].gifting} />
    <JewelryCare />
    <Footer />
      </>
  )
}
