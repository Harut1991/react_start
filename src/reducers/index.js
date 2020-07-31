import userReducer from "./userReducer";
import { combineReducers } from 'redux'
import postReducer from "./postReducer";
import albumReducer from "./albumReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
    userReducer,
    postReducer,
    photoReducer,
    albumReducer
})
