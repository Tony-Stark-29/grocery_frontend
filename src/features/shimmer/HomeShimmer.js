import React from "react";
import "./shimmer.css";
export const HomeShimmer = () => {
  return (
    <>
      <section className=" my-3 bg-black-25 m-0 p-0  ">
        <div className="row m-auto ">
          <div className=" col-12 col-lg-4 ">
            <div className="shimmer" style={{minHeight:"50vh"}}> </div>
          </div>
          <div className="col-12 col-lg-4 ">
            <div className="shimmer" style={{minHeight:"50vh"}}></div>
          </div>
          <div className="col-12 col-lg-4 ">
            <div className="shimmer" style={{minHeight:"50vh"}}></div>
          </div>
        </div>
      </section>
      <section className=" my-3 bg-black-25 m-0 p-0"  >
        <div className=" row m-auto" >
        <div className=" col-12 col-lg-3">
            <div className="d-flex flex-column align-items-center justify-content-center"  style={{minHeight:"200px"}}>
              <div className="shimmer " style={{width:"50px",height:"50px"}} ></div>
              <div className="shimmer w-50 my-2" style={{ height:"25px"}}></div>
              <div className="shimmer w-75" style={{ height:"15px"}}></div>
              
            </div>
          </div> <div className=" col-12 col-lg-3">
            <div className="d-flex flex-column align-items-center justify-content-center"  style={{minHeight:"200px"}}>
              <div className="shimmer " style={{width:"50px",height:"50px"}} ></div>
              <div className="shimmer w-50 my-2" style={{ height:"25px"}}></div>
              <div className="shimmer w-75" style={{ height:"15px"}}></div>
              
            </div>
          </div> <div className=" col-12 col-lg-3">
            <div className="d-flex flex-column align-items-center justify-content-center"  style={{minHeight:"200px"}}>
              <div className="shimmer " style={{width:"50px",height:"50px"}} ></div>
              <div className="shimmer w-50 my-2" style={{ height:"25px"}}></div>
              <div className="shimmer w-75" style={{ height:"15px"}}></div>
              
            </div>
          </div> <div className=" col-12 col-lg-3">
            <div className="d-flex flex-column align-items-center justify-content-center"  style={{minHeight:"200px"}}>
              <div className="shimmer " style={{width:"50px",height:"50px"}} ></div>
              <div className="shimmer w-50 my-2" style={{ height:"25px"}}></div>
              <div className="shimmer w-75" style={{ height:"15px"}}></div>
              
            </div>
          </div>
          
        </div>
      </section>
      <section className=" my-3 bg-black-25">
        <div className="shimmer" style={{minHeight:"100vh"}}></div>
      </section>
      <section className=" my-3 bg-black-25">
        <div className="shimmer" style={{minHeight:"50vh"}}></div>
      </section>
      <section className=" my-3 bg-black-25">
        <div className="shimmer" style={{minHeight:"50vh"}}></div>
      </section>
    </>
  );
};
