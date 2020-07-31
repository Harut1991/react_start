import types from '../action_types/user';

const init = {
    data: null,
    load: false,
    errorMessage: null
};

export type userReducerProp = {
    data: ?Array<any>,
    errorMessage: ?string,
    load: boolean
};

const userReducer = (state: userReducerProp = init, action) => {
    switch (action.type) {
        case types.GET_USER_BEHIND:
            return {
                ...state,
                load: true
            }
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case types.GET_USER_ERROR:
            return {
                ...state,
                load: false,
                errorMessage: action.data
            }
        default:
            return state
    }
}

export default userReducer;
