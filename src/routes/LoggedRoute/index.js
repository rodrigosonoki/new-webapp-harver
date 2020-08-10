import React from "react";
import { isAuthenticated } from "../../utils/auth";
import { Route, Redirect } from "react-router-dom";

const LoggedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect
          to={{ pathname: "/dashboard", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default LoggedRoute;
