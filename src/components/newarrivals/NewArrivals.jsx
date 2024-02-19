import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d-flex">
            <div className="heading-left row  f-flex">
              <img
                src="https://img.icons8.com/windows/32/fa314a/gift.png"
                alt=""
              />
              <h2>New Arrivals</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
};
export default NewArrivals;
