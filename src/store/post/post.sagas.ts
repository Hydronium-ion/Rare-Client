import { takeLatest, call, put, all } from 'redux-saga/effects';

import PostActionTypes from './post.types';
import { fetchPostSuccess, fetchPostFailure } from './post.actions';
import { store } from '../index';

import axios from 'axios';

function getFetchType(method: any, payload: Object) {
  switch (method) {
    case 'get':
      return (url: string) => axios.get(url);
    case 'post':
      return (url: string) => axios.post(url, payload);
    case 'update':
      return (url: string) => axios.put(url);
    default:
      return (url: string) => axios.delete(url);
  }
}

export function* fetchPost() {
  try {
    const type = yield store.getState();

    // 나중에 직접 포스팅 글 적은걸로 post요청보내기
    const payload = {
      title: '1번째 포스팅 입니다',
      content: '이런 저런 내용이 담겨있어요',
      thumbnail: 'https://t1.daumcdn.net/liveboard/dailylife/c7f9d1329a224725865e83c0dbf74950.JPG',
      authorId: 1,
      tags: '1번'
    };

    const rightfulFetch = getFetchType(type.post.method, payload);
    const response = yield rightfulFetch(`${process.env.SERVER}/api/posts/createdAt`);

    yield put(fetchPostSuccess(response));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}

export function* fetchPostStart() {
  yield takeLatest(PostActionTypes.FETCH_POST_START, fetchPost);
}

export function* postSagas() {
  yield all([call(fetchPostStart)]);
}
