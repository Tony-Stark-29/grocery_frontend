import React from "react";
import "./offer.css";
import offer_header_image from "../../resources/offer-image.jpg";

import { ProductCard } from "../shop/ProductCard";
import { products } from "../../constants/data";

export const Offer = () => {
  return (
    <section className="offer-container container bg-light  overflow-hidden shadow shadow-md my-3 p-0" style={{borderRadius:"20px"}}>
      <div className="row m-auto text-center">
        <div className="col  col-xl-4 d-flex flex-row  flex-md-row flex-xl-column m-0 p-0">
          <div className="col-6  col-xl-12 offer-header-image p-0 m-0">
            <img
              src={offer_header_image}
              alt="offer header"
              className="img-fluid "
            />
          </div>
          <div className="col  grocery-categories d-flex flex-row flex-wrap align-items-center m-0 p-2">
            <div className="col-6 d-flex flex-column flex-wrap align-items-start px-5 ">
              <p>Fruits</p>
              <p>Vegetables</p>
              <p>Diary</p>
              <p>Bakery</p>
            </div>
            <div className="col-6 d-flex flex-column flex-wrap align-items-start px-5">
              <p>Meat</p>
              <p>Fishes</p>
              <p>Spices</p>
              <p>Snaks</p>
            </div>
            <div className="col-12 ">
              <p>View All -&gt;</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-8  d-flex flex-row flex-wrap flex-md-nowrap  flex-xl-wrap justify-content-start overflow-hidden m-0 p-0">
          {products.slice(0, 8).map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
