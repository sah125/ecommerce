import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./common/header/Header";
import Pages from "./components/Pages/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";

const App = () => {
  const productItems = Data.productItems;
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart CartItem={CartItem} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
