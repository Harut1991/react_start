import types from '../action_types/comment';

export const getComments = (id: number) => {
    return {
        type: types.GET_COMMENT,
        id: id
    }
};

export const getCommentsBehind = (id) => {
  return {
      type: types.GET_COMMENT_BEHIND,
      data: id
  }
};

export const getCommentsSuccess = (data) => {
    return {
        type: types.GET_COMMENT_SUCCESS,
        data: data
    }
};

export const getCommentsError = (data) => {
    return {
        type: types.GET_COMMENT_ERROR,
        data: data
    }
};
