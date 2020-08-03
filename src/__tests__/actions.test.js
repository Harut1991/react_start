import userTypes from '../action_types/user';
import postTypes from '../action_types/post';
import {getUsersSuccess} from "../actions/userActions";
import React from "react";
import {getPostsSuccess} from "../actions/postActions";

test('action getUsersSuccess', () => {
    const expectedAction = {
        type: userTypes.GET_USER_SUCCESS,
        data: {}
    }
    expect(getUsersSuccess({})).toEqual(expectedAction)
});

test('action getPostsSuccess', () => {
    const expectedAction = {
        type: postTypes.GET_POST_SUCCESS,
        data: {}
    }
    expect(getPostsSuccess({})).toEqual(expectedAction)
});
