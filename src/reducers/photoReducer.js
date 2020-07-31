import types from '../action_types/post';

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
        default:
            return state
    }
}

export default postReducer;
