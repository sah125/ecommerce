import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./common/header/Header";
import Pages from "./components/Pages/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/Data";

const App = () => {
  const productItems = Data.productItems;
  const [CartItem, setCartItem] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
