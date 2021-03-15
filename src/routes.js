import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import Score from './components/Score/Score';

export default (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/profile/main" component={Profile} />
        <Route path="/friend/score" component={Score}/>
        {/* <Route path="/score/:id" /> */}
    </Switch>
);