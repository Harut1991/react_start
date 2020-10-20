// @flow
import { createSelector } from 'reselect';

const getInitSelector = state => state.initReducer;

export const initAppSelector = createSelector(
  getInitSelector,
  items => items.init || null
);
