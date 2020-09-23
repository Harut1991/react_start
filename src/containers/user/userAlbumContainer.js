// @flow
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import { getAlbums } from '../../actions/albumActions';
import { ErrorMessage } from '../../utils/customHooks';
import UserAlbum from '../../components/user-album/userAlbum';
import { albumSelector } from '../../selectors/albumSelector';

type Props = {|
    id: number
|};

function UserAlbumContainer({ id }: Props) {
  const albums = useSelector(albumSelector(id));
  const dispatch = useDispatch();

  ErrorMessage({ reducer: albums });

  const getHandler = useCallback(() => {
    dispatch(getAlbums(id));
  }, [id]);

  useEffect(getHandler, [id]);

  return (
    <Spinner load={albums.load}>
      <div className="card-columns">
        {albums.data && albums.data.map((res, index) => <UserAlbum key={index} {...res} />)}
      </div>
    </Spinner>
  );
}

export default memo(UserAlbumContainer);
