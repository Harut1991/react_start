import React from 'react';
import {Link} from "react-router-dom";
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

function SingleUser(props: Props) {
    return (
        <>
            <h5 className="card-header">{props.name}</h5>
            <div className="card-body">
                <h5 className="card-title">Email: {props.email}</h5>
                <h5 className="card-title">Phone: {props.phone}</h5>
                <h5 className="card-title">Company: {props.company.name}</h5>
                <Link to={`/users/${props.id}/posts`}  className="btn btn-primary">Go to posts</Link>
                <button  className="btn btn-primary album" onClick={() => props.loadAlbum(props.id)}>Show Albums</button>
            </div>
        </>
    )

}
export default SingleUser;
