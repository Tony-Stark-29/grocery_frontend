import React from "react";
import "./whishList.css";
import { useNavigate } from "react-router-dom";

export const WhishListCard = () => {

  const navigate=useNavigate();

  return (
    <>
      <div className="card-header">
        <div className="card-title">Liked Items</div>
      </div>
      <div className="card-body">
         
        <button className="btn-outline-primary rounded-5 px-4 m-auto w-auto" onClick={()=>{
          navigate("/shop/whishlist");
        }}>See All </button>
      </div>
    </>
  );
};
