'use client';

import Navbar from "@/components/Navbar/Navbar";
import JewelryCare from "@/features/CareGuide/JewelryCare";
import Footer from "@/features/Contacts/Footer";
import ShopGender from "@/features/Gender/ShopGender";
import GiftingRange from "@/features/Gift/GiftingRange";
import DesktopBanner from "@/features/Home/DesktopBanner";
import Banner from "@/features/Home/DesktopBanner";
import MobileBanner from "@/features/Home/MobileBanner";
import Categories from "@/features/TopCategories/Categories";
import TopSellers from "@/features/TopSellers/TopSellers";
import {Box} from "@chakra-ui/react"
import { products } from "../../mocks/products";
import { categories } from "../../mocks/categories";

export default function Home() {
  return (
    <><Navbar />
     <DesktopBanner />
      <MobileBanner />
    <Categories/>
    <TopSellers title="Top Sellers" content="Discover what's in vogue and in demand with our best sellers, handpicked to keep you ahead of the fashion curve" products={products}/>
    <ShopGender />
    <TopSellers title="Gifting Range" content="Our jewelry gifting range boasts a stunning selection of handcrafted pieces, designed
                      to make your loved one feel truly special and cherished." products={products} />
    <JewelryCare />
    <Footer />
      </>
  )
}
