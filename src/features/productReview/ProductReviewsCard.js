import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import "./productReview.css";
import React from "react";

export const ProductReviewsCard = ({ userReview }) => {
  const { name, review, created, rating } = userReview;

  const setRating = () => {
    const stars = document.getElementsByClassName("star");

    Array.from(stars).forEach((star, index2) => {
      if (rating >= 0) {
        star.classList.add("text-success");
      } else {
        star.classList.remove("text-success");
      }
    });
  };

  setRating(rating);

  return (
    <div className=" border rounded-2 reviews-card mx-3 my-2 p-2   ">
      <div className="row m-auto align-items-center">
        <div className="col-4 fs-4 d-flex  ">
          <div className="rounded-5 px-3 py-1 bg-light border user-avatar-container ">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="col fw-bolder">{name}</div>
      </div>
      <div className="row m-auto align-items-center my-1  ">
        <div className="col">
          <div className="star d-inline-block mx-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="star  d-inline-block mx-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="star  d-inline-block mx-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="star d-inline-block mx-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="star d-inline-block mx-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
      <div className="row m-auto  align-items-center my-1  ">
        <p>{review}</p>
      </div>
      <div className="row m-auto  align-items-center my-1  ">
        <p>
          {" "}
          <span>reviewed on </span> {created}
        </p>
      </div>
    </div>
  );
};
