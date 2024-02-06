import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashCard = ({ productItems }) => {
  return (
    <>
      {productItems.map((productItems) => {
        return (
          <div className="box" key={productItems.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{productItems.discount}% Off</span>
                <img src={productItems.cover} alt="" />
                <div className="product-like">
                  <label>{}</label> <br />
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{productItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>R{productItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlashCard;
