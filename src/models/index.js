// @flow

import { type ComponentType } from 'react';

export type RouteProps = {
    component: ComponentType<any>,
    path: string,
    exact:boolean
};

export type BaseAction = {
    type: string,
    payload?: any;
};

export type InitState = {
    data: any,
    error: ?string,
    status: string
};

export type InitStateModel = {
    init: InitState
};

export type InitDataModel = {
    isLoggedIn: boolean,
    isReady: boolean
};
