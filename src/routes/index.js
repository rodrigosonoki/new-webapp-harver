import React from "react";
import { Route, Switch } from "react-router-dom";

//PAGES
import Home from "../pages/Home";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";
import Product from "../pages/Product";
import Order from "../pages/Order";

//CONTEXTS
import FilterProvider from "../store/useFilter";
import NavProvider from "../store/useNav";

const Routes = () => (
  <Switch>
    <NavProvider>
      <Route path="/" exact={true} component={Home} />
      <Route path="/users" exact={true} component={Users} />
      <Route path="/products/:id" exact={true} component={Product} />
      <Route path="/orders/:id" exact={true} component={Order} />
      <FilterProvider>
        <Route path="/orders" exact={true} component={Orders} />
        <Route path="/products" exact={true} component={Products} />
      </FilterProvider>
    </NavProvider>
  </Switch>
);

export default Routes;
