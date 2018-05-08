import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from '../../constants/routes';
import RouteAuth from '../RouteAuth';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';

const Main = () => (
  <main>
    <Switch>
      <RouteAuth exact path={routes.ROOT} component={HomePage} />
      <RouteAuth exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
    </Switch>
  </main>
);

export default Main;
