// @flow
import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import urls from './routers';

const Routers = () => (
  <Router>
    {urls.map(item => item.routers.map(({ component: Component, ...rest }) => (
      <Route
        key={rest.path}
        {...rest}
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
