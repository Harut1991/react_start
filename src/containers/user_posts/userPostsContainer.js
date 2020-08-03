import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import {getPosts} from "../../actions/postActions";
import Post from "../../components/post/Post";
import {ErrorMessage} from "../../utils/customHooks";
import {withRouter} from "react-router";
import UserPostsCommentContainer from "../user_posts_comment/userPostsCommentContainer";
import {postSelector} from "../../selectors/postSelector";

type Props = {|
    match: {
        params: {
            id: number
        }
    }
|};

function UserPostsContainer(props: Props) {
    const posts = useSelector(postSelector);
    const dispatch = useDispatch();

    ErrorMessage({reducer: posts});

    const getHandler = useCallback(() => {
        dispatch(getPosts(props.match.params.id));
    }, [props.match.params.id]);

    useEffect(getHandler,[props.match.params.id]);

    return (
        <Spinner load={posts.load}>
            {posts.data &&
            <ul>
                {posts.data.map((res, index) => {
                    return (
                        <li key={index}>
                            <div className="card text-center">
                                <Post  {...res} />
                                <UserPostsCommentContainer id={res.id} />
                            </div>
                        </li>
                    )
                })}
            </ul>
            }
        </Spinner>
    );
}

export default withRouter(UserPostsContainer);
