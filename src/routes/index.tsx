import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />

    {/*
      O sinal de + depois do parâmetro da rota indica que tudo o que vier no
      parâmatro faz parte da rota. Isso server para resolver problemas de rota
      tipo nome/da/rota */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
