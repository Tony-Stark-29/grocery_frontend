import React, { useEffect } from "react";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AddToCart } from "../cart/AddToCart";

export const ProductCard = ({ item }) => {
  useEffect(() => {}, [item]);
  const {
    _id,
    name,
    category,
    description,
    tags,
    stock,
    price,
    offer,
    imageUrl,
  } = item;

  return (
    <div className=" col-6 col-md-3 col-lg-2 product-card card rounded-0 p-0 m-0 position-relative">
      <div className="h-50 overflow-hidden position">
        <img src={imageUrl} alt="Item Preview" className="img-fluid " />
      </div>
      <div className="position-absolute top-fixed  px-lg-2 m-lg-3 d-flex -flex-row flex-wrap w-50">
        {offer > 0 && (
          <span className=" badge  bg-success shadow m-1 ">- {offer} %</span>
        )}
        {stock === 0 && (
          <span className=" badge bg-danger shadow m-1 ">Out Of Stock</span>
        )}
      </div>

      <div className="card-body">
        <Link
          reloadDocument
          className="h5 card-title text-capitalize font-weight-bolder"
          to={`/shop/${category.toLowerCase()}/${name.toLowerCase()}/${_id}`}
        >
          {name}
        </Link>

        <p className="card-text font-weight-light">
          o {`${description?.split(" ").slice(0, 20).join(" ")}...`}
        </p>
        <div>
          {tags?.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="badge badge-pill text-dark bg-light  text-capitalize  text-left mx-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer  bg-transparent border-0 d-flex flex-row align-items-center">
        <div className="col-8 text-success">
          <h5>
            <FontAwesomeIcon icon={faIndianRupee} stock={stock} id={_id} />{" "}
            {!offer && price}
            {offer && (
              <>
                <small className="text-decoration-line-through text-muted">
                  {price}
                </small>
                <span className="">
                  {" "}
                  {price - price * (Number(offer) / 100)}
                </span>
              </>
            )}
          </h5>
        </div>
        <div className="col-4  ">
          <div className="row m-auto text-end">
            <div className="w-auto m-auto">
              <AddToCart stock={stock} id={_id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
