import React from "react";
import "./shimmer.css";

export const ProductsShimmer = ({ count }) => {
  const arr = new Array(12).fill(1);
  return (
    <section className="row vh-50  d-flex flex-row flex-wrap  p-0 m-0">
        <div
          className="col-12 rounded-0 border shimmer"
          style={{ minHeight: "50px" }}
        ></div>
      {arr.map((item,index) => (
        <div
        key={index}
          className="col-2 rounded-0 border shimmer"
          style={{ minHeight: "350px" }}
        ></div>
      ))}
    </section>
  );
};
