import React from "react";
import "./MealCart.css";

const Hero = () => {
  return (
    <div className="container-fluid img-bgc bg-black">
      <div className="row justify-content-around px-0 px-lg-5 align-items-center h-100">
        <div className="col-9 col-lg-7 animate__animated animate__fadeInLeft">
          <div className=" text-start px-2">
            <h3 className="text-light mb-3 fw-bold">
              Food is symbolic of love when words are inadequate.
            </h3>
            <p className="text-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, nemo! Iure odio ratione esse asperiores!
            </p>
            <div className="">
              <button className="btn btn-color">
                Order Now <i className="bi bi-arrow-right text-center"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-3 col-lg-4"></div>
      </div>
    </div>
  );
};

export default Hero;
