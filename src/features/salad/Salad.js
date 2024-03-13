import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Products } from "../products/Products";
import { ProductCard } from "../products/ProductCard";

export const Salad = () => {
  // const [data, setData] = useState([]);
  // const { requestApi } = useApi();

  // useEffect(() => {
  //   requestApi("/grocery/products/salad", "GET", null).then((data) => {
  //    setData(data.products);

  //   });
  // }, []);

  return (
    <div className="row m-auto ">
      {/* {data.length != 0 && data.map((item) => <ProductCard item={item} />)} */}
      <Products />
    </div>
  );
};
