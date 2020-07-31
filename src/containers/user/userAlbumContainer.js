import React, {memo, useCallback, useEffect, useState} from 'react';
import Spinner from "../../components/spinner/Spinner";
import {connect} from "react-redux";
import {getAlbums} from "../../actions/albumActions";
import {ErrorMessage} from "../../utils/customHooks";
import UserAlbum from "../../components/user-album/userAlbum";

type Props = {|
    load: boolean,
    id: number,
    albumReducer: Object,
    getAlbums: (id) => any
|};

function UserAlbumContainer(props: Props) {
    ErrorMessage({reducer: props.albumReducer});

    const [data, setData] = useState({
        load: true,
        data: null,
        errorMessage: null
    });

    const getHandler = useCallback(() => {
        props.getAlbums(props.id);
    },[props.id]);

    useEffect(getHandler,[props.id]);

    useEffect(() => {
        if(Object.keys(props.albumReducer).includes(String(props.id)) && props.albumReducer[props.id]) {
            setData(props.albumReducer[props.id]);
        }
    }, [props.albumReducer]);

    return (
        <Spinner load={data.load}>
            <div className="card-columns">
                {data.data && data.data.map((res, index) => {
                    return <UserAlbum key={index} {...res} />
                })}
            </div>
        </Spinner>
    )

}
const  mapStateToProps = (state) => {
    return {
        albumReducer: state.albumReducer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAlbums: (id: number) => dispatch(getAlbums(id))
    }
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(UserAlbumContainer));
