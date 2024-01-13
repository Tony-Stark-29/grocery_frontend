import React from "react";
import { HeaderAdvertisement } from "../features/navigation/HeaderAdvertisement";
import { Footer } from "../features/footer/Footer";
import { BreadcrumbNav } from "../features/navigation/BreadCrumbNav";
import { PrimaryNavigation } from "../features/navigation/PrimaryNavigation";
import { ProductCategoryCarousel } from "../features/shop/ProductCategoryCarousel";
import { Products } from "../features/shop/Products";
import { ProductFilter } from "../features/shop/ProductFilter";

export const Shop = () => {
  return (
    <div className="containner-fluid ">
      <HeaderAdvertisement />
      <header className="position-sticky sticky-top ">
        <PrimaryNavigation />
      </header>
      <div className="d-flex flex-column align-items-center bg-light py-5 overflow-hidden ">
        <BreadcrumbNav />
        <ProductCategoryCarousel />
      </div>
      <main className="container-fluid my-3 bg-light rounded shadow-lg p-0 ">
        <div className="d-flex flex-column flex-lg-row ">
          <div className="col-12 col-md-2 ">
            <div className="element d-flex flex-row flex-lg-column flex-wrap align-items-start justify-content-evenly py-5">
              <ProductFilter />
            </div>
          </div>
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  );
};
