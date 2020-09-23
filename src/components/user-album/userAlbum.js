// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {|
    id: number,
    userId: number,
    title: string
|};

function UserAlbum({ userId, title, id }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/users/${userId}/photos/${id}`} className="btn btn-primary">Photos</Link>
      </div>
    </div>
  );
}
export default UserAlbum;
