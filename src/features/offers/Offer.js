import React from "react";
import "./offer.css";
import offer_header_image from "../../resources/offer-image.jpg";

import { ProductCard } from "../shop/ProductCard";
import {products} from "../../constants/data";

export const Offer = () => {
  return (
    <section className="offer-container container bg-light rounded overflow-hidden  p-1 p-lg-0 shadow shadow-md my-3">
      <div className="row m-auto ">
        <div className="col-12 col-md-4 p-0 border-right ">
          <div className="offer-header-image h-50 overflow-hidden">
            <img
              src={offer_header_image}
              alt="offer header"
              className="img-fluid"
            />
          </div>
          <div className="grocery-categories d-flex flex-row flex-wrap my-2">
            <div className="col-6 d-flex flex-column flex-wrap align-items-start px-5">
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
            <div className="col-12 my-3">
              <p>View All -&gt;</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8  d-flex flex-row flex-wrap  overflow-hidden p-0">
          {products.slice(0,8).map((item)=><ProductCard key={item._id} item={item} />)}
        </div>
      </div>
    </section>
  );
};
