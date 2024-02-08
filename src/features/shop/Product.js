import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faIndianRupee,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

import { productInitialData } from "../../constants/data";
import { productChecks } from "../../constants/grocery";
import { ProductReview } from "./ProductReview";
import { AddtoWhishListBtn } from "../whishList/AddtoWhishListBtn";
import { AddToCart } from "../cart/AddToCart";
import { ProductShimmer } from "../shimmer/ProductShimmer";
import { ProductQuantityBtn } from "./ProductQuantityBtn";
import { useGroceryContext } from "../../hooks/useGroceryContext";

import { auth } from "../../config/firebaseConfig";
import { useCartContext } from "../../hooks/useCartContext";
import toast, { Toaster } from "react-hot-toast";

export const Product = () => {
  const { name: productName, id } = useParams();

  const navigate = useNavigate();
  const { isLoading, requestApi } = useApi();
  const { products } = useGroceryContext();
  const { dispatch: cartDispatch } = useCartContext();
  const [product, setProduct] = useState(productInitialData);
  const [productQuantity, setProductQuantity] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    return <ProductShimmer />;
  }

  const handleBuyItem = async () => {
    const itemToAdd =
      products.find((item) => item?._id === id) ||
      (await requestApi(`/grocery/product/${id}`, "GET"));

    if (itemToAdd?.stock === 0) {
      toast.error("Out of Stock");
      return;
    }

    const payload = {
      _id: itemToAdd._id,
      name: itemToAdd.name,
      price: itemToAdd.price,
      quantity: productQuantity || 1,
      imageUrl: itemToAdd.imageUrl,
    };
    const item = {
      _id: itemToAdd?._id,
      quantity: 1,
    };

    if (auth.currentUser) {
      const res = await requestApi("/user/cart", "POST", { item });

      if (res.error || res.Error) {
        toast.error(res.error, {
          style: {
            width: "500px",
            textAlign: "left",
            fontSize: "0.9rem",
          },
        });
        return;
      }
      toast.success(res.message);
    }
    if (!auth.currentUser) {
      toast.success("Item added to Cart");
    }
    cartDispatch({ type: "UPDATE_CART", payload });
    navigate("/shop/checkout");
  };

  return (
    <section className=" container-fluid m-auto p-0 bg-white">
      <div className="row m-auto">
        <div className="col-12 col-md-6 p-0 ">
          <div className="row m-0 p-0 position-relative overflow-hidden">
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
            {!offer && (
              <span className="">
                <span>
                  <FontAwesomeIcon icon={faIndianRupee} />
                  {price}
                </span> 
                <strong>/</strong> <span>{unit}</span>
              </span>
            )}
            {offer!==0 && (
              <>
                <span className="">
                  <FontAwesomeIcon icon={faIndianRupee} />
                  {price - price * (Number(offer) / 100)}
                </span>
                <small className="mx-2 fs-6 text-decoration-line-through text-muted">
                  <FontAwesomeIcon icon={faIndianRupee} />
                  {price}
                </small>
              </>
            )}
          </h4>
          <div className="my-3">
            <div className="progress w-75 " style={{ height: "6px" }}>
              <div
                className="progress-bar bg-danger "
                style={{ width: `${(1 / stock) * 100}%` }}
                role="progressbar"
                aria-valuenow="1"
                aria-valuemin="0"
                aria-valuemax={stock}
              ></div>
            </div>
            <div className=" row  m-auto my-2 ">
              <div className="col-6">
                <small>
                  <strong>Available : </strong>
                </small>
                <span>{stock}</span>
              </div>
              <div className="col-6">
                <small>
                  <strong>sold : </strong>
                </small>
                <span>1</span>
              </div>
            </div>
          </div>
          <div className="action row m-auto mt-lg-4 mb-3 align-items-center ">
            <div className="btn-group w-auto m-auto overflow-hidden">
              <ProductQuantityBtn
                quantity={productQuantity}
                setQuantity={setProductQuantity}
              />
            </div>
            <div className="  w-auto m-auto ">
              <AddToCart
                id={id}
                stock={stock}
                quantity={productQuantity}
                content={"Add To Cart"}
              />
            </div>
            <div className="col text-center">
              <AddtoWhishListBtn id={id} />
            </div>
          </div>
          <div className="row m-auto">
            <button
              className="  btn-filled-primary fs-4 rounded-5 px-3 w-50 my-3"
              onClick={handleBuyItem}
            >
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
      <Toaster />
    </section>
  );
};
