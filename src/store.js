import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import userSaga from "./saga/userSaga";
import postSaga from "./saga/postSaga";
import albumSaga from "./saga/albumSaga";
import photoSaga from "./saga/photoSaga";
import commentSaga from "./saga/commentSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(userSaga)
sagaMiddleware.run(postSaga)
sagaMiddleware.run(albumSaga)
sagaMiddleware.run(commentSaga)
sagaMiddleware.run(photoSaga)

export default store;
