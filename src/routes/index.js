import React from "react";
import { Route, Switch } from "react-router-dom";

//PAGES
import Home from "../pages/Home";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/products" exact={true} component={Products} />
    <Route path="/orders" exact={true} component={Orders} />
    <Route path="/users" exact={true} component={Users} />
  </Switch>
);

export default Routes;
