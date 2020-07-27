import { all, call } from 'redux-saga/effects';

import { blogSagas } from './blog/blog.sagas';

export default function* rootSaga() {
  yield all([call(blogSagas)]);
}
