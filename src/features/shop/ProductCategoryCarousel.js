import React from "react";
import fruit from "../../resources/collages/fruit-basket.jpeg";
import vegies from "../../resources/collages/tomato.webp";
import bakery from "../../resources/collages/bread.jpg";
import juice from "../../resources/collages/organic-juice.jpg";
import milk from "../../resources/collages/milk.jpg";
import meat from "../../resources/collages/meat.webp";
import seafood from "../../resources/collages/seafood.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const ProductCategoryCarousel = () => {
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon className="text-danger" icon={faUser} />
      </div>
    );
  }
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  var settings = {
    dots: false,
    centerMode: false,
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

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
    <div className="carousal-container container  mt-2">
      <Slider {...settings}>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid  shadow-sm m-auto  "
            src={vegies}
            alt="First slide"
          />
          <Link to={`/shop/${"vegetables"}`}>
            <h6 className="my-1">Vegies</h6>
          </Link>
        </div>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid  shadow-sm m-auto "
            src={fruit}
            alt="Second slide"
          />
          <Link to={`/shop/${"fruits"}`}>
            {" "}
            <h6 className="my-1">Fruit</h6>
          </Link>
        </div>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid  shadow-sm m-auto "
            src={bakery}
            alt="Third slide"
          />
          <Link to={`/shop/${"baking"}`}>
            <h6 className="my-1">Baking</h6>
          </Link>
        </div>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid  shadow-sm m-auto "
            src={juice}
            alt="Third slide"
          />

          <Link to={`/shop/${"drinks"}`}>
            <h6 className="my-1">Drinks</h6>
          </Link>
        </div>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid  shadow-sm m-auto "
            src={milk}
            alt="Third slide"
          />

          <Link to={`/shop/${"dairy"}`}>
            <h6 className="my-1">Dairy</h6>
          </Link>
        </div>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid  shadow-sm m-auto "
            src={meat}
            alt="Third slide"
          />

          <Link to={`/shop/${"meat"}`}>
            <h6 className="my-1">Meat</h6>
          </Link>
        </div>
        <div className="px-1 py-2 text-center">
          <img
            className="img-fluid shadow-sm m-auto "
            src={seafood}
            alt="Third slide"
          />

          <Link to={`/shop/${"seafood"}`}>
            <h6 className="my-1">Seafood</h6>
          </Link>
        </div>
      </Slider>
    </div>
  );
};
