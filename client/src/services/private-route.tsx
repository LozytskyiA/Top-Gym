import React, { FC } from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

export const PrivateRoute: FC<any> = ({ children, ...rest }) =>  {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      children.props.store.auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}