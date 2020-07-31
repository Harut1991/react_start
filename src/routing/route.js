import React, {Suspense} from 'react';
import { Switch, Route } from "react-router-dom";
import urls from './routers';

function Routers() {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                {urls.map((res, index) => <Route key={index} {...res} />)}
            </Suspense>
        </Switch>
    );
}


export default Routers;
