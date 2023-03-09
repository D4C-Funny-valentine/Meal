import React, { useEffect, useState } from "react";

const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchSearch = async (value) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const data = await api.json();
    const meals = data.meals;
    // console.log(meals);
    const results = meals.filter((user) => {
      return (
        value &&
        user &&
        user.strMeal &&
        user.strMeal.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };

  const handlerChange = (v) => {
    setInput(v);
    fetchSearch(v);
  };

  return (
    <form className="d-flex ms-auto" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          e.preventDefault();
          handlerChange(e.target.value);
        }}
      />
      <button
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
