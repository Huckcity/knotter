import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./libs/contextLib";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referrer: props.location } }}
          />
        )
      }
    />
  );
}
