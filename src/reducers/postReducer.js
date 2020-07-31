import types from '../action_types/post';
import commentTypes from '../action_types/comment';

const init = {
    data: null,
    load: false,
    errorMessage: null
};

export type postReducerProp = {
    data: ?Array<any>,
    errorMessage: ?string,
    load: boolean
};

const postReducer = (state: postReducerProp = init, action) => {
    switch (action.type) {
        case types.GET_POST_BEHIND:
            return {
                ...state,
                load: true
            }
        case types.GET_POST_SUCCESS:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case types.GET_POST_ERROR:
            return {
                ...state,
                load: false,
                errorMessage: action.data
            }
        case commentTypes.GET_COMMENT_BEHIND:
            state.data.find(r => r.id == action.id ).comments = {
                data: null,
                load: true,
                errorMessage: null
            }
            return {...state}
        case commentTypes.GET_COMMENT_SUCCESS:
            state.data.find(r => r.id == action.id ).comments = {
                data: action.data,
                load: false,
                errorMessage: null
            }
            return {...state}
        case commentTypes.GET_COMMENT_ERROR:
            state.data.find(r => r.id == action.id ).comments = {
                data: null,
                load: false,
                errorMessage: action.data
            }
            return {...state}
        default:
            return state
    }
}

export default postReducer;
