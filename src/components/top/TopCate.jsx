import React from "react";
import TopCart from "./TopCart";
import "./Style.css";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading d-flex">
            <div className="heading-left row  f-flex">
              <i className="fa-solid fa-border-all"></i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};
export default TopCate;
