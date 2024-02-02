import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCheck,
  faHeart,
  faIndianRupee,
  faMinus,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { ProductsShimmer } from "../shimmer/ProductsShimmer";
import { productInitialData } from "../../constants/data";
import { productChecks } from "../../constants/grocery";
import { ProductReview } from "./ProductReview";
import { AddtoWhishListBtn } from "../whishList/AddtoWhishListBtn";
import { AddToCart } from "../cart/AddToCart";

export const Product = () => {
  const { name: productName, id } = useParams();
  const params = useParams();

  const { error, isLoading, requestApi } = useApi();
  const [product, setProduct] = useState(productInitialData);

  useEffect(() => {
    requestApi(`/grocery/product/${productName || id}`, "GET", null)
      .then((data) => {
        setProduct((prev) => ({ ...prev, ...data?.product }));
      })
      .catch((error) => console.log(error.message));
  }, []);

  const {
    name,
    category,
    description,
    stock,
    unit,
    offer,
    price,
    imageUrl,
    tags,
  } = product;

  if (isLoading) {
    return <ProductsShimmer />;
  }

  return (
    <section className="container-flex m-auto p-0 bg-white">
      <div className="row m-auto">
        <div className="col-12 col-md-6 p-0">
          <div className="row m-0 p-0 position-relative">
            <img className="img-fluid" src={imageUrl} alt="product preview" />
            <div className="position-absolute top-fixed px-lg-2 m-lg-3 d-flex -flex-row flex-wrap w-75">
              {offer > 0 && (
                <span className="badge  bg-success shadow m-1 m-lg-2">
                  - {offer} %
                </span>
              )}
              {stock === 0 && (
                <span className="badge bg-danger shadow m-1 m-lg-2 ">
                  Out Of Stock
                </span>
              )}
            </div>
          </div>
          <div className="row m-auto p-4">
            <div className="col-12 col-md-6">
              <small>
                <strong>Category : </strong>
                {category}
              </small>
            </div>
            <div className="col-12 col-md-6">
              <small>
                <strong>Tags : </strong>
                {tags
                  .map(
                    (tag) =>
                      tag.slice(0, 1).toUpperCase() + tag.slice(1, tag.length)
                  )
                  .join(" , ")}
              </small>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-4 ">
          <h3 className="fw-bolder">{name}</h3>
          <p>{description.split(".")[0]}</p>
          <h4 className="text-success">
            <strong>
              <FontAwesomeIcon icon={faIndianRupee} /> {price}
            </strong>
          </h4>
          <div className="my-3">
            <div className="progress w-75 " style={{ height: "6px" }}>
              <div
                className="progress-bar bg-danger w-25"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className=" row  m-auto my-2 ">
              <div className="col-6">
                <small>
                  <strong>Available : </strong>
                </small>
                100
              </div>
              <div className="col-6">
                <small>
                  <strong>sold : </strong>
                </small>
                100
              </div>
            </div>
          </div>
          <div className="action row m-auto mt-lg-4 mb-3 align-items-center ">
            <div className="btn-group w-auto m-auto overflow-hidden">
              <button className="btn btn-outline-dark ">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <div className="p-2">
                <strong>0</strong>
              </div>
              <button className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faAdd} />
              </button>
            </div>
            <div className="  w-auto m-auto ">
              <AddToCart   content={"Add To Cart"} />
            </div>
            <div className="col text-center">
              <AddtoWhishListBtn />
            </div>
          </div>
          <div className="row m-auto">
            <button className="btn btn-outline-dark rounded-5 px-5 w-50 my-3">
              Buy
            </button>
          </div>

          <div className="border border-success badge badge-success bg-light rounded px-2 py-3 w-auto text-success">
            <FontAwesomeIcon icon={faStopwatch} className="mx-2" />
            <span>We Delivery on Next Day from 10:00 AM to 08:00 PM</span>
          </div>

          <div className="text-success lh-sm mt-3">
            {productChecks.map((content, index) => (
              <p key={index}>
                <small>
                  <strong>
                    <FontAwesomeIcon className="mx-1  lh-sm" icon={faCheck} />
                    {content}
                  </strong>
                </small>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="row m-auto border border-top ">
        <div className="col-12 col-md-6 p-4">
          <h4 className="fw-bolder">Description</h4>
          <p className="text-justify">{description}</p>
        </div>
        <div className="col-12 col-md-6 border border-left">
          <ProductReview />
        </div>
      </div>
    </section>
  );
};
