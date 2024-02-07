import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero-container  container py-1   py-lg-5 overflow-hidden">
      <div className=" d-flex flex-column flex-lg-row justify-content-evenly justify-content-xl-center align-items-center m-auto">
        <div className="col-12 col-lg-4  p-2 p-md-4 shadow rounded hero-card hero-align-left">
          <h3 className="display-6 text-left">
            Tasty Vegetables <br /> from Farm Vendors
          </h3>
          <p>Every Fridays Check Best Market Deals!</p>
          <button className="btn-filled-primary px-4 rounded-5">Check Now</button>
        </div>

        <div className="col-12 col-lg-4 p-2 p-md-4  shadow rounded hero-card hero-align-left">
          <h3 className="display-6 text-left">
            Fresh Dairy prducts & Cheeses
          </h3>
          <p>From Nearby Farms</p>
          <button className="btn-filled-primary px-4 rounded-5">Check Now</button>
        </div>

        <div className="col-12 col-lg-4 p-2 p-md-4  shadow rounded hero-card hero-align-left">
          <h3 className="display-6 text-left">Delicious Fruits from Farms</h3>
          <p>Fresh & Non GMO Sweet Fruits</p>
          <button className="btn-filled-primary px-4 rounded-5">Check Now</button>
        </div>
      </div>
    </section>
  );
};
