import { takeLatest } from 'redux-saga/effects';
import initTypes from '../types/init';
import { fetchInit } from './initSage';

/**
 *
 */
function* sagas() {
  yield takeLatest(initTypes.INIT_APP, fetchInit);
}

export default sagas;
