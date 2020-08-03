import React, { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import {ErrorMessage} from "../../utils/customHooks";
import {getComments} from "../../actions/commentActions";
import {commentSelector} from "../../selectors/postSelector";

type Props = {|
    id: number
|};

function UserPostsCommentContainer(props: Props) {
    const comments = useSelector(commentSelector(props.id));
    const dispatch = useDispatch();

    ErrorMessage({reducer: comments});

    const [show, setShow] = useState(false);

    const getData = () => {
      setShow(true);
      dispatch(getComments(props.id));
    };

    return (
        <>
            {(show && !comments.data)  &&
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="sr-only">Loading...</span>
                </button>
            }
            {(!show || comments.data) &&
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


export default UserPostsCommentContainer;
