import React from "react";
import { HeaderAdvertisement } from "../features/navigation/HeaderAdvertisement";
import { Footer } from "../features/footer/Footer";
import { BreadcrumbNav } from "../features/navigation/BreadCrumbNav";
import { ProductCategoryCarousel } from "../features/products/ProductCategoryCarousel";
import { Header } from "../features/header/Header";
import { Outlet, useLocation } from "react-router-dom";
export const Shop = () => {
  const location = useLocation();

  const currPage = location.pathname
    .split("/")
    .filter((path) => path)
    .pop();

  return (
    <div className="containner-fluid bg-transparent m-auto ">
      <HeaderAdvertisement />
      <Header />
      <div className="d-flex flex-column align-items-center bg-light py-2 shadow-sm overflow-hidden ">
        <BreadcrumbNav />
        {currPage === "shop" && <ProductCategoryCarousel />}
      </div>
      <main className="container  my-4 rounded bg-light p-0 overflow-hidden w-auto  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
