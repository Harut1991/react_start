import React from 'react';

type Props = {|
    thumbnailUrl: string,
    title: string,
|};

function PhotoComponent(props: Props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.thumbnailUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.url}  className="btn btn-primary" >Go to site</a>
            </div>
        </div>
    )

}
export default PhotoComponent;
