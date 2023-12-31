import React from "react";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faIndianRupee,
  faRupee,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ item }) => {
  return (
    <div className="col-6 col-md-3  product-card card rounded-0 m-0 p-0  ">
      <div className="h-50 overflow-hidden">
        <img src={item?.imageUrl} alt="Item Preview" className="img-fluid" />
      </div>
      <div class="card-body">
        <h5 class="card-title ">{item?.name}</h5>
        <p class="card-text font-weight-light">
          {`${item?.description?.split(" ").slice(0, 20).join(" ")}...`}
        </p>
        <div>
          {item?.tags?.map((tag) => (
            <p className="text-capitalize text-left mx-1">{tag}</p>
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
