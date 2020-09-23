// @flow
import types from '../action_types/user';

export const getUser = () => ({
  type: types.GET_USER
});

export const getUsersBehind = () => ({
  type: types.GET_USER_BEHIND
});

export const getUsersSuccess = (data) => ({
  type: types.GET_USER_SUCCESS,
  data
});

export const getUsersError = (data) => ({
  type: types.GET_USER_ERROR,
  data
});
