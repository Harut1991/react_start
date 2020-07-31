import React, {useCallback, useEffect} from 'react';
import { connect } from 'react-redux'
import Spinner from "../../components/spinner/Spinner";
import {ErrorMessage} from "../../utils/customHooks";
import {getPhotos} from "../../actions/photoActions";
import type {photoReducerProp} from "../../reducers/photoReducer";
import PhotoContainer from "../../containers/photo/photoContainer";

type Props = {|
    getPhotos: () => any,
    photoReducer: photoReducerProp
|};

function Photos(props: Props) {
  ErrorMessage({reducer: props.photoReducer});

  const getHandler = useCallback(() => {
      props.getPhotos(props.match.params.id);
  },[props.match.params.id]);

  useEffect(getHandler,[props.match.params.id]);

  return (
        <Spinner load={props.photoReducer.load}>
            {props.photoReducer.data &&
                <PhotoContainer data={props.photoReducer.data}/>
            }

        </Spinner>
  );
}

const  mapStateToProps = (state) => {
    return {
        photoReducer: state.photoReducer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPhotos: (id) => dispatch(getPhotos(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
