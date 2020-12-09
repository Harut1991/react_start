// @flow
import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import urls from './routers';
import type { RouteProps } from '../../models';

const Routers = () => (
  <Router>
    {urls.map(item => item.routers.map(({ component: Component, path, exact }: RouteProps) => (
      <Route
        key={path}
        path={path}
        exact={!!exact}
        render={() => (
          <item.Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          </item.Layout>
        )}
      />
    )))}
  </Router>
);

export default Routers;
