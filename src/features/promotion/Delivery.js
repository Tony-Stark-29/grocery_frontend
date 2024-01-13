import React from "react";
import delivery_boy from "../../resources/delivery-boy.webp";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";

export const Delivery = () => {
  return (
    <section className="delivery-container container d-flex flex-column flex-md-row align-items-center justify-content-evenly  shadow-sm my-4">
      <img src={delivery_boy} alt="delivery" />

      <div className="w-75 text-center">
        <h3 className="display-3 fw-bolder float-right">
          We Delivery on Next Day <br/> from 10:00 AM to 08:00 PM
        </h3>
        <p className="">
          * For Orders starts from <FontAwesomeIcon icon={faIndianRupee} />{" "}
          <strong>1000</strong>{" "}
        </p>
        <button className="btn btn-primary">Order</button>
      </div>
    </section>
  );
};
