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
    <FilterProvider>
      <Route path="/products" exact={true} component={Products} />
    </FilterProvider>
    <Route path="/orders" exact={true} component={Orders} />
    <Route path="/users" exact={true} component={Users} />
  </Switch>
);

export default Routes;
