import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import PasswordForgetPage from "../PasswordForget/index";
import HomePage from "../Home";
import AccountPage from "../Account";
import Module from "../Module";
import * as ROUTES from "../../constants/routes";

import { withAuthentication } from "../Session";
import Course from "../Course";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.MODULE} component={Module} />
      <Route path={ROUTES.COURSE} component={Course} />
    </div>
  </Router>
);

export default withAuthentication(App);
