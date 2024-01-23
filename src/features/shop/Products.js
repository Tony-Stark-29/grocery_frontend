import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useApi } from "../../hooks/useApi";
import { useGroceryContext } from "../../hooks/useGroceryContext";
import loading_spinner from "../../resources/tube-spinner .svg";
import { ProductsShimmer } from "../shimmer/ProductsShimmer";
import { ProductFilter } from "./ProductFilter";
import { useLocation } from "react-router-dom";

export const Products = () => {
  const location = useLocation();
  const { error, isLoading, requestApi } = useApi();
  const { products, dispatch: groceryDispatch } = useGroceryContext();
  let currentPage = location.pathname.split("/").pop();

  useEffect(() => {
    if (currentPage === "shop") {
      currentPage = "";
    }
    requestApi(`/grocery/products/${currentPage}`, "GET", null).then((data) => {
      groceryDispatch({ type: "SET_PRODUCTS", payload: data?.products });
    });
  }, []);

  if (isLoading) {
    return <ProductsShimmer />;
  }
  return (
    <section className="row   p-0 m-0">
     
      <div className="col-12  p-0">
        <div className="row m-0 p-0 border border-left justify-content-between">
          {products && (
            <div className="col-6 col-md-3 px-1 py-2 fw-lighter">
              Showing {products.length} of 100
            </div>
          )}
          <div className="col-6 col-md-3">
            <select className="w-100 mx-auto my-2 form-control-sm border border-success text-success" name="" id="">
              <option value="">Sort by : Popularity</option>
              <option value="">Sort by : Rating</option>
              <option value="">Sort by : Price Low to High</option>
              <option value="">Sort by : Price High to Low</option>
              <option value="">Sort by : Latest</option>
            </select>
          </div>
        </div>
        <div className="col-12 d-flex flex-row flex-wrap p-0">
          {products.length > 0 &&
            products.map((item) => <ProductCard key={item._id} item={item} />)}
          {!products.length > 0 &&
            <div className="m-auto py-3 text-danger " > No Products available to show </div> }
        </div>
      </div>
    </section>
  );
};
