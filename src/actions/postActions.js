// @flow
import types from '../action_types/post';

export const getPosts = (id: number) => ({
  type: types.GET_POST,
  id
});

export const getPostsBehind = () => ({
  type: types.GET_POST_BEHIND
});

export const getPostsSuccess = (data) => ({
  type: types.GET_POST_SUCCESS,
  data
});

export const getPostsError = (data) => ({
  type: types.GET_POST_ERROR,
  data
});

export const editPost = (id, body) => ({
  type: types.EDIT_POST,
  id,
  body
});
