// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './singleUser.css';

type Props = {|
    id: number,
    loadAlbum: () => any,
    name: string,
    email: string,
    phone: string,
    company: {
        name: string
    },
|};

function SingleUser({ name, email, phone, company, id, loadAlbum }: Props) {
  return (
    <>
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h5 className="card-title">Email: {email}</h5>
        <h5 className="card-title">Phone: {phone}</h5>
        <h5 className="card-title">Company: {company.name}</h5>
        <Link to={`/users/${id}/posts`} className="btn btn-primary">Go to posts</Link>
        <button className="btn btn-primary album" onClick={() => loadAlbum(id)}>Show Albums</button>
      </div>
    </>
  );
}
export default SingleUser;
