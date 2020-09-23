// @flow
import types from '../action_types/album';

export const getAlbums = (id: number) => ({
  type: types.GET_ALBUM,
  id
});

export const getAlbumsBehind = (id) => ({
  type: types.GET_ALBUM_BEHIND,
  data: id
});

export const getAlbumsSuccess = (data) => ({
  type: types.GET_ALBUM_SUCCESS,
  data
});

export const getAlbumsError = (data) => ({
  type: types.GET_ALBUM_ERROR,
  data
});
