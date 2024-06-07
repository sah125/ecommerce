import React, { useState, useRef } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      // If search is becoming active, focus on the input
      setSearchValue(""); // Clear search input value
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue(""); // Clear search input value
    setSearchActive(false); // Deactivate search
  };

  return (
    <>
      <section className={`search ${searchActive ? "active" : ""}`}>
        <div className="container c-flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-center">
            {searchActive ? (
              <i className="fa fa-arrow-left" onClick={clearSearch}></i>
            ) : (
              <i className="fa fa-search" onClick={toggleSearch}></i>
            )}
          </div>
          <div className={`search-box f-flex ${searchActive ? "active" : ""}`}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search and hit enter..."
              value={searchValue}
              onChange={handleInputChange}
            />
            <span>All Category</span>
          </div>
          <div className="icon f-flex width">
            <i className="fa fa-user icon-circle"></i>
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
