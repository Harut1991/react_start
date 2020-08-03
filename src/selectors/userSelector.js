import { createSelector } from 'reselect'
const getUsersSelector = state => state.userReducer

export const userSelector = createSelector(
    getUsersSelector,
    items => items
);
