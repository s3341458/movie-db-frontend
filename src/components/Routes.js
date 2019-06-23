import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { WithAuth } from '../containers';
import { Auth } from './Auth';
import { ListPage } from './ListPage';
import { SearchPage } from './SearchPage';
import { Approve } from './Approve';
import { NotFound } from './NotFound';

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const AuthenticatedRoute = ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cProps.requestToken && cProps.requestTokenApproved ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${
            props.location.search
          }`}
        />
      )
    }
  />
);

const UnauthenticatedRoute = ({ component: C, props: cProps, ...rest }) => {
  const redirect = querystring("redirect");
  return (
    <Route
      {...rest}
      render={props =>
        !cProps.requestToken || !cProps.requestTokenApproved ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect
            to={redirect === "" || redirect === null ? "/" : redirect}
          />
        )
      }
    />
  );
};

const RoutesView = props => (
  <Switch>
    <UnauthenticatedRoute exact path="/login" component={Auth} props={props}/>
    <Route exact path="/approve" component={Approve} props={props}/>
    <AuthenticatedRoute path="/search" component={SearchPage} props={props}/>
    <AuthenticatedRoute path="/list" component={ListPage} props={props}/>
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);

const Routes = WithAuth(RoutesView)

export { Routes };
