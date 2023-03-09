import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./MealCart.css";

const MealCart = ({ name, img, id }) => {
  // console.log(name, img, id);
  return (
    <div className="col-8 col-md-4 col-lg-3 animate__animated animate__fadeInUp">
      <div className="card card-contain shadow">
        <div className="">
        <img src={img} className="w-100 position-relative" alt="" />
        <Link to={`/detail/${id}`} className="text-light">
          <p className=" search-color rounded-circle d-flex justify-content-center align-items-center position-absolute">
            <BsSearch className=" fs-4" />
          </p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCart;
