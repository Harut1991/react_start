import React, {useCallback, useEffect} from 'react';
import {getUser} from "../../actions/userActions";
import { connect } from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import type {userReducerProp} from "../../reducers/userReducer";
import UserContainer from "../../containers/user/userContainer";
import {ErrorMessage} from "../../utils/customHooks";

type Props = {|
    getUser: () => any,
    userReducer: userReducerProp
|};

function Photos(props: Props) {

  return (
        55
  );
}

const  mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
