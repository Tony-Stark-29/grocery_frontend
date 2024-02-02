import React from "react";
import apple from "../../resources/collages/apple.jpg";
import bread from "../../resources/collages/bread.jpg";
import fruitbasket from "../../resources/collages/fruit-basket.jpeg";
import kivi from "../../resources/collages/kivi.jpg";
import milk from "../../resources/collages/milk.jpg";
import organicjuice from "../../resources/collages/organic-juice.jpg";
import "./promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const InstagramPics = () => {
  return (
    <section className="instagram-colleges  p-0 overflow-hidden">
      <div className="row p-0 m-auto position-relative">
        <div className="col-6 col-lg-2 p-0 m-0">
          <img className="" src={apple} alt="" />
        </div>
        <div className="col-6 col-lg-2 d-none d-lg-block p-0 m-0">
          <img className="" src={bread} alt="" />
        </div>
        <div className="col-6 col-lg-2 d-none d-lg-block p-0 m-0">
          <img className="" src={fruitbasket} alt="" />
        </div>
        <div className="col-6 col-lg-2 d-none d-lg-block p-0 m-0">
          <img className="" src={kivi} alt="" />
        </div>
        <div className="col-6 col-lg-2 d-none d-lg-block p-0 m-0">
          <img className="" src={milk} alt="" />
        </div>
        <div className="col-6 col-lg-2 p-0 m-0">
          <img className="" src={organicjuice} alt="" />
        </div>
        <div className="instagram-link-container position-absolute rounded w-auto px-5 py-4 display-3">
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </section>
  );
};
