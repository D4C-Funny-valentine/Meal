import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();

  const [meals, setMeals] = useState({});

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(ingredients);
  }, [meals]);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    console.log(meals);
    setMeals(meals[0]);
  };

  const ingredients = [
    {
      id: 1,
      ingredient: meals.strIngredient1,
    },
    {
      id: 2,
      ingredient: meals.strIngredient2,
    },
    {
      id: 3,
      ingredient: meals.strIngredient3,
    },
    {
      id: 4,
      ingredient: meals.strIngredient4,
    },
    {
      id: 5,
      ingredient: meals.strIngredient5,
    },
    {
      id: 6,
      ingredient: meals.strIngredient6,
    },
    {
      id: 7,
      ingredient: meals.strIngredient7,
    },
    {
      id: 8,
      ingredient: meals.strIngredient8,
    },
    {
      id: 9,
      ingredient: meals.strIngredient9,
    },
    {
      id: 10,
      ingredient: meals.strIngredient10,
    },
    {
      id: 11,
      ingredient: meals.strIngredient11,
    },
    {
      id: 12,
      ingredient: meals.strIngredient12,
    },
    {
      id: 13,
      ingredient: meals.strIngredient13,
    },
    {
      id: 14,
      ingredient: meals.strIngredient14,
    },
    {
      id: 15,
      ingredient: meals.strIngredient15,
    },
    {
      id: 16,
      ingredient: meals.strIngredient16,
    },
    {
      id: 17,
      ingredient: meals.strIngredient17,
    },
    {
      id: 18,
      ingredient: meals.strIngredient18,
    },
    {
      id: 19,
      ingredient: meals.strIngredient19,
    },
    {
      id: 20,
      ingredient: meals.strIngredient20,
    },
  ];

  return (
    <div className="row detail justify-content-center align-items-center mt-lg-5 pt-lg-5">
      <div className="col-12 col-md-5 col-lg-6 my-3 py-5 text-center text-lg-start">
        <img src={meals.strMealThumb} className="img-detail" alt="" />
      </div>
      <div className=" col-11 col-md-7 col-lg-5 mt-lg-0 mt-3">
        <div className=" mb-3 pb-2 border-1 border-bottom">
          <h4 className=" text-black d-inline">{meals.strMeal} </h4>
          <span className="bg-secondary badge small ms-2 fs-6 rounded px-2 text-light">
            {meals.strCategory}
          </span>
        </div>
        <span className=" fs-4 border-1 border-dark border-bottom">
          {meals.strArea}
        </span>

        <div className=" lh-lg text-black-50 mt-3">
          <p>{meals.strInstructions}</p>
        </div>

        <a href={meals.strYoutube} className="btn p-0 m-0 bg-transparent">
          <BsYoutube className="text-danger display-6" />
        </a>

        <div className="mt-3">
          <span className=" fs-5 pb-1 border-1 border-dark border-bottom">Ingredient</span>
          <ul className=" d-flex flex-wrap p-0 mt-3">
            {items.map((item) => {
              console.log(item);
              if (item.ingredient) {
                return (
                  <li key={item.id} className=" mx-3 my-2">
                    {item.ingredient}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
