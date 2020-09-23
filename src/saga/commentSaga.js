// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../action_types/comment';
import { fetchCommentCall } from './calls/calls';

export function* fetchComment(action) {
  try {
    yield put({ type: types.GET_COMMENT_BEHIND, id: action.id });
    const comment = yield call(fetchCommentCall, action);
    yield put({ type: types.GET_COMMENT_SUCCESS, data: comment, id: action.id });
  } catch (e) {
    yield put({ type: types.GET_COMMENT_ERROR, data: e.message, id: action.id });
  }
}

function* commentSaga() {
  yield takeLatest(types.GET_COMMENT, fetchComment);
}

export default commentSaga;
