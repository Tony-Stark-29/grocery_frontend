import React from 'react'
import { HeaderAdvertisement } from "../features/navigation/HeaderAdvertisement";
import { Header } from "../features/header/Header";
import { Hero } from "../features/hero/Hero";
import { Features } from "../features/feature/Features";
import { Footer } from "../features/footer/Footer";
import { Offer } from "../features/offers/Offer";
import { Delivery } from "../features/promotion/Delivery";
import { Moto } from "../features/promotion/Moto";
export const Home = () => {
  return (
    <div className="containner-fluid ">
      <HeaderAdvertisement />
      <Header />
      <main className=' overflow-hidden'>
        <Hero />
        <Features />
        <Offer />
        <Delivery />
        <Moto />
      </main>
      <Footer />
    </div>
  )
}
