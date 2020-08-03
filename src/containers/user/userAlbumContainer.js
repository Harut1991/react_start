import React, {memo, useCallback, useEffect, useState} from 'react';
import Spinner from "../../components/spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {getAlbums} from "../../actions/albumActions";
import {ErrorMessage} from "../../utils/customHooks";
import UserAlbum from "../../components/user-album/userAlbum";
import {albumSelector} from "../../selectors/albumSelector";

type Props = {|
    id: number
|};

function UserAlbumContainer(props: Props) {
    const albums = useSelector(albumSelector(props.id));
    const dispatch = useDispatch();
    ErrorMessage({reducer: albums});

    const getHandler = useCallback(() => {
        dispatch(getAlbums(props.id));
    },[props.id]);

    useEffect(getHandler,[props.id]);

    return (
        <Spinner load={albums.load}>
            <div className="card-columns">
                {albums.data && albums.data.map((res, index) => {
                    return <UserAlbum key={index} {...res} />
                })}
            </div>
        </Spinner>
    )
}

export default memo(UserAlbumContainer);
