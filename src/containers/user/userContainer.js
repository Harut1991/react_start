// @flow
import React, { useState } from 'react';
import SingleUser from '../../components/single-user/singleUser';
import UserAlbumContainer from './userAlbumContainer';

type Props = {|
    data: Array<{
        id: number,
        name: string,
        email: string,
        phone: string,
        company: {
            name: string
        }
    }>
|};

function UserContainer({ data }: Props) {
  const [albumVisable, setAlbumVisable] = useState({});

  const loadAlbum = (id: number) => {
    const album = { ...albumVisable };
    album[id] = !album[id];
    setAlbumVisable(album);
  };

  return (
    <ul>
      {data.map((res, index) => (
        <li key={index}>
          <div className="card">
            <SingleUser loadAlbum={loadAlbum} {...res} />
            {albumVisable[res.id]
                                && <UserAlbumContainer load={!!albumVisable[res.id]} id={res.id} />}
          </div>
        </li>
      ))}
    </ul>
  );
}
export default UserContainer;
