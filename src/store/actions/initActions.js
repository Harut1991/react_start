// @flow
import type { BaseAction } from '@models/index';
import types from '@store/types/init';

export const initApp = (): BaseAction => ({
  type: types.INIT_APP
});

export const initAppSuccess = ({ isLoggedIn, isReady }): BaseAction => ({
  type: types.INIT_APP_SUCCESS,
  payload: { isLoggedIn, isReady }
});

export const initAppError = (message: string): BaseAction => ({
  type: types.INIT_APP_ERROR,
  payload: message
});
