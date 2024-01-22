import React, { useEffect, useState } from "react";
import { HeaderAdvertisement } from "../features/navigation/HeaderAdvertisement";
import { Header } from "../features/header/Header";
import { Hero } from "../features/hero/Hero";
import { Features } from "../features/feature/Features";
import { Footer } from "../features/footer/Footer";
import { Offer } from "../features/offers/Offer";
import { Delivery } from "../features/promotion/Delivery";
import { Moto } from "../features/promotion/Moto";
import { useApi } from "../hooks/useApi";
import { useGroceryContext } from "../hooks/useGroceryContext";
import { HomeShimmer } from "../features/shimmer/HomeShimmer";

export const Home = () => {
  const [showUi, setShowUi] = useState(false);
  const { error, isLoading, requestApi } = useApi();
  const { dispatch: groceryDispatch } = useGroceryContext();

  useEffect(() => {
    requestApi("/grocery/products", "GET", null).then((data) => {
      groceryDispatch({ type: "SET_PRODUCTS", payload: data });
    });

    setTimeout(() => {
      setShowUi(true);
    }, 3000);
  }, []);

  return (
    <div className="containner-fluid ">
      <HeaderAdvertisement />
      <Header />

      {showUi && (
        <>
          <Hero />
          <main className="container   p-0">
            <Features />
            <Offer />
            <Moto />
          </main>
        </>
      )}
      {!showUi && <HomeShimmer />}

      <Footer />
    </div>
  );
};
