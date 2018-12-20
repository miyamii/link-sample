import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './templates/index';
import To from './templates/to';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/to' component={To} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;