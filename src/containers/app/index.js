import React, { Fragment } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

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

const App = props => (
    <Fragment>
        <Route exact path="/" component={Home} />
        <AuthenticatedRoutes isAuth={props.isAuth} />
    </Fragment>
);

const mapStateToProps = ({ user }) => ({
    isAuth: user.isAuthenticated
});
export default withRouter(connect(mapStateToProps)(App));
