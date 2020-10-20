// @flow
import types from '../types/init';
import { initAppState } from '../../utils/states';
import { ACTION_STATUSES } from '../../utils/actionStatus';

const initialState = {
  init: initAppState
};

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_APP:
      return {
        ...state,
        init: {
          ...state.init,
          status: ACTION_STATUSES.PENDING
        }
      };
    case types.INIT_APP_SUCCESS:
      return {
        ...state,
        init: {
          ...state.init,
          status: ACTION_STATUSES.SUCCEED,
          data: action.payload
        }
      };
    case types.INIT_APP_ERROR:
      return {
        ...state,
        init: {
          ...state.init,
          status: ACTION_STATUSES.FAILED,
          data: {
            isReady: true,
            isLoggedIn: false
          },
          error: action.payload
        }
      };
    case types.INIT_APP_CLEAR:
      return {
        ...state,
        init: initAppState
      };
    default:
      return state;
  }
};

export default initReducer;
