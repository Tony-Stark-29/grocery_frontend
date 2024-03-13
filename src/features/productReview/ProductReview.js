import React, { useEffect, useState } from "react";
import "./productReview.css";
import { useUserContext } from "../../hooks/useUserContext";
import { useApi } from "../../hooks/useApi";
import toast from "react-hot-toast";
import { ProductReviewStar } from "./ProductReviewStar";
import { ProductOldReviews } from "./ProductOldReviews";

export const ProductReview = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const { user } = useUserContext();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const { isLoading, requestApi } = useApi();

  useEffect(() => {
    if (user) {
      setName(`${user?.first_name + " " + user?.last_name}`);
    }
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const newReview = { name, rating, review };
    requestApi(`/review/${productId}`, "POST", { review: newReview })
      .then((res) => {
        if (!res.error) {
          toast.success("Thanks for Review");
          return;
        }

        toast.error(res.error);
      })
      .finally(() => {
        setName("");
        setReview("");
        setRating(0);
      });
  };

  return (
    <>
      <div className="row  m-auto ">
        <ProductOldReviews productId={productId} />
      </div>
      <div className="row mx-2 my-4">
        <h4 className="fw-bolder">Review</h4>

        <div className="w-auto star-rating w-25 text-dark">
          <ProductReviewStar setRating={setRating} />
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="input-group my-3 border border-success text-success rounded">
            <textarea
              className="form-control"
              placeholder="Review"
              cols="100"
              rows="5"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>

          <button
            className="btn btn-outline-dark w-50 m-auto rounded-5"
            onClick={handleReviewSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
