import { createSelector } from 'reselect'
const getPostsSelector = state => state.postReducer
const getPostCommentSelector = (id) => {
    return  (state) => {
         return  state.postReducer.data.find(i => i.id == id);
    }
}
export const postSelector = createSelector(
    getPostsSelector,
    items => {
        const res = JSON.parse(JSON.stringify(items));
        res.data && res.data.forEach(i => {
            delete i.comments;
        });
        return res;
    }
);

export const commentSelector =(id) => {
    return createSelector(
        getPostCommentSelector(id),
        items => {
            return items.comments ? items.comments : {
                data: null,
                load: false,
                errorMessage: null
            };
        }
    );
}
