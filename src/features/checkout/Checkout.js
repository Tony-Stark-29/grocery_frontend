import React from "react";
import { AddressForm } from "../myAccount/AddressForm";
import { useUserContext } from "../../hooks/useUserContext";
import { ShipToAddress } from "./ShipToAddress";
import "./checkout.css";
import { CheckoutCard } from "./CheckoutCard";
import { useParams } from "react-router-dom";

export const Checkout = () => {
  const { user } = useUserContext();
  const {id}=useParams();
  
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
      <div className="col-12 col-lg-4  ">
        <CheckoutCard />
      </div>
    </section>
  );
};
