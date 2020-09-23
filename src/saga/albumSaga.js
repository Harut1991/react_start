// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../action_types/album';
import { fetchAlbumCall } from './calls/calls';

export function* fetchAlbum(action) {
  try {
    yield put({ type: types.GET_ALBUM_BEHIND, id: action.id });
    const user = yield call(fetchAlbumCall, action);
    yield put({ type: types.GET_ALBUM_SUCCESS, data: user, id: action.id });
  } catch (e) {
    yield put({ type: types.GET_ALBUM_ERROR, data: e.message, id: action.id });
  }
}

function* albumSaga() {
  yield takeLatest(types.GET_ALBUM, fetchAlbum);
}

export default albumSaga;
