// @flow
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import { ErrorMessage } from '../../utils/customHooks';
import { getPhotos } from '../../actions/photoActions';
import PhotoContainer from '../../containers/photo/photoContainer';
import { photoSelector } from '../../selectors/photoSelector';

type Props = {|
    match: {
        params: {
            id: number
        }
    }
|};

function Photos({ match }: Props) {
  const photos = useSelector(photoSelector);
  const dispatch = useDispatch();

  ErrorMessage({ reducer: photos });

  const getHandler = useCallback(() => {
    dispatch(getPhotos(match.params.id));
  }, [match.params.id]);

  useEffect(getHandler, [match.params.id]);

  return (
    <Spinner load={photos.load}>
      {photos.data
                && <PhotoContainer data={photos.data} />}
    </Spinner>
  );
}

export default Photos;
