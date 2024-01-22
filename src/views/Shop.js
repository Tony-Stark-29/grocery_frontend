import React, { useEffect } from "react";
import { HeaderAdvertisement } from "../features/navigation/HeaderAdvertisement";
import { Footer } from "../features/footer/Footer";
import { BreadcrumbNav } from "../features/navigation/BreadCrumbNav";
import { ProductCategoryCarousel } from "../features/shop/ProductCategoryCarousel";
import { Header } from "../features/header/Header";
import { Outlet, useLocation } from "react-router-dom";
export const Shop = () => {

  const location=useLocation();

  const currPage=location.pathname.split("/").filter((path)=>path).pop();

  return (
    <div className="containner-fluid  m-auto">
      <HeaderAdvertisement />
      <Header />
      <div className="d-flex flex-column align-items-center bg-light py-5 overflow-hidden ">
        <BreadcrumbNav />
        {currPage==="shop" && <ProductCategoryCarousel />}
      </div>
      <main
        className="container-fluid my-3 bg-light rounded shadow-lg p-0  "
        style={{ maxWidth: "1340px", margin: "auto" }}
      >
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};
