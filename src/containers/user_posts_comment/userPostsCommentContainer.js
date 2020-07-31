import React, {useCallback, useEffect, useState} from 'react';
import { connect } from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import {getPosts} from "../../actions/postActions";
import Post from "../../components/post/Post";
import type {postReducerProp} from "../../reducers/postReducer";
import {ErrorMessage} from "../../utils/customHooks";
import {withRouter} from "react-router";
import {getComments} from "../../actions/commentActions";

type Props = {|
    getComments: (id: number) => any,
    postReducer: postReducerProp,
    id: number
|};

function UserPostsCommentContainer(props: Props) {
    ErrorMessage({reducer: props.postReducer});
    const [comments, setComments] = useState({
        data: null,
        load: false,
        errorMessage: null
    });

    const [show, setShow] = useState(false);

    const getData = () => {
      setShow(true);
      props.getComments(props.id);
    };

    useEffect(() => {
        if(comments.data){
            setShow(false);
        }
    }, [comments])

    useEffect(() => {
        const comm = props.postReducer.data.find(res => res.id == props.id);
        if(comm.comments) {
            setComments(comm.comments)
        }
    }, [props.postReducer]);

    return (
        <>
            {show &&
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="sr-only">Loading...</span>
                </button>
            }
            {!show &&
                <button type="button" onClick={getData} className="btn btn-primary btn-lg btn-block">Show Comments</button>
            }
            <Spinner load={comments.load}>
                {comments.data &&
                <ul>
                    {comments.data.map((res, index) => {
                        return <li key={index}>{res.body}</li>
                    })}
                </ul>
                }
            </Spinner>
         </>
    );
}

const  mapStateToProps = (state) => {
    return {
        postReducer: state.postReducer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getComments: (id: number) => dispatch(getComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPostsCommentContainer);
