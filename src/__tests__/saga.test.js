import React from "react";
import {fetchUser} from "../saga/userSaga";
import types from "../action_types/user";
import albumTypes from "../action_types/album";
import commentType from "../action_types/comment";
import photoType from "../action_types/photo";
import postType from "../action_types/post";
import { put, call } from 'redux-saga/effects';
import {fetchAlbumCall, fetchCommentCall, fetchPhotoCall, fetchPostCall, fetchUserCall} from "../saga/calls/calls";
import {fetchAlbum} from "../saga/albumSaga";
import {fetchComment} from "../saga/commentSaga";
import {fetchPhoto} from "../saga/photoSaga";
import {fetchPost} from "../saga/postSaga";

test('saga user get', () => {
    const saga = fetchUser()
    expect(saga.next().value).toEqual(put({type: types.GET_USER_BEHIND}))
    expect(saga.next().value).toEqual(call(fetchUserCall))
    expect(saga.next().value).toEqual(put({type: types.GET_USER_SUCCESS, data: undefined}))

});

test('saga album get', () => {
    const saga = fetchAlbum({type: albumTypes.GET_ALBUM, id: 1});
    expect(saga.next().value).toEqual(put({type: albumTypes.GET_ALBUM_BEHIND, id: 1}))
    expect(saga.next().value).toEqual(call(fetchAlbumCall, {type: albumTypes.GET_ALBUM, id: 1}))
    expect(saga.next().value).toEqual(put({type: albumTypes.GET_ALBUM_SUCCESS, data: undefined, id: 1}))

});

test('saga comment get', () => {
    const saga = fetchComment({type: commentType.GET_COMMENT, id: 1});
    expect(saga.next().value).toEqual(put({type: commentType.GET_COMMENT_BEHIND, id: 1}))
    expect(saga.next().value).toEqual(call(fetchCommentCall, {type: commentType.GET_COMMENT, id: 1}))
    expect(saga.next().value).toEqual(put({type: commentType.GET_COMMENT_SUCCESS, data: undefined, id: 1}))
});

test('saga photo get', () => {
    const saga = fetchPhoto({type: photoType.GET_PHOTO, id: 1});
    expect(saga.next().value).toEqual(put({type: photoType.GET_PHOTO_BEHIND}))
    expect(saga.next().value).toEqual(call(fetchPhotoCall, {type: photoType.GET_PHOTO, id: 1}))
    expect(saga.next().value).toEqual(put({type: photoType.GET_PHOTO_SUCCESS, data: undefined}))
});

test('saga post get', () => {
    const saga = fetchPost({type: postType.GET_POST, id: 1});
    expect(saga.next().value).toEqual(put({type: postType.GET_POST_BEHIND}))
    expect(saga.next().value).toEqual(call(fetchPostCall, {type: postType.GET_POST, id: 1}))
    expect(saga.next().value).toEqual(put({type: postType.GET_POST_SUCCESS, data: undefined}))
});

