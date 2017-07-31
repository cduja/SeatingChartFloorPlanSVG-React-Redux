import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotReadyPage from 'containers/NotReadyPage';
import { Layout } from 'components';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/admin-panel" />
          <Route path="/admin-panel" component={HomePage} />
          <Route path="*" component={HomePage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
