import React from "react";
import service_boy from "../../resources/service-boy.webp";


export const Moto = () => {
  return (
    <section className="container moto-container p-4 my-4 overflow-hidden">
      <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="text-center">
          <h2 className="h2 fw-bold  ">We Prioritize Organic Products</h2>
          <p className="w-75 mx-auto my-3 " >
            Were you aware that non-organic items can contain substantial
            pesticide residues and artificial preservatives? That's why we
            emphasize sourcing organic items. They not only offer a more
            delightful taste but also contribute to maintaining healthier soils
            and promoting biodiversity.
          </p>
          <p className="w-75 mx-auto my-3 text-justify">
            Our commitment to quality is evident in our strict standards, with
            over 500 ingredients on our "never" list. From artificial food dyes
            to additives, we scrutinize every product we produce and sell to
            ensure they are not only healthy for you but also for the
            environment.
          </p>
          <button className="btn btn-primary">Know More</button>
        </div>
        <div>
            <img src={service_boy} alt="service"  className="img-fluid"/>
        </div>
      </div>
    </section>
  );
};
