import React from "react";
import delivery_boy from "../../resources/delivery-boy.webp";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking, faIndianRupee } from "@fortawesome/free-solid-svg-icons";

export const Delivery = () => {
  return (
    <section className="delivery-container   d-flex flex-column flex-md-row align-items-center justify-content-evenly  shadow-sm my-4">
      <img src={delivery_boy} alt="delivery" />

      <div className="w-75 text-center">
        <h3 className="display-3 fw-bolder float-right">
          We Delivery on Next Day <br /> from 10:00 AM to 08:00 PM
        </h3>
        <p className="">
          * For Orders starts from <FontAwesomeIcon icon={faIndianRupee} />{" "}
          <strong>1000</strong> 
        </p>
        <button className="btn-outline-secondary m-auto w-auto rounded-5 fs-6 px-4 ">
          <span className="fw-bolder mx-2">Order</span>{" "}
          <FontAwesomeIcon icon={faBoxesPacking} />
        </button>
      </div>
    </section>
  );
};
