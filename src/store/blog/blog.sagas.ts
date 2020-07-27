import { takeLatest, call, put, all } from 'redux-saga/effects';

import BlogActionTypes from './blog.types';
import { fetchBlogsFailure, fetchBlogsSuccess } from './blog.actions';

import axios from 'axios';

export function* fetchBlogs() {
  try {
    const {
      data: { response }
    } = yield axios.get('http://3.34.117.237/api/posts');
    yield put(fetchBlogsSuccess(response));
  } catch (error) {
    yield put(fetchBlogsFailure(error.message));
  }
}

export function* fetchBlogsStart() {
  yield takeLatest(BlogActionTypes.FETCH_BLOGS_START, fetchBlogs);
}

export function* blogSagas() {
  yield all([call(fetchBlogsStart)]);
}
