import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../action_types/album';

function* fetchAlbum(action) {
    try {
        console.log(process.env.REACT_APP_API_URL)
        yield put({type: types.GET_ALBUM_BEHIND, id: action.id});
        const user = yield fetch(`${process.env.REACT_APP_API_URL}albums?userId=${action.id}`).then((response) => response.json());
        yield put({type: types.GET_ALBUM_SUCCESS, data: user, id: action.id});
    } catch (e) {
        yield put({type: types.GET_ALBUM_ERROR, data: e.message, id: action.id});
    }
}

function* albumSaga() {
    yield takeLatest(types.GET_ALBUM, fetchAlbum);
}

export default albumSaga;
