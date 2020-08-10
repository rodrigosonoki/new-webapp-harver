import React from "react";
import { Route, Switch } from "react-router-dom";

//PAGES
import Home from "../pages/Home";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
  </Switch>
);

export default Routes;
