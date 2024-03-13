import React from "react";
import "./shimmer.css";

export const ProductShimmer = ({ count }) => {
  const products = Array(count).fill(0);
  return (
    <section className=" container-fluid m-auto p-0 bg-white ">
      <div className="row m-auto" style={{ minHeight: "350px" }}>
        {products.map((item, index) => (
          <div key={index} className="shimmer col-3 col-lg-2 border m-0">
             
          </div>
        ))}
      </div>
    </section>
  );
};
