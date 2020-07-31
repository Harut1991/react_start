import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../action_types/user';

function* fetchUser() {
    try {
        yield put({type: types.GET_USER_BEHIND});
        const user = yield fetch(`${process.env.REACT_APP_API_URL}users`).then((response) => response.json());
        yield put({type: types.GET_USER_SUCCESS, data: user});
    } catch (e) {
        yield put({type: types.GET_USER_ERROR, data: e.message});
    }
}

function* userSaga() {
    yield takeLatest(types.GET_USER, fetchUser);
}

export default userSaga;
