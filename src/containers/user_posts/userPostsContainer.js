// @flow
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Spinner from '../../components/spinner/Spinner';
import { editPost, getPosts } from '../../actions/postActions';
import Post from '../../components/post/Post';
import { ErrorMessage } from '../../utils/customHooks';
import { postSelector } from '../../selectors/postSelector';
import UserPostsCommentContainer from '../user_posts_comment/userPostsCommentContainer';

function UserPostsContainer() {
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();
  const { userId } = useParams();

  ErrorMessage({ reducer: posts });

  const getHandler = useCallback(() => {
    dispatch(getPosts(userId));
  }, [userId]);

  useEffect(getHandler, [userId]);

  const save = (id, body) => {
    dispatch(editPost(id, body));
  };

  return (
    <Spinner load={posts.load}>
      {posts.data
            && (
              <ul>
                {posts.data.map((res, index) => (
                  <li key={index} className="li">
                    <div className="card text-center">
                      <Post {...res} saveP={(body, id) => save(body, id)} />
                      <UserPostsCommentContainer id={res.id} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
    </Spinner>
  );
}

export default UserPostsContainer;
