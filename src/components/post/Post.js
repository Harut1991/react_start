// @flow

import React from 'react';
import './post.css';

type Props = {|
    title: string,
    body: string,
|};

function Post(props: Props) {
    return (
        <>
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.body}</h5>
            </div>
        </>
    )

}
export default Post;
