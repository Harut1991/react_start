import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
var observer = new PerformanceObserver(list => {
    let result = 0;
    list.getEntries().forEach(entry => {
            console.log("Name: "       + entry.name      +
                ", Type: "     + entry.entryType +
                ", Start: "    + entry.startTime +
                ", Duration: " + entry.duration  + "\n");
        result+= entry.duration;
    })
    console.log(result)
});
observer.observe({entryTypes: ['resource', 'mark', 'measure']});
performance.mark('registered-observer');
