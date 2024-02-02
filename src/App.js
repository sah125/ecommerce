import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import Pages from "./components/Pages/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
