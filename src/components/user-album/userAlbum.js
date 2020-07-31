import React from 'react';
import {Link} from "react-router-dom";

type Props = {|
    id: number,
    userId: number,
    title: string
|};

function UserAlbum(props: Props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link to={`/photos/${props.id}`}  className="btn btn-primary">Photos</Link>
            </div>
        </div>
    )

}
export default UserAlbum;
