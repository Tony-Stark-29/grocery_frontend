import React from "react";
import { AddressForm } from "../myAccount/AddressForm";
import { useUserContext } from "../../hooks/useUserContext";
import { ShipToAddress } from "./ShipToAddress";
import "./checkout.css";
import { CheckoutCard } from "./CheckoutCard";

export const Checkout = () => {
  const { user } = useUserContext();
  return (
    <section className="checkout-container row m-auto p-3">
      <div className="col-12 col-lg-8">
        <AddressForm
          formData={{
            type: "Billing Address",
            data: user?.billing_address || null,
          }}
        />
        <ShipToAddress />
      </div>
      <div className="col-12 col-lg-4 border border-success rounded">
        <CheckoutCard/>
      </div>
    </section>
  );
};
