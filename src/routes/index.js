import React from "react";
import { Route, Switch } from "react-router-dom";

//PAGES
import Home from "../pages/Home";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Store from "../pages/Store";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Profile from "../pages/Profile";

//CONTEXTS
import FilterProvider from "../store/useFilter";
import NavProvider from "../store/useNav";
import UserProvider from "../store/useUser";

const Routes = () => (
  <Switch>
    <NavProvider>
      <UserProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/products/:id" exact={true} component={Product} />
        <Route path="/orders/:id" exact={true} component={Order} />
        <Route path="/store" exact={true} component={Store} />
        <Route path="/account" exact={true} component={Profile} />
        <FilterProvider>
          <Route path="/orders" exact={true} component={Orders} />
          <Route path="/products" exact={true} component={Products} />
        </FilterProvider>
      </UserProvider>
    </NavProvider>
  </Switch>
);

export default Routes;
