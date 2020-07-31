import types from '../action_types/user';

export const getUser = () => {
    return {
        type: types.GET_USER,
    }
};

export const getUsersBehind = () => {
  return {
      type: types.GET_USER_BEHIND,
  }
};

export const getUsersSuccess = (data) => {
    return {
        type: types.GET_USER_SUCCESS,
        data: data
    }
};

export const getUsersError = (data) => {
    return {
        type: types.GET_USER_ERROR,
        data: data
    }
};
