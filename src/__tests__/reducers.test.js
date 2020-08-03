import userTypes from '../action_types/user';
import React from "react";
import userReducer from "../reducers/userReducer";

test('user reducer', () => {
    expect(userReducer(undefined, {})).toEqual(
        {
            data: null,
            errorMessage: null,
            load: false
        }
    )
});

test('user reducer behind', () => {
    expect(userReducer(undefined, {
        type: userTypes.GET_USER_BEHIND
    })).toEqual(
        {
            data: null,
            errorMessage: null,
            load: true
        }
    )
});

test('user reducer success', () => {
    expect(userReducer(undefined, {
        type: userTypes.GET_USER_SUCCESS,
        data: [{}]
    })).toEqual(
        {
            data: [{}],
            errorMessage: null,
            load: false
        }
    )
});

test('user reducer error', () => {
    expect(userReducer(undefined, {
        type: userTypes.GET_USER_ERROR,
        data: 'error'
    })).toEqual(
        {
            data: null,
            errorMessage: 'error',
            load: false
        }
    )
});


