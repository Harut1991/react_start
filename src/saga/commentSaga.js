import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../action_types/comment';

function* fetchComment(action) {
    try {
        yield put({type: types.GET_COMMENT_BEHIND, id: action.id});
        const user = yield fetch(`${process.env.REACT_APP_API_URL}comments?postId=${action.id}`).then((response) => response.json());
        yield put({type: types.GET_COMMENT_SUCCESS, data: user, id: action.id});
    } catch (e) {
        yield put({type: types.GET_COMMENT_ERROR, data: e.message, id: action.id});
    }
}

function* commentSaga() {
    yield takeLatest(types.GET_COMMENT, fetchComment);
}

export default commentSaga;
