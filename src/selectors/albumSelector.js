// @flow
import { createSelector } from 'reselect';

const getAlbumSelector = (id) => (state) => {
  if (Object.keys(state.albumReducer).includes(String(id)) && state.albumReducer[id]) {
    return state.albumReducer[id];
  }
  return {
    load: true,
    data: null,
    errorMessage: null
  };
};

export const albumSelector = (id) => createSelector(
  getAlbumSelector(id),
  items => items
);
