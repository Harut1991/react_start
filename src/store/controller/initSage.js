// @flow
import { put } from 'redux-saga/effects';
import {initAppError, initAppSuccess} from '../actions/initActions';
import Api from '../api';

const delay = time => new Promise(resolve => setTimeout(resolve, time));
/**
 *
 */
export function* fetchInit() {
  try {
    // const { data } = yield Api.getTest({ userId: 2 });
    yield delay(2000)
    yield put(initAppSuccess({ isLoggedIn: true, isReady: true }));
  } catch (e) {
    yield yield put(initAppError('{ isLoggedIn: false, isReady: false }'));
  }
}
