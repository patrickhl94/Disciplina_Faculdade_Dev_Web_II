import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
