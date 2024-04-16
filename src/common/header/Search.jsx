import React, { useState } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  // Event listener for scrolling
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className={`search ${searchActive ? "active" : ""}`}>
        <div className="container c-flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f-flex">
            <i className="fa fa-search" onClick={toggleSearch}></i>
            <input
              type="text"
              placeholder="Search and hit enter..."
              style={{ display: searchActive ? "block" : "none" }}
            />
            <span>All Category</span>
          </div>

          <div className="icon f-flex width">
            <i className="fa fa-user  icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
