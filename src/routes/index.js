import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Ranking from '../pages/Ranking';
import Config from '../pages/Config';
import Feedback from '../pages/Feedback';

const AppRoutes = () => (
  <Switch>
    <Route path="/ranking" render={ (props) => <Ranking { ...props } /> } />
    <Route path="/feedback" render={ (props) => <Feedback { ...props } /> } />
    <Route path="/game" component={ Game } />
    <Route path="/config" component={ Config } />
    <Route exact path="/" component={ Login } />
  </Switch>
);

export default AppRoutes;
