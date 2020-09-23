// @flow
import React from 'react';

type Props = {|
    thumbnailUrl: string,
    title: string,
    url: string,
    title: string,
|};

function PhotoComponent({ thumbnailUrl, title, url }: Props) {
  return (
    <div className="card">
      <img className="card-img-top" src={thumbnailUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={url} className="btn btn-primary">Go to site</a>
      </div>
    </div>
  );
}
export default PhotoComponent;
