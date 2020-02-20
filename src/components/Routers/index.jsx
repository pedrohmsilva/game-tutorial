import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Game, Simulator } from '../../pages';

const Routers = () => (
  <Switch>
    <Route path="/game">
      <Game />
    </Route>
    <Route path="/simulate">
      <Simulator />
    </Route>
  </Switch>
);

export default Routers;
