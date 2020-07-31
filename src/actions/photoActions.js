import types from '../action_types/photo';

export const getPhotos = (id: number) => {
    return {
        type: types.GET_PHOTO,
        id: id
    }
};

export const getPhotosBehind = () => {
  return {
      type: types.GET_PHOTO_BEHIND,
  }
};

export const getPhotosSuccess = (data) => {
    return {
        type: types.GET_PHOTO_SUCCESS,
        data: data
    }
};

export const getPhotosError = (data) => {
    return {
        type: types.GET_PHOTO_ERROR,
        data: data
    }
};
