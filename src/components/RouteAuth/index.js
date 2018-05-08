import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

class RouteAuth extends Component {
  render() {
    let { canAccess, component, path, name, exact, strict } = this.props;
    let routeProps = {
      path,
      component,
      name,
      exact,
      strict
    };

    return canAccess ? <Route {...routeProps} /> : <Redirect to="/signin" />;
  }
}

export default RouteAuth;
