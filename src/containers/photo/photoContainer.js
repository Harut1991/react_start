// @flow
import React from 'react';
import PhotoComponent from '../../components/photo/photoComponent';

type Props = {|
    data: Array<
        {
            albumId: number,
            id: number,
            thumbnailUrl: string,
            title: string,
            url: string
        }
    >
|};

function PhotoContainer({ data }: Props) {
  return (
    <div className="card-columns">
      {data && data.map((res, index) => <PhotoComponent {...res} key={index} />)}
    </div>
  );
}
export default PhotoContainer;
