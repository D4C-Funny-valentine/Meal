import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";

const App = () => {
  return (
    <div className="bgc-mom container-fluid p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:name" element={<SearchInput />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer className="mt-auto top-100" />
    </div>
  );
};

export default App;
