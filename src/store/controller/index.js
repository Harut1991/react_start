import { takeLatest } from 'redux-saga/effects';
import initTypes from '@store/types/init';
import { fetchInit } from './initSage';

/**
 * @description saga
 * @return {IterableIterator<ForkEffect>}
 */
function* sagas() {
  yield takeLatest(initTypes.INIT_APP, fetchInit);
}

export default sagas;
