import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';

import * as serviceWorker from '@utils/serviceWorker';
import Routers from '@routing';
import store from '@store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
      <NotificationContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
