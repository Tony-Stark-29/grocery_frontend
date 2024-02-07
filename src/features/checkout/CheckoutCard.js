import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../hooks/useCartContext";
import {
  faAngleDown,
  faAngleUp,
  faBuildingColumns,
  faCreditCard,
  faCreditCardAlt,
  faIndianRupee,
} from "@fortawesome/free-solid-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { CartItemSummary } from "../cart/CartItemSummary";

export const CheckoutCard = () => {
  const angleDown = (
    <FontAwesomeIcon
      onClick={() => setAccordinIcon(angleUp)}
      icon={faAngleDown}
    />
  );
  const angleUp = (
    <FontAwesomeIcon
      onClick={() => setAccordinIcon(angleDown)}
      icon={faAngleUp}
    />
  );
  const couponAccordin = useRef(null);
  const { cart, subTotal, dispatch } = useCartContext();
  const [accordinIcon, setAccordinIcon] = useState(angleDown);

  const toggleAccordin = () => {
    couponAccordin.current.classList.toggle("show");
  };

  return (
    <div
      className=" border border-success rounded p-2    "
      style={{ zIndex: "1" }}
    >
      <div className="row m-auto border-bottom my-3 py-2">
        <div className="col-12 d-flex flex-row align-items-center">
          <h5 className=" w-75  ">Coupon Code</h5>{" "}
          <div className="w-25 text-end">
            <span onClick={toggleAccordin}>{accordinIcon}</span>
          </div>
        </div>
        <div
          className="col-12 collapse "
          id="coupon-accordin"
          ref={couponAccordin}
        >
          <input type="text" className="form-control" placeholder="REP50" />
        </div>
      </div>

      <div className="row w-auto m-auto fs-6">
        <h5>Cart Items</h5>
        <CartItemSummary />
      </div>
      <div className="row m-auto">
        <h5>Shipping </h5>
        <div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="shipping" />
            <label class="form-check-label" for="flexRadioDefault2">
              FastShipping <small>(2 - 5 days)</small>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="shipping" />
            <label class="form-check-label" for="flexRadioDefault2">
              Standard shipping <small>(5 - 10 days)</small>
            </label>
          </div>
        </div>
      </div>

      <div className="row m-auto border-bottom border-top  py-2 my-2">
        <div className="col-6">
          <h5 className=" ">SubTotal</h5>{" "}
        </div>
        <div className="col-6 text-end fs-5">
          <p className="text-success">
            <FontAwesomeIcon icon={faIndianRupee} /> <strong>{subTotal}</strong>
          </p>
        </div>
      </div>

      <div className="row m-auto">
        <h5>Payment </h5>
        <div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" />
            <label class="form-check-label" for="flexRadioDefault2">
              Debit Card <FontAwesomeIcon icon={faCreditCard} />
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" />
            <label class="form-check-label" for="flexRadioDefault2">
              Credit Cart <FontAwesomeIcon icon={faCreditCard} />
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" />
            <label class="form-check-label" for="flexRadioDefault2">
              Bank Transfer <FontAwesomeIcon icon={faBuildingColumns} />
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" />
            <label class="form-check-label" for="flexRadioDefault2">
              UPI
              <FontAwesomeIcon icon={faGooglePay} />
            </label>
          </div>
        </div>
      </div>

      <div className="row m-auto my-3 fw-lighter">
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <div className="row m-auto mb-3">
        <button className="btn-filled-primary rounded-5 px-3 py-1 w-auto m-auto">
          Place Order
        </button>
      </div>
    </div>
  );
};
