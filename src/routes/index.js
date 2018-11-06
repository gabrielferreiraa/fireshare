import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import Home from "containers/home";
import Entry from "containers/entry";
import Code from "containers/code";

const AuthenticatedRoutes = ({ isAuth }) =>
    isAuth ? (
        <Fragment>
            <Route path="/entry" component={Entry} />,
            <Route path="/code" component={Code} />
        </Fragment>
    ) : (
        <Redirect to="/" />
    );

const Routes = ({ history, isAuth = false }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <AuthenticatedRoutes isAuth={isAuth} />
        </Switch>
    </ConnectedRouter>
);

export default connect(({ user }) => ({
    isAuth: user.isAuthenticated
}))(Routes);
