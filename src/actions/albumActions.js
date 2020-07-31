import types from '../action_types/album';

export const getAlbums = (id: number) => {
    return {
        type: types.GET_ALBUM,
        id: id
    }
};

export const getAlbumsBehind = (id) => {
  return {
      type: types.GET_ALBUM_BEHIND,
      data: id
  }
};

export const getAlbumsSuccess = (data) => {
    return {
        type: types.GET_ALBUM_SUCCESS,
        data: data
    }
};

export const getAlbumsError = (data) => {
    return {
        type: types.GET_ALBUM_ERROR,
        data: data
    }
};
