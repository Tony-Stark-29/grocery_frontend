import React from "react";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faIndianRupee,
} from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ item }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3   product-card card rounded-0 m-0 position-relative">
      <div className="h-50 overflow-hidden position">
        <img src={item?.imageUrl} alt="Item Preview" className="img-fluid " />
        
      </div>
     {item?.offer && <span className=" fs-6 badge  bg-success shadow position-absolute top-fixed px-2 m-3">
           - {item?.offer} %
        </span>}
      <div className="card-body">
     
        <h5 className="card-title text-capitalize font-weight-bold">
          {item?.name}
        </h5>
        <p className="card-text font-weight-light">
          {`${item?.description?.split(" ").slice(0, 20).join(" ")}...`}
        </p>
        <div >
          {item?.tags?.slice(0,2).map((tag) => (
            <span className="badge badge-pill text-dark bg-light  text-capitalize  text-left mx-1">{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer  bg-transparent border-0 d-flex flex-row align-items-center">
        <div className="col-8 text-success">
          <h5>
            {" "}
            <FontAwesomeIcon icon={faIndianRupee} /> {item?.price}
          </h5>
        </div>
        <div className="col-4 ">
          <div>
            <FontAwesomeIcon icon={faCartPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};
