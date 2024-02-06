import React from "react";
import Home from "../MainPage/Home";
import FlashDeals from "../flashDeals/FlashDeals";

const Pages = ({ productItems, addToCart, CartItem }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  );
};
export default Pages;
