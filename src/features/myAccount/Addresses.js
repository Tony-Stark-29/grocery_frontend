import React, { useEffect, useState } from "react";
import { AddressForm } from "./AddressForm";
import { useUserContext } from "../../hooks/useUserContext";

import toast, { Toaster } from "react-hot-toast";

export const Addresses = () => {
  const { user } = useUserContext();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [billingAddress, setBillingAddress] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    setBillingAddress(user?.billing_address);
    setShippingAddress(user?.shipping_address);
  }, [user]);

  const editShippingAddress = () => {
    setFormData({ type: "Shipping Address", data: shippingAddress });
    setShowAddressForm(true);
  };

  const editBillingAddress = () => {
    setFormData({ type: "Billing Address", data: billingAddress });
    setShowAddressForm(true);
  };

  return (
    <div className="row m-auto p-0">
      {!showAddressForm && (
        <>
          <div className="col-12 ">
            <p>
              The following addresses will be used on the checkout page by
              default.
            </p>
          </div>
          <div className="col-12 p- my-3 ">
            <div className="row m-auto">
              <div className="col-12 col-lg-6">
                <h3>Billing Address</h3>
                {!user?.billing_address && <p>No address available</p>}
                {user?.billing_address && (
                  <div className="row m-auto lh-1 p-2">
                    <p>{billingAddress?.name}</p>
                    <p>{billingAddress?.street},</p>
                    <p>{billingAddress?.area},</p>
                    <p>{billingAddress?.city},</p>
                    <p>
                      {billingAddress?.state + "," + billingAddress?.pin_code},
                    </p>
                    <p>{billingAddress?.country}.</p>
                  </div>
                )}

                <button
                  className="btn btn-outline-warning"
                  onClick={editBillingAddress}
                >
                  Edit
                </button>
              </div>
              <div className="col-12 col-lg-6">
                <h3>Shipping Address</h3>
                {!user?.shipping_address && <p>No address available</p>}
                {user?.shipping_address && (
                  <div className="row m-auto lh-1 p-2">
                    <p>{shippingAddress?.name}</p>
                    <p>{shippingAddress?.street},</p>
                    <p>{shippingAddress?.area},</p>
                    <p>{shippingAddress?.city},</p>
                    <p>
                      {shippingAddress?.state + "," + shippingAddress?.pin_code},
                    </p>
                    <p>{shippingAddress?.country}.</p>
                  </div>
                )}
                <button
                  className="btn btn-outline-warning"
                  onClick={editShippingAddress}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <Toaster />
      {showAddressForm && (
        <AddressForm setShow={setShowAddressForm} formData={formData} />
      )}
    </div>
  );
};
