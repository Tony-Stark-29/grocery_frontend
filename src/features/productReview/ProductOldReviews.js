import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useApi } from "../../hooks/useApi";
import { ProductReviewsCard } from "./ProductReviewsCard";
import toast from "react-hot-toast";
 
export const ProductOldReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [updateReview, setUpdateReview] = useState(false);
  const { isLoading, error, requestApi } = useApi();

  useEffect(() => {
    requestApi(`/review/${productId}`)
      .then((data) => setReviews(data?.reviews))
      .catch((error) => toast.error(error.message));
  }, [updateReview]);

  var settings = {
    dots:true,
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    width: "200px",
     
  };

  return (
    <div className="row m-auto m]px-5">
      <div className="col-12 my-2">
        <h3 className="fw-bolder">Customer reviews</h3>
      </div>
      {reviews.length === 0 && <div>No reviews</div>}
      {reviews.length > 0 && (
        <Slider {...settings}>
          {reviews.map((review) => (
            <ProductReviewsCard userReview={review} />
          ))}
        </Slider>
      )}
    </div>
  );
};
