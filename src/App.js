import React from 'react';
import Routers from "./routing/route";
import Layout from "./layout";
import {NotificationContainer} from "react-notifications";

function App() {
  return (
      <Layout>
           <Routers />
           <NotificationContainer/>
      </Layout>
  );
}


export default App;
