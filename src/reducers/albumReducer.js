// @flow
import types from '../action_types/album';

const init = [];

export type albumReducerProp = {
    data: ?Array<any>,
    errorMessage: ?string,
    load: boolean
};

const albumReducer = (state: albumReducerProp = init, action) => {
  const stateClone = [...state];
  switch (action.type) {
    case types.GET_ALBUM_BEHIND:
      stateClone[action.id] = {
        data: undefined,
        errorMessage: undefined,
        load: true
      };
      return stateClone;
    case types.GET_ALBUM_SUCCESS:
      stateClone[action.id] = {
        load: false,
        data: action.data,
        errorMessage: undefined
      };
      return stateClone;
    case types.GET_ALBUM_ERROR:
      stateClone[action.id] = {
        load: false,
        data: undefined,
        errorMessage: action.data
      };
      return stateClone;
    default:
      return state;
  }
};

export default albumReducer;
