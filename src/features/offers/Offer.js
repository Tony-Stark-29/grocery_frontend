import React, { useEffect } from "react";
import "./offer.css";
import offer_header_image from "../../resources/family-3d-vector.jpg";

import { ProductCard } from "../shop/ProductCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
 
} from "@fortawesome/free-solid-svg-icons";
import { useGroceryContext } from "../../hooks/useGroceryContext";
 
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const Offer = () => {
  const navigate = useNavigate();
  const {  isLoading, requestApi } = useApi();
  const {products,dispatch:groceryDispatch}=useGroceryContext();

  useEffect(() => {
    requestApi("/grocery/offers", "GET").then((data) => {
       if(!data?.error)
       {
        
        groceryDispatch({ type: "SET_PRODUCTS", payload: data?.products });

       }
    });
  });

  return (
    <section
      className="offer-container   bg-light  overflow-hidden shadow shadow-md my-3 p-0 "
      style={{ borderRadius: "20px" }}
    >
      <div className="row m-auto text-center">
        <div className="col-12 p-0  ">
          <div className="row p-0 m-0 " style={{ backgroundColor: "#fbe4da" }}>
            <div className="col-12 col-lg-4 p-0">
              <img className="img-fluid " src={offer_header_image} alt="sale" />
            </div>

            <div className="col py-2 my-auto">
              <div className="row m-auto py-2">
                <div className="col-12">
                  <h2 className="display-3 fw-bolder">Todays Deals</h2>
                </div>
                <div className="col-12">
                  <h6 className="lead  ">Extra 10 % Discount</h6>
                  <p>* on selected Products</p>
                </div>
                <div className="col-12">
                  <button
                    className=" w-auto m-auto btn-filled-secondary rounded-5 px-4 "
                    onClick={() => navigate("/shop")}
                  >
                    <span className="mx-2">View All </span><FontAwesomeIcon icon={faArrowCircleRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {isLoading && <div>Loading</div> }
            {products.length > 0 &&
              products
                .slice(0, 6)
                .map((item) => <ProductCard key={item._id} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
