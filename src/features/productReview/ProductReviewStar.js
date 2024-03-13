import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductReviewStar = ({ setRating}) => {
  const handleRating = () => {
    const stars = document.getElementsByClassName("star");

    Array.from(stars).forEach((star, index1) => {
      star.addEventListener("click", () => {
        setRating(index1 + 1);
        Array.from(stars).forEach((star, index2) => {
          if (index1 >= index2) {
            star.classList.add("text-success");
          } else {
            star.classList.remove("text-success");
          }
        });
      });
    });
  };

  
  handleRating();
  return (
    <>
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
    </>
  );
};
