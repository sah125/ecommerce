import React from "react";
import Home from "../MainPage/Home";
import FlashDeals from "../flashDeals/FlashDeals";

const Pages = ({ productItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
    </>
  );
};
export default Pages;
