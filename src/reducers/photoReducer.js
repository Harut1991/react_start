// @flow
import types from '../action_types/photo';

const init = {
  data: null,
  load: false,
  errorMessage: null
};

export type photoReducerProp = {
    data: ?Array<any>,
    errorMessage: ?string,
    load: boolean
};

const photoReducer = (state: photoReducerProp = init, action) => {
  switch (action.type) {
    case types.GET_PHOTO_BEHIND:
      return {
        ...state,
        load: true,
        data: null
      };
    case types.GET_PHOTO_SUCCESS:
      return {
        ...state,
        load: false,
        data: action.data
      };
    case types.GET_PHOTO_ERROR:
      return {
        ...state,
        load: false,
        errorMessage: action.data
      };
    default:
      return state;
  }
};

export default photoReducer;
