import React from "react";
import "./whishList.css";

export const WhishListCard = () => {
  return (
    <>
      <div className="card-header">
        <div className="card-title">Liked Items</div>
      </div>
      <div className="card-body">
         
        <button className="btn btn-outline-warning">See All </button>
      </div>
    </>
  );
};