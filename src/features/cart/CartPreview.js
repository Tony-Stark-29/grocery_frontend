import React  from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const CartPreview = () => {
  const { subTotal, cart  } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="row m-auto">
      <div className="card-header">
        <div className="card-title">Cart Preview</div>
      </div>
      <div className="card-body">
        {cart?.length > 0 &&
          cart.slice(0, 2).map((item) => (
            <div
              key={item?._id}
              className="row m-auto my-1  fs-6   border-bottom align-items-center"
            >
              <div className="col-4 px-2">
                <div className="row m-auto p-0">
                  <img
                    className="img-thumbnail my-3"
                    src={item?.imageUrl}
                    alt="product"
                    style={{ minHeight: "50px", minWidth: "50px" }}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="row m-auto -bolder ">
                  <div className="col-8">
                    <div className="row m-auto">
                      <small>{item?.name}</small>
                    </div>
                    <small>
                      <FontAwesomeIcon icon={faIndianRupee} /> {item?.price}{" "}
                    </small>
                  </div>
                  <div className="col-4 d-flex flex-colum align-items-center justify-content-center">
                    <small className="text-success">
                      <span>X</span>
                      {item?.quantity}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {cart?.length === 0 && <p className="text-dark">No Items in Cart</p>}
      </div>
      <div className=" row m-auto align-items-center">
        <div className="col-6 fw-light">SubTotal : </div>
        <div className="col-6">
          <FontAwesomeIcon icon={faIndianRupee} /> {subTotal}
        </div>
      </div>
      <div className=" row m-auto justify-content-evenly align-items-center  my-2">
        <button
          className="w-auto btn-outline-primary rounded-5 px-4 "
          onClick={() => navigate("/shop/cart")}
        >
          See All
        </button>
        <button
          className="w-auto btn-filled-primary rounded-5 px-4 "
          onClick={() => navigate("/shop/checkout")}
        >
          Checkout{" "}
        </button>
      </div>
    </div>
  );
};
