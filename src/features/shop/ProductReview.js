import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./shop.css"

export const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const handleRating = () => {
    const stars = document.getElementsByClassName("star");

    Array.from(stars).forEach((star, index1) => {
      star.addEventListener("click", () => {
        setRating(index1 + 1);
        Array.from(stars).forEach((star, index2) => {
          if (index1 >= index2) {
            star.classList.add("text-warning");
          } else {
            star.classList.remove("text-warning");
          }
        });
      });
    });
  };
  handleRating();
  return (
    <div className="row mx-2 my-4">
      <h4 className="fw-bolder">Review</h4>

      <div className="w-auto star-rating w-25 text-dark">
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
        <div className="  d-inline-block mx-3">
          <small>
            <strong> *Your Rating</strong>
          </small>
        </div>
      </div>

      <form action="">
        <div className="input-group my-3 border border-success text-success rounded ">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Name"
          ></input>
        </div>
        <div className="input-group my-3 border border-success text-success rounded">
          <textarea
            className="form-control"
            placeholder="Review"
            cols="100"
            rows="5"
          ></textarea>
        </div>
        
          <button className="btn btn-outline-dark w-50 m-auto rounded-5">
            Submit
          </button>
    
      </form>
    </div>
  );
};
