// @flow
declare module 'react-redux' {
    declare module.exports: any;

    declare function useDispatch(): Function;
    declare function useSelector(): Function;
    declare function connect(): Function
}

declare module 'redux' {
    declare module.exports: any;
}

declare module 'redux-saga' {
    declare module.exports: any;
}

declare module 'redux-saga/effects' {
    declare module.exports: any;

    declare function takeLatest(): Promise<any>;
    declare function takeEvery(): Promise<any>;
    declare function take(): Promise<any>;
    declare function put(): Promise<any>;
    declare function all(): Iterator;
}

declare module 'react-router-dom' {
    declare module.exports: any;
    declare function withRouter(): Function
    declare function Router(): Function
    declare function Redirect(): Function
    declare function useLocation(): Function
    declare function useHistory(): Function
    declare function useParams(): Function
    declare function useMatch(): Function
}

declare module 'history' {
    declare module.exports: any;
}
