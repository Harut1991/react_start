import React from 'react';
import PhotoComponent from "../../components/photo/photoComponent";

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

function PhotoContainer(props: Props) {
    return (
        <div className="card-columns">
            {props.data && props.data.map((res, index) => {
                return <PhotoComponent {...res} key={index} />
            })}
        </div>
    )
}
export default PhotoContainer;
