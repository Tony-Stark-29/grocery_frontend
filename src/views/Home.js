import React, { useEffect, useState } from "react";
import { HeaderAdvertisement } from "../features/navigation/HeaderAdvertisement";
import { Header } from "../features/header/Header";
import { Hero } from "../features/hero/Hero";
import { Features } from "../features/feature/Features";
import { Footer } from "../features/footer/Footer";
import { Offer } from "../features/offers/Offer";
import { Delivery } from "../features/promotion/Delivery";
import { Moto } from "../features/promotion/Moto";
import { InstagramPics } from "../features/promotion/InstagramPics";
import { Announcement } from "../features/promotion/Announcement";

export const Home = () => {
  return (
    <div className="containner-fluid  bg-light ">
      <Announcement/>
      <HeaderAdvertisement />
      <Header />
      <Hero />
      <main className="container p-0 vh-75">
        <Features />
        <Offer />
        <Moto />
        <Delivery />
        <InstagramPics />
      </main>

      <Footer />
    </div>
  );
};
