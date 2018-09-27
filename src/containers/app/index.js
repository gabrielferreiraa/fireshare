import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/home';
import Entry from 'containers/entry';
import Code from 'containers/code';

const App = () => (
    <Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/entry' component={Entry} />
        <Route path='/code' component={Code} />
    </Fragment>
);

export default App;