import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';

export default (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/profile/main" component={Profile} />
        {/* <Route path="/friend/:name" />
        <Route path="/score/:id" /> */}
    </Switch>
);