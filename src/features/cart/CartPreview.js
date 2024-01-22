import React from "react";

export const CartPreview = () => {
  return (
    <>
      <div className="card-header">
        <div className="card-title">Cart</div>
      </div>
      <div className="card-body">
        <div>Item -1 </div>
        <div>Item -2 </div>
        <div>Item -3 </div>
      </div>
      <div className="mt-auto">
        <button className="btn btn-outline-success m-1">See All </button>
        <button className="btn btn-warning m-1">Checkout </button>
      </div>
    </>
  );
};
