import React from "react";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <div
      className=" col-6 col-md-3 col-lg-2 product-card card rounded-0 p-0 m-0 position-relative"
      
    >
      <div className="h-50 overflow-hidden position">
        <img src={item?.imageUrl} alt="Item Preview" className="img-fluid " />
      </div>
      <div className="position-absolute top-fixed px-lg-2 m-lg-3 d-flex -flex-row flex-wrap w-75">
        {item?.offer>0 && (
          <span className=" badge  bg-success shadow m-1 m-lg-2   ">
            - {item?.offer} %
          </span>
        )}
        {item?.stock === 0 && (
          <span className=" badge bg-danger shadow m-1 m-lg-2 ">Out Of Stock</span>
        )}
      </div>

      <div className="card-body">
        <Link className="h5 card-title text-capitalize font-weight-bolder" to={`/shop/${item?.category.toLowerCase()}/${item?.name.toLowerCase()}/${item?._id}`}>
          {item?.name}
        </Link>
        <p className="card-text font-weight-light">
          {`${item?.description?.split(" ").slice(0, 20).join(" ")}...`}
        </p>
        <div>
          {item?.tags?.slice(0, 2).map((tag,index) => (
            <span key={index} className="badge badge-pill text-dark bg-light  text-capitalize  text-left mx-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer  bg-transparent border-0 d-flex flex-row align-items-center">
        <div className="col-8 text-success">
          <h5>
            <FontAwesomeIcon icon={faIndianRupee} /> {item?.price}
          </h5>
        </div>
        <div className="col-4">
          <button
            className={`btn  product-cart-icon border fs-5 m-auto ${
              item?.stock === 0 && "disabled"
            }`}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};
