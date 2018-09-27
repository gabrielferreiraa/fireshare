import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../home';
import Entry from '../entry';
import Code from '../code';

const App = () => (
    <Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/entry' component={Entry} />
        <Route path='/code' component={Code} />
    </Fragment>
);

export default App;