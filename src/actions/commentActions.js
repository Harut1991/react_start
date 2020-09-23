// @flow
import types from '../action_types/comment';

export const getComments = (id: number) => ({
  type: types.GET_COMMENT,
  id
});

export const getCommentsBehind = (id) => ({
  type: types.GET_COMMENT_BEHIND,
  data: id
});

export const getCommentsSuccess = (data) => ({
  type: types.GET_COMMENT_SUCCESS,
  data
});

export const getCommentsError = (data) => ({
  type: types.GET_COMMENT_ERROR,
  data
});
