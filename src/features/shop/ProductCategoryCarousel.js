import React from "react";
import fruit from "../../resources/collages/apple.jpg";
import vegeies from "../../resources/collages/fruit-basket.jpeg";
import bakery from "../../resources/collages/bread.jpg";
import juice from "../../resources/collages/organic-juice.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faChevronCircleLeft, faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

 

export const ProductCategoryCarousel = () => {
  var settings = {
    dots: false,
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
     
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="carousal-container container ">
      <Slider {...settings}>
        <div className="  p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={vegeies}
            alt="First slide"
          />
          <Link to={`/shop/${"vegetables"}`} ><h6 className="my-3">Vegies</h6></Link>
        </div>
        <div className="  p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={fruit}
            alt="Second slide"
            vh-50
          />
          <h6 className="my-3">Fruit</h6>
        </div>
        <div className=" p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={bakery}
            alt="Third slide"
          />
          <h6 className="my-3">Bakery</h6>
        </div>
        <div className=" p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={juice}
            alt="Third slide"
          />
          <h6 className="my-3">Drinks</h6>
        </div>
        <div className=" p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={vegeies}
            alt="First slide"
          />
          <h6 className="my-3">Vegies</h6>
        </div>
        <div className=" p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={fruit}
            alt="Second slide"
          />
          <h6 className="my-3">Fruit</h6>
        </div>
      </Slider>
    </div>
  );
};
