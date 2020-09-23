// @flow
import types from '../action_types/photo';

export const getPhotos = (id: number) => ({
  type: types.GET_PHOTO,
  id
});

export const getPhotosBehind = () => ({
  type: types.GET_PHOTO_BEHIND
});

export const getPhotosSuccess = (data) => ({
  type: types.GET_PHOTO_SUCCESS,
  data
});

export const getPhotosError = (data) => ({
  type: types.GET_PHOTO_ERROR,
  data
});
