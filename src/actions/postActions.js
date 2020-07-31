import types from '../action_types/post';

export const getPosts = (id: number) => {
    return {
        type: types.GET_POST,
        id: id
    }
};

export const getPostsBehind = () => {
  return {
      type: types.GET_POST_BEHIND,
  }
};

export const getPostsSuccess = (data) => {
    return {
        type: types.GET_POST_SUCCESS,
        data: data
    }
};

export const getPostsError = (data) => {
    return {
        type: types.GET_POST_ERROR,
        data: data
    }
};
