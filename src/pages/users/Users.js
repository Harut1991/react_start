// @flow
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/userActions';
import Spinner from '../../components/spinner/Spinner';
import UserContainer from '../../containers/user/userContainer';
import { ErrorMessage } from '../../utils/customHooks';
import { userSelector } from '../../selectors/userSelector';

function Users() {
  const users = useSelector(userSelector);
  const dispatch = useDispatch();

  ErrorMessage({ reducer: users });

  const getHandler = useCallback(() => {
    dispatch(getUser());
  });

  useEffect(getHandler, []);

  return (
    <Spinner load={users.load}>
      {users.data
                && <UserContainer data={users.data} />}
    </Spinner>
  );
}
export default Users;
