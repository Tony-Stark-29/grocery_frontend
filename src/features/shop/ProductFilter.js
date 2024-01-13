import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercentage,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

export const ProductFilter = () => {
  return (
    <>
      <div className="my-2 mx-lg-4">
        <h4 className="fw-bold d-none d-md-block ">Price</h4>
        <button className="btn btn-outline-success m-2 ">
          Price Low - High
        </button>
        <button className="btn btn-outline-success m-2">
          Price High - Light
        </button>
      </div>
      <div className="my-2 mx-lg-4">
        <h4 className="fw-bold d-none d-md-block">Rating</h4>
        <div className="form-group">
          <button className="btn btn-outline-success m-2 ">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-success m-2 ">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
      </div>
      <div className="my-2 mx-lg-4">
        <h4 className="fw-bold d-none d-md-block">Offer</h4>
        <button className="btn btn-outline-success my-2 mx-lg-4">
          <span>
            Offer <FontAwesomeIcon icon={faPercentage} />{" "}
          </span>
        </button>
      </div>
    </>
  );
};
