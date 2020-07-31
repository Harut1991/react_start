import React, {useCallback, useEffect} from 'react';
import { connect } from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import {getPosts} from "../../actions/postActions";
import Post from "../../components/post/Post";
import type {postReducerProp} from "../../reducers/postReducer";
import {ErrorMessage} from "../../utils/customHooks";

type Props = {|
    getPosts: (id: number) => any,
    postReducer: postReducerProp,
    match: {
        params: {
            id: number
        }
    }
|};

function UserPosts(props: Props) {
    ErrorMessage({reducer: props.postReducer});

    const getHandler = useCallback(() => {
        props.getPosts(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(getHandler,[props.match.params.id]);

    return (
        <Spinner load={props.postReducer.load}>
            {props.postReducer.data &&
            <ul>
                {props.postReducer.data.map((res, index) => {
                    return <Post key={index} {...res} />
                })}
            </ul>
            }
        </Spinner>
    );
}

const  mapStateToProps = (state) => {
    return {
        postReducer: state.postReducer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPosts: (id: number) => dispatch(getPosts(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
