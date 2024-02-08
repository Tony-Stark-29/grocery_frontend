import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { WhishListCard } from "../whishList/WhishListCard";
import "./navigation.css";
import { CartPreview } from "../cart/CartPreview";
import { Link } from "react-router-dom";
import { CartModal } from "../cart/CartModal";
import { useCartContext } from "../../hooks/useCartContext";
import { UserProfileCard } from "../user/UserProfileCard";

export const NavigationUtilities = () => {
  const { cart } = useCartContext();
  return (
    <div className="action-container d-flex flex-row  m-auto justify-content-end  collape navbar-collapse fs-5">
      <div className="nav-dropdown-container w-auto me-4 d-none d-xl-block ">
        <Link to="/shop/myaccount/login" className="primary-nav-link">
          <FontAwesomeIcon className="  link-scale" icon={faUser} />
        </Link>
        <div className="nav-dropdown-card card shadow">
          <UserProfileCard />
        </div>
      </div>
      <div className="nav-dropdown-container me-4 d-none d-xl-block ">
        <Link to="/shop/whishlist" className="primary-nav-link link-scale">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <div className="nav-dropdown-card card shadow">
          <WhishListCard />
        </div>
      </div>
      <div className="nav-dropdown-container me-4  d-none d-lg-block ">
        
        <Link to="/shop/cart" className="primary-nav-link link-scale">
          <FontAwesomeIcon icon={faOpencart} />
        </Link>
        <small
          className="badge badge-danger bg-danger position-absolute top-fixed rounded-circle px-1 text-center"
          style={{ fontSize: "10px", top: "-1px" }}
        >
          {cart?.length}
        </small>
        <div className="nav-dropdown-card card shadow pb-2">
          <CartPreview />
        </div>
      </div>
      <div className="me-4  d-block d-lg-none ">
        <CartModal />
      </div>
    </div>
  );
};
