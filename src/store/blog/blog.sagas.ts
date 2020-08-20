import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import BlogActionTypes from './blog.types';
import { fetchBlogsFailure, fetchBlogsSuccess, fetchAdditionalBlogsSuccess, fetchAdditionalBlogsFailure } from './blog.actions';

import axios from 'axios';

export function* fetchBlogs() {
  try {
    const {
      data: { response }
    } = yield axios.get(`${process.env.SERVER}/api/posts/likes`);
    yield put(fetchBlogsSuccess(response));
  } catch (error) {
    yield put(fetchBlogsFailure(error.message));
  }
}

export function* fetchAdditionalBlogs() {
  try {
    const state = yield select(reducer => reducer.blog);
    console.log("state is ", state)
    const { page } = state;
    const {
      data: { response }
    } = yield axios.get(`${process.env.SERVER}/api/posts/likes?page=${page}&size=20`);
    yield put(fetchAdditionalBlogsSuccess(response));
  } catch (error) {
    yield put(fetchAdditionalBlogsFailure(error.message))
  }
}

export function* fetchBlogsStart() {
  yield takeLatest(BlogActionTypes.FETCH_BLOGS_START, fetchBlogs);
}

export function* fetchAdditionalBlogsStart() {
  yield takeLatest(BlogActionTypes.FETCH_ADDITIONAL_BLOGS_START, fetchAdditionalBlogs);
}

export function* blogSagas() {
  yield all([call(fetchBlogsStart), call(fetchAdditionalBlogsStart)]);
}
