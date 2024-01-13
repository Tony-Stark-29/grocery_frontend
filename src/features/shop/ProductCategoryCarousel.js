import React from "react";
import fruit from "../../resources/collages/apple.jpg";
import vegeies from "../../resources/collages/fruit-basket.jpeg";
import bakery from "../../resources/collages/bread.jpg";
import juice from "../../resources/collages/organic-juice.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

const customStyle = {
  display: "block",
  color: "white",
  background: "grey",
  borderRadius: "50%",
  padding: "4px",
};
const LeftArrow = ({ className, style, onClick }) => (
  <FontAwesomeIcon
    icon={faLessThan}
    className={className}
    style={{ ...style, ...customStyle }}
    onClick={onClick}
  />
);

const RightArrow = ({ className, style, onClick }) => (
  <FontAwesomeIcon
    icon={faGreaterThan}
    className={className}
    style={{ ...style, ...customStyle }}
    onClick={onClick}
  />
);

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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="carousal-container container">
      <Slider {...settings}>
        <div className="  p-3 text-center">
          <img
            className="img-fluid rounded  shadow-sm m-auto "
            src={vegeies}
            alt="First slide"
          />
          <h6 className="my-3">Vegies</h6>
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
