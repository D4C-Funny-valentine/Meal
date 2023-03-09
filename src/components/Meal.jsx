import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import MealCart from "./MealCart";

const Meal = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setMeals(meals);
    // console.log(meals)
  };

  return (
    <div className="">
      <Hero />
      <div className="container">
        <div className="row justify-content-center align-items-center g-5 my-5 pt-5">
          {meals?.map((meal) => {
            return (
              <MealCart
                key={meal.idMeal}
                name={meal.strMeal}
                img={meal.strMealThumb}
                id={meal.idMeal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meal;
