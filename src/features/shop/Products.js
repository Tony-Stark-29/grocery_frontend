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
    if(currentPage==="shop")
    {
      currentPage='';
    }
    requestApi(`/grocery/products/${currentPage}`, "GET", null).then((data) => {
    groceryDispatch({ type: "SET_PRODUCTS", payload: data?.products });
    });
  }, []);

  if (isLoading) {
    return <ProductsShimmer />;
  }
  return (
    <section className="row d-flex flex-row flex-wrap p-0 m-0">
      <ProductFilter />
      {products.length > 0 &&
        products.map((item) => <ProductCard key={item._id} item={item} />)}
    </section>
  );
};
