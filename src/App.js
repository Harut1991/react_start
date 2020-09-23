// @flow
import React from 'react';
import { NotificationContainer } from 'react-notifications';
import Routers from './routing/route';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <Routers />
      <NotificationContainer />
    </Layout>
  );
}

export default App;
