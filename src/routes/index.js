import React from "react";
import { Route, Switch } from "react-router-dom";

//PAGES
import Home from "../pages/Home";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

//CONTEXTS
import FilterProvider from "../store/useFilter";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/orders" exact={true} component={Orders} />
    <Route path="/users" exact={true} component={Users} />
    <FilterProvider>
      <Route path="/products" exact={true} component={Products} />
    </FilterProvider>
  </Switch>
);

export default Routes;
