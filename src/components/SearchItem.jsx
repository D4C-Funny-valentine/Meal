import React from "react";
import "./MealCart.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="col-8 col-md-4 col-lg-3 mb-4 mb-lg-0 animate__animated animate__bounceInUp">
      <div className="card card-contain shadow">
        <Link to={`/detail/${item.idMeal}`} className="text-light">
          <img src={item.strMealThumb} className="img-container w-100" alt="" />
        </Link>

        <div className="card-body">
          <h5>{item.strMeal}</h5>
          <p>{item.strArea}</p>

          <div className="">
              <button className="btn btn-search-order">
                Order Now <i className="bi bi-arrow-right text-center"></i>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
