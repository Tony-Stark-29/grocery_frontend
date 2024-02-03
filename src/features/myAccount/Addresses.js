import React, { useEffect, useState } from "react";
import { AddressForm } from "./AddressForm";
import { useUserContext } from "../../hooks/useUserContext";

export const Addresses = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);

  const [billingAddress,setBillingAddress]=useState('');
  const [shippingAddress,setShippingAddress]=useState('');

  const {user}=useUserContext();
  useEffect(()=>{

    if(user?.shippingAddress)
    {
      setShippingAddress(user?.shippingAddress)
    }
    if(user?.billingAddress)
    {
      setBillingAddress(user?.billingAddress)
    }

  },[user])
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
                <p>No address available</p>
                <button className="btn btn-outline-warning">Edit</button>
              </div>
              <div className="col-12 col-lg-6">
                <h3>Shipping Address</h3>
                <p>No address available</p>
                <button className="btn btn-outline-warning" onClick={()=>setShowAddressForm(true)}>Edit</button>
              </div>
            </div>
          </div>
        </>
      )}

      {showAddressForm && <AddressForm setShow={setShowAddressForm}  />}
    </div>
  );
};
