import React, {Suspense} from 'react';
import { Switch, Route } from "react-router-dom";
import urls from './routers';

function Routers() {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                {urls.map((res, index) => {
                   const children = res.children;
                   if (children){
                       delete res.children;
                   }
                   return (
                       <>
                           <Route key={index} {...res} />
                           {children && children.map((result, ind) => {
                                result.path = res.path + result.path;
                                return <Route key={`${index}_${ind}`} {...result} />
                           })}
                       </>
                   )
                })}
            </Suspense>
        </Switch>
    );
}

export default Routers;
