import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../action_types/photo';
import {fetchPhotoCall} from "./calls/calls";

export function* fetchPhoto(action) {
    try {
        yield put({type: types.GET_PHOTO_BEHIND});
        const user = yield call(fetchPhotoCall, action);
        yield put({type: types.GET_PHOTO_SUCCESS, data: user});
    } catch (e) {
        yield put({type: types.GET_PHOTO_ERROR, data: e.message});
    }
}

function* photoSaga() {
    yield takeLatest(types.GET_PHOTO, fetchPhoto);
}

export default photoSaga;
