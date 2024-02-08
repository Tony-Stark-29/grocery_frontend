import React from "react";

export const ProductShimmer = () => {
  return (
    <section className=" container-fluid m-auto p-0 bg-white ">
      <div className="row m-auto" style={{ minHeight: "70vh" }}>
        <div className="shimmer col-12 col-md-6 p-0 ">
          <div className=" row m-auto p-4">
            <div className=" shimmer col-12 col-md-6 w-25 rounded-5"></div>
          </div>
        </div>
        <div className="shimmer  col-12 col-md-6 p-4 ">
           
          <div className="row w-50">
        
          </div>
        </div>
      </div>
      <div
        className="row Vh-50 m-auto border border-top "
        style={{ minHeight: "50vh" }}
      >
        <div className="shimmer  col-12 col-md-6 p-4">
         
        </div>
        <div className="shimmer  col-12 col-md-6 p-4 border border-left">
          
        </div>
      </div>
    </section>
  );
};
