import React, { useRef, useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const nav = useNavigate();

  const [input,setInput] = useState('');

  const submitHandler = () => {
    nav(`/search/${input}`)
  }


  return (
    <div className="mb-5 pb-5">
      <nav
        className="navbar mb-5 fixed-top bg-white navbar-expand-lg shadow-sm bg-body-tertiary"
        style={{ zIndex: "1000" }}
      >
        <div className="container">
          <Link to={"/"} className="navbar-brand" href="#">
            <GiKnifeFork className=" display-5" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <form onSubmit={submitHandler} className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-outline-dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
