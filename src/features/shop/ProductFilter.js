import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage, faStar } from "@fortawesome/free-solid-svg-icons";

export const ProductFilter = () => {
  return (
    <div className="row   m-auto justify-content-between">
          <h3>Filter</h3>
          <div className="col-6 col-lg-2">
            <div className="row m-auto p-0">
              <h4>Price</h4>
              <input
                type="email"
                class="w-25 mx-1 form-control"
                id="floatingInputInvalid"
                placeholder="Min"
              />

              <input
                type="email"
                class="w-25 mx-1 form-control"
                id="floatingInputInvalid"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="row m-auto p-0">
              <h4>Rating</h4>
              <input
                type="email"
                class="w-25 mx-1 form-control"
                id="floatingInputInvalid"
                placeholder="Min"
              />

              <input
                type="email"
                class="w-25 mx-1 form-control"
                id="floatingInputInvalid"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="row m-auto p-0">
              <h4>Price</h4>
              <input
                type="email"
                class="w-25 mx-1 form-control"
                id="floatingInputInvalid"
                placeholder="Min"
              />

              <input
                type="email"
                class="w-25 mx-1 form-control"
                id="floatingInputInvalid"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="col-6 col-lg-2">
            {/* Showing {products.length} products */}
          </div>
          
        </div>
  );
};
