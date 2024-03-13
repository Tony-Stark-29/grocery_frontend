import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { ProductCard } from "./ProductCard";
import Slider from "react-slick";

export const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState(null);
  const { requestApi } = useApi();

  useEffect(() => {
    requestApi(`/grocery/products/${category}`, "GET", null)
      .then((data) => {
        setProducts(data?.products);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section className="related-products px-1 py-4 bg-white my-4">
      <h3 className="fw-bolder text-center">Related Products</h3>
      <div className="row m-auto justify-content-center">
        {!products && <p className="text-warning">No related Products</p>}

        {products &&
          products.slice(0, 6).map((item) => <ProductCard item={item} />)}
      </div>
    </section>
  );
};
