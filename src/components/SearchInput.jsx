import React, { useState, useEffect } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import { useLocation, useParams } from "react-router-dom";
import Error from "./Error";
import SearchItem from "./SearchItem";

const SearchInput = () => {
  const { name } = useParams();

  const [input, setInput] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, []);

  const fetchSearch = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();

    setInput(meals);
  };

  return (
    <div className=" mt-5 p-5 row g-4 gap-5 justify-content-center align-items-center">
      {input?.map((item) => {
        return <SearchItem key={item.idMeal} item={item} />;
      })}
    </div>
  );
};

export default SearchInput;
