// @flow

import React from 'react';

type Props = {|
    title: string,
    body: string,
|};

function Post(props: Props) {
    return (
        <li>
            <div className="card text-center">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.body}</h5>
                </div>
            </div>
        </li>
    )

}
export default Post;
