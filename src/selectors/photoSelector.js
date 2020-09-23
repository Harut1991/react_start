import { createSelector } from 'reselect';

const getPhotoSelector = state => state.photoReducer;

export const photoSelector = createSelector(
  getPhotoSelector,
  items => items
);
