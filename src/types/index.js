// @flow

export type BaseAction = {
    type: string,
    payload?: any;
};

export type InitState = {
    data: any,
    error: ?string,
    status: string
};
