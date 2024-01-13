import React from "react";
import { products } from "../../constants/data";
import { ProductCard } from "./ProductCard";
export const Products = () => {
  return (
    <section className="col-12 col-lg-10 d-flex flex-row flex-wrap p-0 m-0">
      <div className="col-12 bg-light border p-2">Showing {products.length} products</div>
      {products.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </section>
  );
};
